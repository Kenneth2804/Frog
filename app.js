document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('nameContainer').style.display = 'block';
    createHearts();
});

function createHearts() {
    const heartContainer = document.getElementById('heartContainer');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartContainer.appendChild(heart);

        // Remueve el corazón después de que la animación termina
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}
