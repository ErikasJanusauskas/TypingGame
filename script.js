// Define your list of words here
const words = [
    "apple", "banana", "cherry", "grape", "kiwi", "lemon", "mango", "orange", "papaya", "watermelon",
    "run", "jump", "swim", "dance", "sing", "read", "write", "cook", "sleep", "laugh",
    "umbrella", "bicycle", "candle", "telescope", "mountain", "shoe", "laptop", "pillow", "balloon", "wallet",
    "toothbrush", "keychain", "backpack", "umbrella", "piano", "sunglasses", "wristwatch", "stapler", "garden", "helicopter",
    "tomato", "compass", "scissors", "mailbox", "butterfly"
];


let wordIndex = 0;
let score = 0;
let countdown = 60;
let timerInterval;

const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const countdownElement = document.getElementById("countdown");
const scoreElement = document.getElementById("score-value");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");

function startGame() {
    startButton.disabled = true;
    restartButton.style.display = "none";
    inputElement.disabled = false;
    inputElement.focus();
    generateWord();
    timerInterval = setInterval(updateTimer, 1000);
}

function generateWord() {
    wordIndex = Math.floor(Math.random() * words.length);
    wordElement.textContent = words[wordIndex];
    inputElement.value = "";
}

function updateTimer() {
    countdown--;
    countdownElement.textContent = countdown;
    if (countdown <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timerInterval);
    inputElement.disabled = true;
    startButton.disabled = false;
    restartButton.style.display = "block";
    wordElement.textContent = "Game Over!";
    inputElement.value = "";
    countdownElement.textContent = "0s";
    scoreElement.textContent = score;
}

inputElement.addEventListener("input", checkInput);

function checkInput() {
    const typedWord = inputElement.value.trim().toLowerCase();
    const currentWord = words[wordIndex];

    if (typedWord === currentWord) {
        score++;
        scoreElement.textContent = score;
        generateWord();
    }
}

startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", () => {
    countdown = 60;
    score = 0;
    scoreElement.textContent = "0 words";
    startGame();
});