let wins = 0;
let losses = 0;


function computerPlay() {
    const computerNumber = Math.floor(Math.random() * 3);
    switch(computerNumber) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}
function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} ties against ${computerSelection}!`;
    }
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        wins++;
        return "You Win! Rock beats Scissors";
    }
    if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        wins++;
        return "You Win! Scissors beats Paper";
    }
    if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        wins++;
        return "You Win! Scissors beats Paper";
    }
    if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        losses++;
        return "You Lose! Rock beats Scissors";
    }
    if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        losses++;
        return "You Lose! Scissors beats Paper";
    }
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        losses++;
        return "You Lose! Scissors beats Paper";
    }
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

function game() {
    for (let i = 1; i <= 5; ++i) {
        let userInput = prompt(`Enter your selection. Round: ${i}`);
        console.log(playRound(userInput, computerPlay()));
    }
    printResults();
}

game();