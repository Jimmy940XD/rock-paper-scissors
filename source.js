"use strict";

function switchChoice(choice) {
    switch (choice) {
        case "rock":
            return 1;
        case "paper":
            return 0;
        case "scissors":
            return -1;
    }
}

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

function playRound(humanChoice, computerChoice) {
    humanChoice = switchChoice(humanChoice.toLowerCase())
    computerChoice = switchChoice(computerChoice)
    if (humanChoice > computerChoice || humanChoice < computerChoice) {
        // something is wrong with the condition. fix it!
    }
}

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice)