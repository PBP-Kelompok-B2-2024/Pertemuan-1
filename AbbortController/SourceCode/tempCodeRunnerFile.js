// after-abort-controller.js
const fetch = require('node-fetch');

async function makeRequest() {
  const controller = new AbortController();
  const { signal } = controller;

  setTimeout(() => {
    controller.abort(); // Membatalkan permintaan setelah 1 detik
    console.log('Request aborted.');
  }, 1000);

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
