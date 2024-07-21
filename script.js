document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan nama tamu jika ada
    const urlParams = new URLSearchParams(window.location.search);
    const inviteeName = urlParams.get('name');
    if (inviteeName) {
        document.getElementById('invitee-name').textContent = inviteeName;
    }

    // Efek mesin ketik untuk teks "Domi & Clara"
    const textElement = document.getElementById('typing-text');
    const text = "Domi & Clara";

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            textElement.innerHTML = text.substring(0, i + 1);
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100); // Adjust typing speed here
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700); // Delay before starting the callback
        }
    }

    typeWriter(text, 0);

    // Memastikan musik mulai diputar otomatis jika memungkinkan
    const audio = document.querySelector('audio');
    if (audio) {
        audio.play().catch(function(error) {
            console.log('Autoplay blocked:', error);
        });
    }

    // Hujan salju
    function createSnowflakes() {
        const snowContainer = document.querySelector('.snow');
        const numberOfSnowflakes = 100;
        for (let i = 0; i < numberOfSnowflakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.width = `${Math.random() * 10 + 5}px`;
            snowflake.style.height = snowflake.style.width;
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;
            snowContainer.appendChild(snowflake);
        }
    }

    createSnowflakes();
});
