function rain() {
    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    const left = Math.floor(Math.random() * cloud.offsetWidth);
    const size = Math.random() * 1.5 + 0.5;
    const duration = Math.random() * 2 + 1;

    e.innerText = '❤️ Winnie';
    e.style.left = left + 'px';
    e.style.fontSize = size + 'em';
    e.style.animation = `animate ${duration}s linear forwards`;

    setTimeout(() => {
        cloud.removeChild(e);
    }, duration * 1000);
}

setInterval(rain, 50);
