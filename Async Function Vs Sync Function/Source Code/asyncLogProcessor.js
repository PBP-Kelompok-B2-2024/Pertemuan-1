const fs = require('fs').promises;

const files = ['log1.txt', 'log2.txt', 'log3.txt'];

console.time('Execution Time (Async)');

async function readFilesAsync() {
  try {
    const readFilesPromises = files.map(file => fs.readFile(file, 'utf8'));
    const contents = await Promise.all(readFilesPromises);
    contents.forEach((content, index) => {
      console.log(`Content of file ${index + 1}:`);
      console.log(content);
    });
  } catch (error) {
    console.error('Error reading files:', error);
  } finally {
    console.timeEnd('Execution Time (Async)');
  }
}

readFilesAsync();
