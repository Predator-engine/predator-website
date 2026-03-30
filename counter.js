async function updateCounter() {
    const response = await fetch("counter.txt");
    let count = parseInt(await response.text());

    count++;

    document.getElementById("visitor-count").innerText = count;
}

async function loadCounter() {
    const response = await fetch("counter.txt");
    const count = await response.text();

    document.getElementById("visitor-count").innerText = count;
}

loadCounter();
updateCounter();
