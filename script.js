var timerInMs = 0;
var timer;
let btnStart=document.getElementById("start")

document.getElementById("start").addEventListener("click",startTimer);

document.getElementById("pause").addEventListener("click",pauseTimer);

document.getElementById("reset").addEventListener("click",resetTimer);

function resetTimer(){
    clearInterval(timer)
    timerInMs=0;
    updateTime(timerInMs);
    btnStart.disabled="";
    document.getElementById("ms").innerText=0+"0";
}

function pauseTimer(){
     clearInterval(timer);
     btnStart.disabled="";
}

function startTimer(){
    timer = setInterval(()=>{
        
        timerInMs+=10;
        updateTime(timerInMs);

    },10)
    btnStart.disabled="true";
}

function updateTime(timerInMs){

    const sec = Math.floor(timerInMs/1000);
    const min = Math.floor(timerInMs/60000);
    const ms = (timerInMs%1000)/10;

    document.getElementById("min").innerText=min<10 ? "0" + min%60 : min%60;

    document.getElementById("sec").innerText=sec<10 ? "0" + sec%60 : sec%60;

    document.getElementById("ms").innerText=ms;
}