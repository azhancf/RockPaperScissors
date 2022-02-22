let wins = 0;
let losses = 0;


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
    console.log(playerSelection);
    console.log(computerSelection);
    let message;
    if (playerSelection === computerSelection) {
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
    console.log(message);
}

function printResults () {
    console.log("\n");
    console.log("----------");
    if (wins > losses) {
        console.log("Congratulations! You win the game!");
    }
    else if (wins === losses) {
        console.log("Aww... It was a draw.");
    }
    else {
        console.log("Oof, you lost. :\(");
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.dataset.selection, computerPlay())));