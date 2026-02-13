function rain() {
    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    // Random horizontal position
    const left = Math.floor(Math.random() * cloud.offsetWidth);
    // Random font size
    const size = Math.random() * 1.5 + 0.5; // 0.5em to 2em
    // Random animation duration
    const duration = Math.random() * 2 + 1; // 1s to 3s

    e.innerText = '❤️'; // Can be "winnie" if you want text, or a heart emoji
    e.style.left = left + 'px';
    e.style.fontSize = size + 'em';
    e.style.animation = `animate ${duration}s linear forwards`;

    // Remove the drop after animation ends
    setTimeout(() => {
        cloud.removeChild(e);
    }, duration * 1000);
}

// Generate drops every 50ms
setInterval(rain, 50);

