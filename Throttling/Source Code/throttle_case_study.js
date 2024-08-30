function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function heavyOperation() {
    // Simulasi operasi berat
    for (let i = 0; i < 1e7; i++) {
        // Operasi yang tidak melakukan apa-apa, hanya menghabiskan waktu CPU
        Math.sqrt(i);
    }
    console.log('Heavy operation executed');
}

const throttledHeavyOperation = throttle(heavyOperation, 200);

function simulateEventsWithThrottling() {
    for (let i = 0; i < 100; i++) {
        throttledHeavyOperation();
    }
}

function simulateEventsWithoutThrottling() {
    for (let i = 0; i < 100; i++) {
        heavyOperation();
    }
}

// Jalankan simulasi
console.time('Without Throttling');
simulateEventsWithoutThrottling();
console.timeEnd('Without Throttling');

console.time('With Throttling');
simulateEventsWithThrottling();
console.timeEnd('With Throttling');

