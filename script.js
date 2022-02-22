let wins = 0;
let losses = 0;
let gameOver = false;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function computerPlay() {
    const computerNumber = Math.floor(Math.random() * 3);
    switch(computerNumber) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}


function playRound (playerSelection, computerSelection) {
    // display the results of the round
    const results = document.querySelector('.results');
    let message;
    if (playerSelection === computerSelection) {
        // made everything capital at the beginning and don't want to change it back
        playerSelection = capitalizeFirstLetter(playerSelection.toLowerCase());
        computerSelection = capitalizeFirstLetter(computerSelection.toLowerCase());
        message = `Draw! ${playerSelection} ties against ${computerSelection}!`;
    }
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        wins++;
        message = "You Win! Rock beats Scissors";
    }
    if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        wins++;
        message = "You Win! Scissors beats Paper";
    }
    if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        wins++;
        message = "You Win! Paper beats Rock";
    }
    if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        losses++;
        message = "You Lose! Rock beats Scissors";
    }
    if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        losses++;
        message = "You Lose! Scissors beats Paper";
    }
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        losses++;
        message = "You Lose! Paper beats Rock";
    }
    results.textContent = message;

    // end game
    if (wins === 5 || losses === 5) {
        printResults();
        gameOver = true;
    }
    printScore();
}

function printScore() {
    let message = `Player: ${wins}, Computer: ${losses}`;
    const score = document.querySelector('.score');
    score.textContent = message;
}

function printResults () {
    const container = document.querySelector('.container');
    const gameOverMessage = document.createElement('div');
    let message;
    if (wins > losses) {
        message = "Congratulations! You win the game!";
    }
    else if (wins === losses) {
        message = "Aww... It was a draw.";
    }
    else {
        message = "Oof, you lost. :\(";
    }
    gameOverMessage.textContent = message;
    container.appendChild(gameOverMessage);
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => 
{if (!gameOver) playRound(button.dataset.selection, computerPlay())}));