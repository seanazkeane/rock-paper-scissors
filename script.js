const choices = ['Rock', 'Paper', 'Scissors'];

let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let playerScoreText = document.querySelector('.score-board-left');
let computerScoreText = document.querySelector('.score-board-right');
let rockButton = document.querySelector('.rock-btn');
let paperButton = document.querySelector('.paper-btn');
let scissorsButton = document.querySelector('.scissors-btn');
let choiceButtons = document.querySelectorAll('#btn');
let playerChoiceDisplay = document.querySelector('.player-choice-display');
let computerChoiceDisplay = document.querySelector('.computer-choice-display');
let gameUpdateText = document.querySelector('.game-update-text');
let restartButton = document.querySelector('.restart-btn');

rockButton.addEventListener('click', () => {
    playerChoiceDisplay.innerHTML = '<i class="fa-regular fa-hand-back-fist">';
});

paperButton.addEventListener('click', () => {
    playerChoiceDisplay.innerHTML = '<i class="fa-regular fa-hand">';
});

scissorsButton.addEventListener('click', () => {
    playerChoiceDisplay.innerHTML = '<i class="fa-regular fa-hand-scissors">';
});

choiceButtons.forEach(button => button.addEventListener('click', () => {

    playerChoice = button.textContent;
    getComputerChoice();
    playRound();
    checkWinner();
}));

function getComputerChoice() {
    computerChoice = (choices[Math.floor(Math.random() * 3)]);

    if (computerChoice == "Rock") {
        computerChoiceDisplay.innerHTML = '<i class="fa-regular fa-hand-back-fist">';
    } else if (computerChoice == "Paper") {
        computerChoiceDisplay.innerHTML = '<i class="fa-regular fa-hand">';
    } else {
        computerChoiceDisplay.innerHTML = '<i class="fa-regular fa-hand-scissors">';
    }
};

function playRound() {
    if (playerChoice == computerChoice) {
            gameUpdateText.textContent = "Tie";
    } else if (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice== "Scissors" && computerChoice == "Paper") ||
        (playerChoice== "Paper" && computerChoice == "Rock")
    ) {
        playerScore++;
        playerScoreText.innerHTML = `${playerScore}`;
        gameUpdateText.textContent = "Player wins the round";
    } else {
        computerScore++;
        computerScoreText.textContent = `${computerScore}`;
        gameUpdateText.textContent = "Computer wins the round";
    }
};

function checkWinner() {
    let totalScore = playerScore + computerScore;
    if (totalScore >= 5) {
        restartButton.classList.remove('d-none');
        rockButton.classList.add('d-none');
        scissorsButton.classList.add('d-none');
        paperButton.classList.add('d-none');
        if (playerScore > computerScore) {
            gameUpdateText.textContent = "Player wins the game!";
        } else {
            gameUpdateText.textContent = "Computer wins the game!";
        }
    }
};

restartButton.addEventListener('click', function(){
    gameUpdateText.textContent = "Choose again...";
    restartButton.classList.add('d-none');
    rockButton.classList.remove('d-none');
    scissorsButton.classList.remove('d-none');
    paperButton.classList.remove('d-none');
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerHTML = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;
    playerChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
});
