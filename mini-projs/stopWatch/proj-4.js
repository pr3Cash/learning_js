const sSBtn = document.querySelector('#sSBtn');
let resetBtn = document.querySelector('#resetBtn');

let sec = 0;
let min = 0;
let hrs = 0;

//variables for leading zero

let leadingSec = 0 ;
let leadingMin = 0 ;
let leadingHrs = 0 ;

//var for set interval & timerstatus
let timerIntercal = null;
let timerStatus = 'stopped';
// stop watch fun

function stopWatch(){

    sec++;

    if(sec / 60 === 1 )
    {
        sec = 0;
        min++;

        if(min /60 === 1){
            min = 0;
            hrs++;
        }
    }

    if(sec < 10 ){
        leadingSec = '0' + sec.toString();
    }
    else{
        leadingSec = sec;
    }

    if(min < 10 ){
        leadingMin = '0' + min.toString();
    }
    else{
        leadingMin = min;
    }

    if(hrs < 10 ){
        leadingHrs = '0' + hrs.toString();
    }
    else{
        leadingHrs= hrs;
    }

    let displayTimer = document.getElementById('timer').innerText =
    leadingHrs + ':' + leadingMin + ':' + leadingSec; 
}

//window.setInterval(stopWatch,1000)

sSBtn.addEventListener('click',function(){

    if(timerStatus === 'stopped'){
        timerIntercal = window.setInterval(stopWatch,1000);
        document.getElementById('sSBtn').innerHTML = `<i 
        class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = 'started';
    }
    else{
        window.clearInterval(timerIntercal);
        document.getElementById('sSBtn').innerHTML = `<i 
        class="fa-solid fa-play" id="play"></i>`;
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click',function(){

    window.clearInterval(timerIntercal);
    sec = 0;
    min = 0;
    hrs = 0;

    document.getElementById('timer').innerHTML = `00:00:00`;
});