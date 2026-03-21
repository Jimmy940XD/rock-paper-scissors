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
    const body = document.querySelector("body");

    function checkResultDiv() {
        if (!document.querySelector(".result-div")) {
                const resultDiv = document.createElement("div");
                resultDiv.classList.add("result-div");
                body.appendChild(resultDiv);

                const humanPara = document.createElement("p");
                humanPara.classList.add("human-score");
                const computerPara = document.createElement("p");
                computerPara.classList.add("computer-score");
                humanPara.textContent = `Your score: ${humanScore}`;
                computerPara.textContent = `Rival's score: ${computerScore}`;
                resultDiv.append(humanPara, computerPara);
        }
    }

    function playRound(humanChoice, computerChoice) {
        const computerPara = document.querySelector(".computer-score");
        const humanPara = document.querySelector(".human-score");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } else {
            if (
                humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock"
            ) {
                computerPara.textContent = `Rival's score: ${++computerScore}`;
            } else {
                humanPara.textContent = `Your score: ${++humanScore}`;
            }
        }

        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                alert(`${humanScore}-${computerScore}, you win the game! Congrats!!`);
            } else {
                alert(`${humanScore}-${computerScore}, you've lost... Next time I guess.`);
            }
            humanScore = 0;
            humanPara.textContent = `Your score: ${humanScore}`;
            computerScore = 0;
            computerPara.textContent = `Rival's score: ${computerScore}`;
        }
    }
    
    const btn1 = document.querySelector("#rock-button");
    btn1.addEventListener("click", () => {
        checkResultDiv();
        playRound("Rock", getComputerChoice());
    });
    const btn2 = document.querySelector("#paper-button");
    btn2.addEventListener("click", () => {
        checkResultDiv();
        playRound("Paper", getComputerChoice());
    });
    const btn3 = document.querySelector("#scissors-button");
    btn3.addEventListener("click", () => {
        checkResultDiv();
        playRound("Scissors", getComputerChoice());
    });
}

playGame();