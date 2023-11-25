const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left');
const yourScore = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
function randomSquare(){
    squares.forEach(sq=>{
        sq.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(sq =>{
    sq.addEventListener('mousedown', () => {
        if(sq.id == hitPosition)
        {
            result++
            yourScore.textContent = result;
            hitPosition = null

        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare,1000)
    }

moveMole()

 function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        alert(`game's over! your final score` + result);
    }
}

let countDownTimerId = setInterval(countDown,1000);