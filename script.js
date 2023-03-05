const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    let name = ["rock", "paper", "scissors"];
    return name[number]
}


function playGround(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "paper") {
        return ("Draw");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You Won! Paper beats Rock.");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("You Lost! Scissors beats paper.");
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return ("Draw");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return ("You Lost! Paper beats rock.");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You Won! Rock beats scissors");
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return ("Draw.");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You Won! Scissors beats paper.");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You Lost! Rock beats scissors.");
    }
}
// console.log(computerSelection)

// For verifying the result 
// let a = getComputerChoice();
// console.log(a)


let game = () => {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Select any one (Rock, Paper and Scissors))").toLowerCase();
        // Very important-----> If these two are declared outside the game than the value of computerSelection and playerSelection is fixed( stored in the memory ..when you call the funtion playGround inside for loop it will take the parameter assume computerSelection is rock and playerSelection is paper than the answer will be you win but after it call it 2nd time the value will be taken the same beacause we are passing the same parameters whose value are fixed/not changed(variable's value are not changed untill you manually do) . That's why the o/p after the for loop is same as the o/p after 1st iteration)  . You can try 

        let winner = playGround(playerSelection, computerSelection)

        if (winner == "You Won! Paper beats Rock") {
            playerCount++;
        }
        else if (winner == "You Lost! Scissors beats paper.") {
            computerCount++;
        }
        else if (winner == "You Lost! Rock beats scissors.") {
            computerCount++;
        }
        else if (winner == "You Won! Rock beats scissors") {
            playerCount++;
        }
        else if (winner == "You Won! Scissors beats paper") {
            playerCount++;
        }
        else if (winner == "You Lost! Paper beats rock.") {
            computerCount++;

        }

            console.log(`Player Score : Computer Score after each round ${playerCount}: ${computerCount}`)
    }
    if(playerCount > computerCount){
        console.log("You won the series")
    }
    else {
        console.log("You lost the series")
    }
}
game();

