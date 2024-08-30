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

function handleScroll() {
    console.log('Scroll event triggered');
    // Implementasi lain yang mungkin berat secara kinerja
}

window.addEventListener('scroll', throttle(handleScroll, 200));
