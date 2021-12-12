const Timer = (callback, delay) => {
    let timerId, start, remaining = delay;

    const pause = () => {
        window.clearTimeout(timerId);
        remaining -= Date.now() - start;
    };

    const resume = () => {
        start = Date.now();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    resume();
};

let timer = new Timer(function() {
    alert("Done!");
}, 1000);

timer.pause();
// Do some stuff...
timer.resume();