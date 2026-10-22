const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

// Find the definition of `s` in context 1
const sIdx = js.indexOf('whileInView:{opacity:1,y:0,x:0}');
console.log('--- Motion Reveal Wrapper ---');
console.log(js.substring(sIdx - 300, sIdx + 200));

// Find all usages of this reveal wrapper
const funcMatches = js.substring(sIdx - 50, sIdx).match(/function\s+([A-Za-z0-9_]+)/);
console.log('Reveal component function name:', funcMatches);

// Find where this wrapper is used across the codebase
const wrapperName = js.substring(sIdx - 50, sIdx).match(/function\s+([A-Za-z0-9_]+)|([A-Za-z0-9_]+)=function/);
console.log('wrapperName:', wrapperName);

// Let's also look for all whileHover, whileTap, keyframes in index.css
