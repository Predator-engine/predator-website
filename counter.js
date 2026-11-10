(() => {
    const countElement = document.getElementById("visitor-count");
    if (!countElement || window.location.hostname !== "predator-engine.github.io") return;

    const callbackName = `predatorCounter_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const endpoint = "https://counterapi.com/api/predator-engine.github.io/view/predator-website-home";

    const finish = (value) => {
        countElement.textContent = value;
        delete window[callbackName];
        script.remove();
    };

    window[callbackName] = (result) => {
        const count = Number(result?.value);
        finish(Number.isFinite(count) ? count.toLocaleString("en-US") : "—");
    };

    script.async = true;
    script.onerror = () => finish("—");
    script.src = `${endpoint}?callback=${encodeURIComponent(callbackName)}&unique=true`;
    document.head.appendChild(script);

    window.setTimeout(() => {
        if (window[callbackName]) finish("—");
    }, 10000);
})();