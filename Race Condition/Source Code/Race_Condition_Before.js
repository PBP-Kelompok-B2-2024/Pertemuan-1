let counter = 0;

async function incrementCounter() {
    let currentCounter = counter;
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async operation
    counter = currentCounter + 1;
}

async function runRaceCondition() {
    await Promise.all([incrementCounter(), incrementCounter()]);
    console.log(counter); // Expected output: 2, but might get 1 due to race condition
}

runRaceCondition();
