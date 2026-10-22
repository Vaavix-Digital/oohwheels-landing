const fs = require('fs');
const js = fs.readFileSync('base44_bundle.js', 'utf8');

// Search for motion. usages
const motionTags = [...js.matchAll(/motion\.([a-zA-Z0-9]+)/g)].map(m => m[1]);
console.log('Motion tags count:', motionTags.length, Array.from(new Set(motionTags)));

// Search for initial, animate, whileHover, whileTap, transition
const whileHover = [...js.matchAll(/whileHover:\s*({[^}]+})/g)].map(m => m[1]);
console.log('whileHover count:', whileHover.length, whileHover.slice(0, 5));

const whileTap = [...js.matchAll(/whileTap:\s*({[^}]+})/g)].map(m => m[1]);
console.log('whileTap count:', whileTap.length, whileTap.slice(0, 5));

// Check viewport or inView animations
const viewport = [...js.matchAll(/viewport:\s*({[^}]+})/g)].map(m => m[1]);
console.log('viewport count:', viewport.length, viewport.slice(0, 5));

// Check animate props
const animate = [...js.matchAll(/animate:\s*({[^}]+})/g)].map(m => m[1]);
console.log('animate count:', animate.length, animate.slice(0, 10));

// Check for transition
const transitions = [...js.matchAll(/transition:\s*({[^}]+})/g)].map(m => m[1]);
console.log('transitions count:', transitions.length, transitions.slice(0, 5));
