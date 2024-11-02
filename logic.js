let humanScore = 0;
let computerScore = 0;
let humanChoice;

console.log("logic.js is loaded");
document.getElementById("displayHumanScore").textContent = "User: " + humanScore;
document.getElementById("displayComputerScore").textContent = "CPU: " + computerScore;

getHumanChoice();

function getHumanChoice() {
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", () => {
        humanChoice = 0;
        playRound(humanChoice);
    });
    
    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", () => {
        humanChoice = 1;
        playRound(humanChoice);
    });
    
    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", () => {
        humanChoice = 2;
        playRound(humanChoice);
    });
}

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random()*3)); //generate a random number between 0,1,2
    return computerChoice;
}

function numberToStringChoice(num_choice) {    
    let choice;
    
    switch (num_choice) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;        
}

function disableButtons() {

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

}


function playRound(humanChoice){;
    
    if (humanScore < 5 && computerScore < 5) {
        document.getElementById("choiceUser").textContent = "User choice: " + numberToStringChoice(humanChoice);
        const computerChoice = getComputerChoice();
        document.getElementById("choiceCPU").textContent = "CPU choice: " + numberToStringChoice(computerChoice);

        if (humanChoice == computerChoice)
            document.getElementById("result").textContent = "This is a tie!";

        else if (humanChoice == 0 && computerChoice == 2 || humanChoice == 1 && computerChoice == 0 || humanChoice == 2 && computerChoice == 1) {
            document.getElementById("result").textContent = "Human wins!";
            humanScore++;
            document.getElementById("displayHumanScore").textContent = "User: " + humanScore;
        }
        
        else {
            document.getElementById("result").textContent = "Computer Wins!";
            computerScore++;
            document.getElementById("displayComputerScore").textContent = "CPU: " + computerScore;
        }
    }

    else {
        disableButtons(); // Disable the buttons
        document.getElementById("result").textContent += " Game Over!";
    }
}   







