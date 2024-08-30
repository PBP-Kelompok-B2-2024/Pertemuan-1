// Simulasi fungsi asynchronous dengan Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data fetched');
            resolve('raw data');
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Data processed');
            resolve('processed data');
        }, 1000);
    });
}

// Menggunakan async/await
async function run() {
    try {
        const data = await fetchData();
        const processedData = await processData(data);
        console.log('Final result:', processedData);
    } catch (err) {
        console.error('Error:', err);
    }
}

run();
