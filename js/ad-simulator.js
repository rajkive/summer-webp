function getRandomPosition() {
    const padding = 20;
    const x = Math.floor(Math.random() * (window.innerWidth - 320)) + padding;
    const y = Math.floor(Math.random() * (window.innerHeight - 170)) + padding;
    return { x, y };
}

function createAdPopup() {
    const ad = document.createElement('div');
    ad.className = 'ad-popup';

    const { x, y } = getRandomPosition();
    ad.style.left = `${x}px`;
    ad.style.top = `${y}px`;

    ad.innerHTML = `
        <div><strong>The content has been moved to: 
        <a href="https://cs360awesome.space/ai/post.html" target="_blank"> https://cs360awesome.space/ai/post.html Visit Now!!</a></strong></div>
        <div class="close-btn">✖</div>
    `;

    ad.querySelector('.close-btn').onclick = () => ad.remove();

    document.body.appendChild(ad);

    // Auto-remove after 10 seconds
    setTimeout(() => ad.remove(), 10000);
}

function startAdSimulation(minDelay = 5000, maxDelay = 15000) {
    function showAd() {
        createAdPopup();
        const nextDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
        setTimeout(showAd, nextDelay);
    }

    setTimeout(showAd, Math.random() * 1000 + 1000); // initial delay
}

window.addEventListener('load', () => {
    // Inject CSS only once
    const style = document.createElement('style');
    style.innerHTML = `
        .ad-popup {
            position: fixed;
            width: 300px;
            height: 150px;
            background-color: #fffae6;
            border: 2px solid #f5a623;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 14px;
        }
        .ad-popup .close-btn {
            align-self: flex-end;
            cursor: pointer;
            font-weight: bold;
            color: #d33;
        }
    `;
    document.head.appendChild(style);

    startAdSimulation();
});
