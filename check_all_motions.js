const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

// Find all occurrences of M_.
const regexM = /M_\.([a-zA-Z0-9]+)\s*,\s*({[^}]+})/g;
let mMatch;
console.log('--- ALL M_ (Framer Motion) USAGES ---');
while ((mMatch = regexM.exec(js)) !== null) {
  console.log(`Tag: ${mMatch[1]} -> ${mMatch[2].substring(0, 150)}`);
}

// Find all occurrences of Y component
const regexY = /\(0,[A-Za-z0-9_]+\.jsx\)\(Y,\s*({[^}]+})/g;
let yMatch;
console.log('--- ALL Y (Reveal) PROPS ---');
let count = 0;
while ((yMatch = regexY.exec(js)) !== null) {
  count++;
  console.log(`${count}: ${yMatch[1].substring(0, 150)}`);
}
