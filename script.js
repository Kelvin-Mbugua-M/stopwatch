const time = document.getElementById('stopTimer');
let hour = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds =0;
let count = 0;
let pause = true;
function updateTimer(){
    if(minutes>=59){
        hour++;
        minutes=0
    }
    if(seconds>=59){
        minutes++;
        seconds=0;
    }
    if(milliSeconds>=9){
        seconds++;
        milliSeconds=0;
    }
    milliSeconds += count
    time.innerHTML = `${hour<10?'0':''}${hour} : ${minutes<10?'0':''}${minutes} : ${seconds<10?'0':''}${seconds} : ${milliSeconds}`;
    
}
function startFunction(){
    return count = 1, pause = false;
    
}
function stopFunction(){
    updateTimer()
    return count =0,pause = true;

}
function resetTimer(){
    hour =0
    milliSeconds=0
    seconds=0
    minutes=0
    count=0
    updateTimer()
}
document.addEventListener('keypress',function(e){
    if(e.key==="r"){
        resetTimer();
    }
    if(e.key==="Enter"){
        startFunction();
    }
    if(e.key===" "){
        if(pause===false){
            stopFunction();
        }
        else startFunction();
    }
});
let callTimer = setInterval(updateTimer,100);