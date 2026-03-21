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

function checkResultDivIn(element) {
    if (!document.querySelector(".result-div")) {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result-div");
            element.appendChild(resultDiv);
    }
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
    
    const body = document.querySelector("body");
    const btn1 = document.querySelector("#rock-button");
    btn1.addEventListener("click", () => {
        checkResultDivIn(body);
        playRound("Rock", getComputerChoice());
    });
    const btn2 = document.querySelector("#paper-button");
    btn2.addEventListener("click", () => {
        checkResultDivIn(body);
        playRound("Paper", getComputerChoice());
    });
    const btn3 = document.querySelector("#scissors-button");
    btn3.addEventListener("click", () => {
        checkResultDivIn(body);
        playRound("Scissors", getComputerChoice());
    });

    const humanPara = document.createElement("p");
    const computerPara = document.createElement("p");
    humanPara.textContent = `Your score: ${humanScore}`;
    computerPara.textContent = `Rival's score: ${computerScore}`;
    resultDiv.append(humanPara, computerPara);
    
    if (humanScore > computerScore) {
        alert(`${humanScore}-${computerScore}, you win the game! Congrats!!`);
    } else {
        alert(`${humanScore}-${computerScore}, you've lost... Next time I guess.`);
    }
}

playGame();