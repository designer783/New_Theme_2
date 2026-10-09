const fs = require('fs');
const path = require('path');

function fixInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/text-\[21px\]\s?/g, '');
  content = content.replace(/sm:text-\[21px\]\s?/g, '');
  content = content.replace(/text-\[22px\]\s?/g, '');
  content = content.replace(/sm:text-\[22px\]\s?/g, '');
  content = content.replace(/text-\[24px\]\s?/g, '');
  content = content.replace(/sm:text-\[24px\]\s?/g, '');
  content = content.replace(/text-\[26px\]\s?/g, '');
  content = content.replace(/sm:text-\[26px\]\s?/g, '');
  content = content.replace(/text-\[28px\]\s?/g, '');
  content = content.replace(/sm:text-\[28px\]\s?/g, '');
  
  content = content.replace(/\s+"/g, '"');
  
  fs.writeFileSync(filePath, content);
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      fixInFile(fullPath);
    }
  }
}

processDir('./src/pages');
processDir('./src/components');
console.log('done fixing');
