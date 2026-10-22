const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

function extractVar(name) {
  const reg = new RegExp(`(?:var|let|const)\\s+${name}\\s*=\\s*(\\[[^\\]]+\\])`);
  const m = js.match(reg);
  if (m) {
    console.log(`=== ${name} ===`);
    console.log(m[1].substring(0, 500));
  } else {
    // try searching where name=
    const idx = js.indexOf(`${name}=[`);
    if (idx !== -1) {
      console.log(`=== ${name} (from assignment) ===`);
      console.log(js.substring(idx, idx + 500));
    }
  }
}

extractVar('Ns');
extractVar('Is');
extractVar('Ls');
extractVar('uv');
extractVar('dv');
extractVar('Ps');
extractVar('Fs');
