let counter = 0;
let lock = false;

async function incrementCounter() {
    while (lock) {
        await new Promise(resolve => setTimeout(resolve, 10)); // Wait if locked
    }
    lock = true;
    let currentCounter = counter;
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async operation
    counter = currentCounter + 1;
    lock = false;
}

async function runWithLock() {
    await Promise.all([incrementCounter(), incrementCounter()]);
    console.log(counter); // Output: 2
}

runWithLock();
