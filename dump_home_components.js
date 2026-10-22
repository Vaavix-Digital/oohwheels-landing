const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

const funcs = ['X_', 'Q_', 'nv', 'rv', 'iv', 'cv', 'lv', 'fv', 'pv', 'hv'];

funcs.forEach(f => {
  const idx = js.indexOf(`function ${f}(`);
  if (idx !== -1) {
    console.log(`\n================== FUNCTION ${f} ==================`);
    console.log(js.substring(idx, idx + 1200));
  }
});
