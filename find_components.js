const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

function printFunc(name) {
  const idx = js.indexOf(`function ${name}(`);
  if (idx !== -1) {
    console.log(`=== ${name} ===`);
    console.log(js.substring(idx, idx + 800));
  }
}

printFunc('av');
printFunc('ov');
printFunc('xv');
