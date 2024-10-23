// Game Variables
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
document.getElementById('high-score').innerText = highScore;

const clickButton = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
const playMusicButton = document.getElementById('play-music-button');
const clickSound = document.getElementById('click-sound');
const backgroundMusic = document.getElementById('background-music');

// Function to update score
function updateScore() {
    score++;
    scoreDisplay.innerText = score;

    if (score > highScore) {
        highScore = score;
        document.getElementById('high-score').innerText = highScore;
        localStorage.setItem('highScore', highScore);
    }

    playClickSound(); // Play sound on click
}

// Function to play click sound
function playClickSound() {
    clickSound.currentTime = 0; // Reset sound to start
    clickSound.play(); // Play sound
}

// Function to restart the game
function restartGame() {
    score = 0;
    scoreDisplay.innerText = score;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = '0%'; // Reset progress bar
}

// Function to play background music
function playBackgroundMusic() {
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
}

// Event Listener for Button Click
clickButton.addEventListener('click', updateScore);

// Event Listener for Restart Button
restartButton.addEventListener('click', restartGame);

// Event Listener for Play Music Button
playMusicButton.addEventListener('click', playBackgroundMusic);
