const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return choice = (choices[Math.floor(Math.random() * 3)]);
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock, Paper or Scissors?");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (choices.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = "Tie";
        return result;
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        let result = "Win";
        return result;
    } else {
        let result = "Lose";
        return result;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Let's play!")
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) == "Win") {
            playerScore++;
        }
        else if (playRound(playerSelection, computerSelection) == "Lose") {
            computerScore++;
        }
    }
    console.log("Game Over!")
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!")
    }
}

game();
