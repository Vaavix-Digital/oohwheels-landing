const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

// Find all usages of Y( or jsx(Y, ...
const yUsages = [...js.matchAll(/\(0,[A-Za-z0-9_]+\.jsx\)\(Y,\s*({[^}]+})/g)].map(m => m[1]);
console.log('jsx(Y) count:', yUsages.length);
console.log('Sample Y usages:', yUsages.slice(0, 10));

// Also let's find all motion. or M_ usages
const mUsages = [...js.matchAll(/M_\.([a-zA-Z0-9]+)/g)].map(m => m[1]);
console.log('M_ tags:', Array.from(new Set(mUsages)));
