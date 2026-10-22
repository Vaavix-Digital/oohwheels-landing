const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

const idx = js.indexOf('q_=[');
if (idx !== -1) {
  console.log(js.substring(idx, idx + 1000));
} else {
  const idx2 = js.indexOf('q_=');
  console.log(js.substring(idx2, idx2 + 1000));
}
