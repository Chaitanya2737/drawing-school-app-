"use client";

import { react, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "radix-ui";



const Index = () => {
  const [open, setOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);
  const [checkList, setCheckList] = useState([]);


    useEffect(() => {
      async function checkStatus() {
        try {
          const { fetchApi } = await import("../../lib/api");
          const response = await fetchApi("/api/setup-check");
          const data = await response.json();
          setCheckList(data.checklist)
          setIsCompleted(data.setupComplete)
        } catch (error) {
          console.error("Failed to check status:", error);
        }
      }
      checkStatus();
    }, []);

    console.log(isCompleted , checkList)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>

            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
