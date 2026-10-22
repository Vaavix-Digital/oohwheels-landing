const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

const idx = js.indexOf('function J_(');
console.log('--- J_ (Hero Phone Mockup) ---');
console.log(js.substring(idx, idx + 1200));
