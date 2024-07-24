

document.addEventListener('DOMContentLoaded', (event) => {
    const konamiCode = [38, 40, 40, 37]; // haut, bas, bas, gauche
    let inputSequence = [];
    const secretImageContainer = document.getElementById('image-container');
    const secretAudio = document.getElementById('secret-audio');
    const instructions = document.getElementById('instructions');

    document.addEventListener('keydown', (event) => {
        inputSequence.push(event.keyCode);
        if (inputSequence.length > konamiCode.length) {
            inputSequence.shift();
        }

        if (inputSequence.toString() === konamiCode.toString()) {
            secretImageContainer.classList.add('show');
            secretAudio.play();
            instructions.style.display = 'none'; // Masquer les instructions
            setTimeout(() => {
                secretImageContainer.classList.remove('show');
                instructions.style.display = 'block'; // Réafficher les instructions après l'animation
            }, 2000); // Ajustez la durée si nécessaire
        }
    });
});
