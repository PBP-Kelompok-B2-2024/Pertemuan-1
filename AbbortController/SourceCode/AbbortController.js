// after-abort-controller.js
const fetch = require('node-fetch');
const AbortController = require('abort-controller'); // Pastikan ini ada jika menggunakan node-fetch 2.x

async function makeRequest() {
  const controller = new AbortController();
  const { signal } = controller;

  // Mengatur pembatalan lebih lama untuk memastikan pembatalan dapat terjadi
  setTimeout(() => {
    controller.abort(); // Membatalkan permintaan setelah 2 detik
    console.log('Request aborted.');
  }, 2000);

  try {
    console.log('Starting fetch request...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal });
    const data = await response.json();
    console.log('Request completed.');
    console.log('Data:', data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Fetch aborted due to timeout.');
    } else {
      console.error('Error:', error);
    }
  }
}

makeRequest();
