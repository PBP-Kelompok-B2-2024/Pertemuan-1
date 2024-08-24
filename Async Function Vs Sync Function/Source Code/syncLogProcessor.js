const fs = require('fs');

function processLogFilesSync() {
  const files = ['log1.txt', 'log2.txt', 'log3.txt'];

  // Mulai pengukuran waktu eksekusi
  console.time('Execution Time (Sync)');

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    console.log(`Content of ${file}:`);
    console.log(content);
  });

  console.log('All files have been processed synchronously.');

  // Akhiri pengukuran waktu eksekusi
  console.timeEnd('Execution Time (Sync)');
}

// Memanggil fungsi
processLogFilesSync();
