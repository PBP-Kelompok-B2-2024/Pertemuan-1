// Simulasi fungsi asynchronous dengan callback
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback(null, 'raw data');
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        console.log('Data processed');
        callback(null, 'processed data');
    }, 1000);
}

// Callback hell
fetchData(function(err, data) {
    if (err) {
        console.error('Error fetching data:', err);
    } else {
        processData(data, function(err, processedData) {
            if (err) {
                console.error('Error processing data:', err);
            } else {
                console.log('Final result:', processedData);
            }
        });
    }
});
