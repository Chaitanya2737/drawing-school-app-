import prisma from "../../config/database.js";

export const getTemplates = async (req, res) => {
  try {
    const tokenRecord = await prisma.whatsAppToken.findFirst();
    if (!tokenRecord) {
      return res.status(404).json({ status: false, message: "WhatsApp not configured" });
    }

    const { wabaId, accessToken } = tokenRecord;
    const API_VERSION = process.env.META_API_VERSION || "v20.0";
    
    // Fetch from Meta
    const url = `https://graph.facebook.com/${API_VERSION}/${wabaId}/message_templates`;
    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${accessToken}`
      }
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json({ status: false, message: data.error?.message || "Failed to fetch templates" });
    }

    // Sync with local DB (optional, but good for local lookups)
    const templates = data.data || [];
    for (const t of templates) {
      const existing = await prisma.whatsAppTemplate.findFirst({ where: { name: t.name } });
      if (existing) {
        await prisma.whatsAppTemplate.update({
          where: { id: existing.id },
          data: { status: t.status, category: t.category, templateId: t.id, language: t.language }
        });
      } else {
        await prisma.whatsAppTemplate.create({
          data: {
            name: t.name,
            language: t.language,
            category: t.category,
            status: t.status,
            templateId: t.id,
            body: t.components?.find(c => c.type === 'BODY')?.text || ""
          }
        });
      }
    }

    return res.status(200).json({ status: true, data: templates });
  } catch (error) {
    console.error("Error fetching templates:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const createTemplate = async (req, res) => {
  try {
    const { name, category, language, bodyText } = req.body;
    
    if (!name || !category || !language || !bodyText) {
      return res.status(400).json({ status: false, message: "Missing required fields" });
    }

    const tokenRecord = await prisma.whatsAppToken.findFirst();
    if (!tokenRecord) {
      return res.status(404).json({ status: false, message: "WhatsApp not configured" });
    }

    const { wabaId, accessToken } = tokenRecord;
    const API_VERSION = process.env.META_API_VERSION || "v20.0";
    
    const url = `https://graph.facebook.com/${API_VERSION}/${wabaId}/message_templates`;
    
    // Auto-generate realistic examples for variables to prevent Meta from auto-rejecting
    const variableMatches = bodyText.match(/\{\{\d+\}\}/g);
    let exampleData = null;
    if (variableMatches && variableMatches.length > 0) {
      const maxVar = Math.max(...variableMatches.map(v => parseInt(v.replace(/[^0-9]/g, ''))));
      // Meta's NLP sometimes rejects "Sample 1", so we use realistic placeholder words
      const realisticWords = ["John Doe", "Monday", "ABC", "123", "Information"];
      const exampleArray = Array.from({ length: maxVar }, (_, i) => realisticWords[i % realisticWords.length]);
      exampleData = {
        body_text: [exampleArray]
      };
    }
    
    const payload = {
      name: name.toLowerCase().replace(/[^a-z0-9_]/g, '_'),
      language,
      category,
      components: [
        {
          type: "BODY",
          text: bodyText,
          ...(exampleData && { example: exampleData })
        }
      ]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    
    const data = await response.json();
    console.log("===============================");
    console.log("META TEMPLATE CREATION RESPONSE");
    console.log("===============================");
    console.dir(data, { depth: null });
    
    if (!response.ok) {
      return res.status(response.status).json({ status: false, message: data.error?.error_user_msg || data.error?.message || "Failed to create template", raw_meta_response: data });
    }

    // Save to local DB as well (upsert to avoid unique constraint violation if it already exists)
    await prisma.whatsAppTemplate.upsert({
      where: { name: payload.name },
      update: {
        language: payload.language,
        category: payload.category,
        status: "PENDING",
        templateId: data.id,
        body: payload.components[0].text
      },
      create: {
        name: payload.name,
        language: payload.language,
        category: payload.category,
        status: "PENDING",
        templateId: data.id,
        body: payload.components[0].text
      }
    });

    return res.status(201).json({ status: true, message: "Template created successfully", data });
  } catch (error) {
    console.error("Error creating template:", error);
    return res.status(500).json({ status: false, message: "Internal server error" });
  }
};
