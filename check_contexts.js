const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

function findContext(pattern, length = 300) {
  const idx = js.indexOf(pattern);
  if (idx !== -1) {
    return js.substring(Math.max(0, idx - 100), Math.min(js.length, idx + length));
  }
  return null;
}

console.log('--- Context 1 (margin -60px) ---');
console.log(findContext('margin:`-60px`'));

console.log('--- Context 2 (spring stiffness 260) ---');
console.log(findContext('stiffness:260'));

console.log('--- Context 3 (opacity:1,y:0) ---');
console.log(findContext('{opacity:1,y:0}'));

console.log('--- Context 4 (height auto) ---');
console.log(findContext('{height:`auto`,opacity:1}'));
