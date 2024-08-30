let counter = 0;

async function incrementCounter() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async operation
    counter++;
}

async function runWithAtomicIncrement() {
    await Promise.all([incrementCounter(), incrementCounter()]);
    console.log(counter); // Output: 2
}

runWithAtomicIncrement();
