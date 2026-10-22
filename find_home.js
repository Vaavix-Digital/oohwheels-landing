const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

// Find the Home component
// Usually contains `Pass your driving test without the boring bits.` or Y_
const homeIdx = js.indexOf('function bv(');
if (homeIdx !== -1) {
  console.log(js.substring(homeIdx, homeIdx + 3000));
} else {
  // Let's find where Y_ is rendered
  const yMatches = [...js.matchAll(/([a-zA-Z0-9_]+)=function[^{]*\{[^}]*Y_[^}]*\}/g)];
  console.log('Matches:', yMatches.map(m => m[0]));
}
