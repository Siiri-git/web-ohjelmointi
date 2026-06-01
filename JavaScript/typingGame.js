// 50 Words
const words = [
    "walpurgisnacht","kissa","koira","matelija","oikeinkirjoitus","hyvä","urbaani","konteksti","relevantti","agenda",
    "ikoninen","kallis","hunaja","kontribuutio","aalto","aamiainen","sääilmiö","edam","juusto","observatorio",
    "kaupunki","saari","talo","tähti","vuori","ystävä","ranta","kukka","ikkuna","kuu",
    "valo","lintu","kalja","lattia","pöytä","lihapulla","kala","muisto","tunne","perhe",
    "puhelin","elokuvateatteri","laukku","lentokone","tietokone","elokuva","laiva","matka","suo","pimeys"
];

// Score, Time and Word
let score = 0;
let timeLeft = 60;
let currentWord = "";
let timerInterval = null;

// Get HTML Elements
const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

// Pick a Random Word
function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordEl.textContent = currentWord;
}

// Start the Game
function startGame() {
    score = 0;
    timeLeft = 60;
    scoreEl.textContent = "Pisteet: 0";
    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();
    newWord();

    startBtn.disabled = true;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = "Aika: " + timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// End the Game
function endGame() {
    clearInterval(timerInterval);
    inputEl.disabled = true;
    startBtn.disabled = false;
    wordEl.textContent = "Aika loppui!";
    alert("Sait " + score + " pistettä!");
}

// Check the Players Word
inputEl.addEventListener("keydown", function (e) {
    if (e.key === " ") {
        e.preventDefault(); // Make Sure Player Cant Use Space In a Word

        if (inputEl.value.trim() === currentWord) {
            score++;
            scoreEl.textContent = "Pisteet: " + score;
        }

        inputEl.value = "";
        newWord();
    }
});

startBtn.addEventListener("click", startGame);