const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

function printFunc(name) {
  const idx = js.indexOf(`function ${name}(`);
  if (idx !== -1) {
    console.log(`=== FUNCTION ${name} ===`);
    console.log(js.substring(idx, idx + 1500));
  }
}

printFunc('V_');
printFunc('H_');
printFunc('W_');
printFunc('K_');
