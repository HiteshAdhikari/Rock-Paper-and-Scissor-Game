const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    let name = ["Rock", "Paper", "Scissors"];
    return name[number]
}


function playGround(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Paper") {
        return ("Draw");
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        user_score.innerText++;
        return ("You Won! Paper beats Rock.");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computer_score.innerText++;
        return ("You Lost! Scissors beats paper.");
    }
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return ("Draw");
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computer_score.innerText++;
        return ("You Lost! Paper beats rock.");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        user_score.innerText++;
        return ("You Won! Rock beats scissors.");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return ("Draw");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        user_score.innerText++;
        return ("You Won! Scissors beats paper.");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computer_score.innerText++;
        return ("You Lost! Rock beats scissors.");
    }
}
// console.log(computerSelection)

// For verifying the result 
// let a = getComputerChoice();
// console.log(a)

let result_txt = document.querySelector("#result_txt")
let result_txt_1 = document.querySelector("#result_txt_1")
let user_score = document.getElementById("user_score");
let computer_score = document.getElementById("computer_score");
let game = (weapon,computer) => {

        let computerSelection = computer;
        let playerSelection = weapon;

        let winner = playGround(playerSelection, computerSelection)

        if (winner == "You Won! Paper beats Rock.") {
            result_txt.innerText= "You  Won!";
            result_txt_1.innerText= "Paper beats rock.";
        }
        else if (winner === "You Lost! Scissors beats paper.") {
            result_txt.innerText= "You Lost!";
            result_txt_1.innerText= "Scissors beats paper.";
        }
        else if (winner === "You Lost! Rock beats scissors.") {
            result_txt.innerText= "You Lost!";
            result_txt_1.innerText= "Rock beats scissors.";
        }
        else if (winner === "You Won! Rock beats scissors.") {
            result_txt.innerText= "You  Won!";
            result_txt_1.innerText= "Rock beats scissors.";
        }
        else if (winner === "You Won! Scissors beats paper.") {
            result_txt.innerText= "You  Won!";
            result_txt_1.innerText= "Scissors beats paper.";
        }
        else if (winner === "You Lost! Paper beats rock.") {
            result_txt.innerText= "You Lost!";
            result_txt_1.innerText= "Paper beats rock.";
        }
        else if(winner == "Draw"){
            result_txt.innerText= "Tie !"
            result_txt_1.innerText= `${playerSelection} ties with ${computerSelection}`;
        }


        
        
    }

    function check_Score(){
        if(user_score.innerText == 5){
            user_score.innerText = 0;
            computer_score.innerText=0; 
            result_txt.innerText= "Hurray!!";
            result_txt_1.innerText= "You won the series."
            
        }
        else if(computer_score.innerText == 5){
            user_score.innerText = 0;
            computer_score.innerText = 0;
            result_txt.innerText= "Try Again";
            result_txt_1.innerText= "You lost the series."
        }
        
    }

// pop-up box
let submitbtn = document.querySelector("#btn-close")

submitbtn.addEventListener('click', ()=>{
    let Name = document.querySelector("#name").value;
    let user = document.querySelector(".user");
    user.innerHTML = Name.toUpperCase();
     document.querySelector("#name").value = null;

})


// Created blur effect
let popup = document.querySelector(".pop-up")
submitbtn.addEventListener('click',()=>{
    let style = document.querySelector(".main")
    style.classList.remove("mystyle")
    
    let pop = document.querySelector(".pop-up")
    pop.classList.add("mystyle")
})


// Computer chooses weapon
function Computer_weapon() {
    let a = getComputerChoice();
    if(a == "Rock"){
        let c_weapon = document.querySelector("#computer_weapon");
        let rock_weapon = document.querySelector("#rock");
        c_weapon.src = rock_weapon.src;
        game(weapon_player,a)
        check_Score();
        
        
    }
    else if(a == "Paper"){
        let c_weapon = document.querySelector("#computer_weapon");
        let paper_weapon = document.querySelector("#paper");
        c_weapon.src = paper_weapon.src;
        game(weapon_player,a)
        check_Score();
        
    }
    else if(a == "Scissors"){
        let c_weapon = document.querySelector("#computer_weapon");
        let scissors_weapon = document.querySelector("#scissors");
        c_weapon.src = scissors_weapon.src;
        game(weapon_player,a)
        check_Score();
    
    }

}

// weapon on clicking will be displayed
let rock = document.querySelector(".rock");
let rock_weapon = document.querySelector("#rock")
let player = document.querySelector("#player_weapon");

rock.addEventListener('click', ()=>{
    player.src = rock_weapon.src;
    weapon_player="Rock";
    Computer_weapon();
    
})

let paper = document.querySelector(".paper");
let paper_weapon = document.querySelector("#paper");
let player1 = document.querySelector("#player_weapon");

paper.addEventListener('click',()=>{
    player1.src =paper_weapon.src;
    weapon_player = "Paper"
    Computer_weapon();
})

let scissors = document.querySelector(".scissors");
let scissors_weapon = document.querySelector("#scissors");
let player2 = document.querySelector("#player_weapon");

scissors.addEventListener('click',()=>{
    player2.src = scissors_weapon.src;
    weapon_player = "Scissors"
    Computer_weapon();
})




