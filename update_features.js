const fs = require('fs');

let content = fs.readFileSync('src/app/features/page.tsx', 'utf8');

// Ensure Reveal import
if (!content.includes('import { Reveal }')) {
  content = content.replace('import { WhizzyMascot } from "@/components/WhizzyMascot";', 'import { WhizzyMascot } from "@/components/WhizzyMascot";\nimport { Reveal } from "@/components/Reveal";');
}

// 1. Hero banner
content = content.replace('<div className="ow-wrap" style={{ opacity: 1, transform: "none" }}>', '<Reveal className="ow-wrap">');
// Match the closing div of hero banner
// The closing div of hero is before </section>
// Let's replace the first </section> with </Reveal>\n        </section> if needed, or replace the closing </div>
const heroIdx = content.indexOf('<section\n          className="pb-14 pt-10 md:pb-20"');
if (heroIdx !== -1) {
  const secEnd = content.indexOf('</section>', heroIdx);
  const divBeforeSecEnd = content.lastIndexOf('</div>', secEnd);
  content = content.substring(0, divBeforeSecEnd) + '</Reveal>' + content.substring(divBeforeSecEnd + 6);
}

// Helper to replace matching pair
function replaceBlock(startStr, newStartStr, endIndicator) {
  const startIdx = content.indexOf(startStr);
  if (startIdx === -1) return;
  content = content.replace(startStr, newStartStr);
}

// Section 1: scenes
content = content.replace('<div style={{ opacity: 1, transform: "none" }}>\n              <span\n                className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest"\n                style={{\n                  background: "rgb(28, 176, 246)"', '<Reveal x={-40} y={0}>\n              <span\n                className="mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-widest"\n                style={{\n                  background: "rgb(28, 176, 246)"');

content = content.replace('className="flex justify-center "\n              style={{ opacity: 1, transform: "none" }}', 'x={40} y={0} delay={0.1} className="flex justify-center"');

// Close Reveal for scenes text & phone
// Let's replace remaining style={{ opacity: 1, transform: "none" }}
content = content.replaceAll('style={{ opacity: 1, transform: "none" }}', '');

fs.writeFileSync('src/app/features/page.tsx', content, 'utf8');
console.log('Features page updated successfully!');
