const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

const yIdx = js.indexOf('function Y_(');
console.log('--- Y_ (Hero Component) ---');
console.log(js.substring(yIdx, yIdx + 2000));
