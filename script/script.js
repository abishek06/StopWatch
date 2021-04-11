


var seconds = 0, tens=0;
const start = document.getElementById('btnStart');
const stop = document.getElementById('btnStop');
const reset = document.getElementById('btnReset');
const _tens = document.getElementById('milliseconds');
const _seconds = document.getElementById('seconds');
var interval=0;


start.onclick= function(){
    console.log('Start button clicked');
    clearInterval(interval);
    interval= setInterval(startTimer,10);
    
}

function startTimer(){
    tens++;
    console.log(`The milliseconds in ${tens}`);
    if(tens<=9)
        _tens.innerHTML = 0+tens;
    if(tens>9)  
         _tens.innerHTML=tens; 
    if(tens>99) 
    {   
         tens=0  ;
        _tens.innerHTML="0"+tens;
        seconds++;
        if(seconds<=9)
           _seconds.innerHTML="0"+seconds;
        if(seconds>9)
            _seconds.innerHTML=seconds;   
    }
    
}

stop.onclick= function(){
    console.log('Stop button clicked');
    clearInterval(interval);
    console.log(interval);

}

reset.onclick = function(){
    console.log('Reset button clicked');
    clearInterval(interval);
    _tens.innerHTML="00";
    _seconds.innerHTML="00";
    tens=0;
    seconds=0;
}