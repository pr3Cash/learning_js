const computerChoiceD = document.getElementById('computer-choice');
const userChoiceD = document.getElementById('user-choice');
const resultD = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice,computerChoice,result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('mouseover',(e) =>{
    userChoice = e.target.id;
    userChoiceD.innerHTML = userChoice
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock'        
    } 
    if(randomNumber === 2 ) {
        computerChoice = 'paper'        
        
    }
    if (randomNumber === 3 ) {
        computerChoice = 'scissors'        
        
    }
    computerChoiceD.innerText = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "it's draw";
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "you win!";
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = "you lost!";
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = "you win!";
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "you win!";
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = "you win!";
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = "you lose!";
    }
    resultD.innerHTML=result;
}