const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

const idx = js.indexOf('{initial:{opacity:0,x:50,scale:.95}');
console.log('--- Context of x:50,scale:.95 ---');
console.log(js.substring(Math.max(0, idx - 200), idx + 600));
