function rain() {
    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    // Use cloud width to place drop correctly
    const left = Math.random() * cloud.offsetWidth;
    const size = Math.random() * 1.2 + 0.5; // 0.5em to 1.7em
    const duration = Math.random() * 2 + 1; // 1s to 3s

    e.innerText = '❤️Winnie'; // heart emoji
    e.style.left = left + 'px';
    e.style.fontSize = size + 'em';
    e.style.animation = `animate ${duration}s linear forwards`;

    setTimeout(() => {
        cloud.removeChild(e);
    }, duration * 1000);
}

// Generate drops every 50ms
setInterval(rain, 50);

        cloud.removeChild(e);
    }, duration * 1000);
}

setInterval(rain, 50);

