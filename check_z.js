const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

const idx = js.indexOf('function Z_(');
if (idx !== -1) {
  console.log(js.substring(idx, idx + 1000));
}
