import fs from 'fs';
import sharp from 'sharp';

const svgCode = `<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
  </defs>
  <rect width="1024" height="1024" rx="224" fill="url(#bg)" />
  <g transform="translate(212, 212) scale(25)">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="7" cy="17" r="2" fill="none" stroke="white" stroke-width="2"/>
    <path d="M9 17h6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="17" cy="17" r="2" fill="none" stroke="white" stroke-width="2"/>
  </g>
</svg>`;

fs.writeFileSync('renderer/public/images/carloader.svg', svgCode);
fs.writeFileSync('resources/icon.svg', svgCode); // also in resources

sharp(Buffer.from(svgCode))
  .resize(1024, 1024)
  .png()
  .toFile('resources/icon.png')
  .then(() => {
    console.log('Successfully created resources/icon.png (1024x1024)');
  })
  .catch(err => {
    console.error('Error converting SVG to PNG:', err);
  });
