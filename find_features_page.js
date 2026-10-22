const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

// Search for Features page component
const idx = js.indexOf('Everything you need to pass first time.');
if (idx !== -1) {
  console.log(js.substring(idx - 300, idx + 1000));
}
