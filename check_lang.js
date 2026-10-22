const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

const idx = js.indexOf('stiffness:260');
console.log('--- Context of Languages ---');
console.log(js.substring(Math.max(0, idx - 200), idx + 600));
