"use strict";

function getComputerChoice() {
    let choice = Math.floor(3 * Math.random());
    if (choice === 2) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What will it be? Rock, paper, or scissors?", "");
    return choice;
}

function capitalize(word) {
    return word.replace(word[0], word[0].toUpperCase());
}

function checkPlural(word) {
    if (word !== "scissors") {
        return "s";
    }

    return "";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            return alert("It's a draw! Go again.");
        } else {
            if (
                humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock"
            ) {
                computerScore++;
                let s = checkPlural(computerChoice);
                return alert(`You lose! ${capitalize(computerChoice)} beat${s} ${humanChoice}.`);
            } else {
                humanScore++;
                let s = checkPlural(humanChoice);
                return alert(`You win! ${capitalize(humanChoice)} beat${s} ${computerChoice}.`);
            }
        }
    }
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
    if (humanScore > computerScore) {
        alert(`${humanScore}-${computerScore}, you win the game! Congrats!!`);
    } else {
        alert(`${humanScore}-${computerScore}, you've lost... Next time I guess.`);
    }
}

playGame();