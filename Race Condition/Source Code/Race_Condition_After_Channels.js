let counter = 0;
const queue = [];

function processQueue() {
    if (queue.length > 0) {
        const task = queue.shift();
        task().then(processQueue);
    }
}

async function incrementCounter() {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async operation
    counter++;
}

function enqueueTask(task) {
    queue.push(task);
    if (queue.length === 1) {
        processQueue();
    }
}

async function runWithQueue() {
    enqueueTask(incrementCounter);
    enqueueTask(incrementCounter);
    setTimeout(() => console.log(counter), 300); // Output: 2
}

runWithQueue();
