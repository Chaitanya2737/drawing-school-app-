import fs from 'fs';
import sharp from 'sharp';

const svgCode = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="100%">
      <stop offset="0%" stop-color="#2c3242" />
      <stop offset="50%" stop-color="#232734" />
      <stop offset="100%" stop-color="#171a22" />
    </linearGradient>
  </defs>
  <rect width="300" height="300" rx="60" fill="url(#bg)" />

  <g transform="translate(0, 70)">
    <!-- ground shadow -->
    <ellipse cx="150" cy="138" rx="130" ry="8" fill="rgba(0,0,0,0.22)" />

    <!-- wheel-well black backdrops -->
    <circle cx="80" cy="120" r="26" fill="#111" />
    <circle cx="220" cy="120" r="26" fill="#111" />

    <!-- body -->
    <path
      d="
        M 30 118
        L 30 100
        C 30 92 36 86 44 86
        L 70 86
        L 95 55
        C 100 49 108 46 116 46
        L 190 46
        C 198 46 205 49 210 55
        L 232 82
        L 262 86
        C 270 87 276 93 276 101
        L 276 118
        Z
      "
      fill="#c1552c"
      stroke="#8f3d1e"
      stroke-width="2"
      stroke-linejoin="round"
    />

    <!-- windows -->
    <path d="M 100 82 L 118 56 C 121 52 126 50 131 50 L 148 50 L 148 82 Z" fill="#161a2e" />
    <path d="M 154 82 L 154 50 L 186 50 C 191 50 196 52 199 56 L 216 82 Z" fill="#161a2e" />
    <rect x="150" y="50" width="4" height="32" fill="#8f3d1e" />

    <!-- door seam -->
    <line x1="180" y1="86" x2="180" y2="118" stroke="#8f3d1e" stroke-width="2" opacity="0.6" />

    <!-- bumpers -->
    <rect x="30" y="100" width="12" height="18" rx="3" fill="#eee7dc" />
    <rect x="264" y="100" width="12" height="18" rx="3" fill="#eee7dc" />

    <!-- lights -->
    <circle cx="268" cy="96" r="4" fill="#f4d58d" />
    <circle cx="38" cy="96" r="4" fill="#e0574a" />

    <!-- door handle -->
    <rect x="164" y="76" width="10" height="4" rx="2" fill="#eee7dc" />

    <!-- wheel arches -->
    <path d="M 54 118 A 26 26 0 0 1 106 118" fill="none" stroke="#eee7dc" stroke-width="3" opacity="0.7" />
    <path d="M 194 118 A 26 26 0 0 1 246 118" fill="none" stroke="#eee7dc" stroke-width="3" opacity="0.7" />

    <!-- wheels -->
    <g transform="translate(80,120)">
      <circle r="24" fill="#151515" />
      <circle r="24" fill="none" stroke="#333" stroke-width="2" />
      <circle r="12" fill="#c9c9c9" />
      <line x1="0" y1="-12" x2="0" y2="12" stroke="#777" stroke-width="2" />
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#777" stroke-width="2" />
      <circle r="3" fill="#555" />
    </g>
    <g transform="translate(220,120)">
      <circle r="24" fill="#151515" />
      <circle r="24" fill="none" stroke="#333" stroke-width="2" />
      <circle r="12" fill="#c9c9c9" />
      <line x1="0" y1="-12" x2="0" y2="12" stroke="#777" stroke-width="2" />
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#777" stroke-width="2" />
      <circle r="3" fill="#555" />
    </g>
  </g>
</svg>`;

fs.writeFileSync('renderer/public/images/carloader.svg', svgCode);
fs.writeFileSync('resources/icon.svg', svgCode);

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
