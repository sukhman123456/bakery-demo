const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'bakery');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const artifactDir = path.join(
  process.env.USERPROFILE,
  '.gemini',
  'antigravity-ide',
  'brain',
  'cfbd1000-fe12-442d-a527-688ae4589990'
);

const files = fs.readdirSync(artifactDir);

const mapping = [
  { pattern: /artisanal_muffins.*\.jpg$/, dest: 'muffins.jpg' },
  { pattern: /homemade_biscuits.*\.jpg$/, dest: 'homemade-biscuits.jpg' },
  { pattern: /fudge_brownies.*\.jpg$/, dest: 'brownies.jpg' },
  { pattern: /artisanal_donuts.*\.jpg$/, dest: 'donuts.jpg' },
  { pattern: /bakery_cream_rolls.*\.jpg$/, dest: 'cream-rolls.jpg' },
  { pattern: /artisanal_garlic_bread.*\.jpg$/, dest: 'garlic-bread.jpg' },
  { pattern: /french_patisserie_tarts.*\.jpg$/, dest: 'tarts.jpg' },
  { pattern: /celebration_gift_hamper.*\.jpg$/, dest: 'celebration-hamper.jpg' },
  { pattern: /gourmet_cake_pops.*\.jpg$/, dest: 'cake-pops.jpg' },
  { pattern: /artisanal_fresh_bread.*\.jpg$/, dest: 'fresh-bread.jpg' },
];

for (const { pattern, dest } of mapping) {
  const found = files.find(f => pattern.test(f));
  if (found) {
    const src = path.join(artifactDir, found);
    const target = path.join(targetDir, dest);
    fs.copyFileSync(src, target);
    console.log(`Copied ${found} -> ${dest}`);
  } else {
    console.log(`Not found for ${dest}`);
  }
}
