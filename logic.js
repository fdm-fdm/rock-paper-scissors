let humanScore = 0;
let computerScore = 0;
playGame();

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random()*3)); //generate a random number between 0,1,2
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please, choose between Rock, Paper and Scissors: ");
    
    if (humanChoice.toLowerCase() === "rock") {
        return 0;
    }

    else if (humanChoice.toLowerCase() === "paper") {
        return 1;
    }

    else if (humanChoice.toLowerCase() === "scissors") {
        return 2;
    }

    else {
        alert("Your selection is not allowed. Choose between Rock, Paper, Scissors.");
    }
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
        default:
            choice = "Choice is not valid - CPU will get the round."
    }

    return choice;        
}

function playRound(){;
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log('Human choice is: ' +numberToStringChoice(humanChoice));
    console.log('Computer choice is: ' +numberToStringChoice(computerChoice));


    if (humanChoice == computerChoice)
        console.log("This is a tie!")

    else if (humanChoice == 0 && computerChoice == 2 || humanChoice == 1 && computerChoice == 0 || humanChoice == 2 && computerChoice == 1) {
        console.log("Human wins!")
        humanScore++;
    }
    
    else {
        console.log("Computer Wins!");
        computerScore++;
    }
}

function playGame() {
    for (round = 0; round < 5; round++) {
        console.log("Round: " +(round + 1))
        playRound();
        console.log("Human Score: " +humanScore)
        console.log("Computer Score: " +computerScore)
        console.log("*---------------------------------------------------------------*");

    }
}

function returnWinner(humanChoice, computerChoice) {
    if (humanChoice = computerChoice) {
        console.log("This is a draw!")
    }
}







