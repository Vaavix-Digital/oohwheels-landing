const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

// Find all functions that use Y
const matches = [...js.matchAll(/\(0,[A-Za-z0-9_]+\.jsx\)\(Y,\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g)];
console.log(`Found ${matches.length} Y usages:`);
matches.forEach((m, i) => {
  console.log(`--- [${i + 1}] ---`);
  // print first 200 chars of props
  console.log(m[1].substring(0, 200));
});
