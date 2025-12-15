"use strict";

function getComputerChoice() {
    let choice = 3 * Math.random();
    if (choice < 3 && choice >= 2) {
        return "rock";
    } else if (choice < 2 && choice >= 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What will it be? Rock, paper, or scissors?", "");
    return choice;
}

let humanScore = 0;
let computerScore = 0;


console.log(getHumanChoice())