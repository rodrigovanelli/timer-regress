const min = document.querySelector('#min')
const seg = document.querySelector('#seg')
var minutes = 14;
var seconds = 59;

const timerRegress = () => {
    min.innerHTML = minutes;
    seg.innerHTML = seconds;
    seconds--;
    if(seconds < 0) {
        seconds = 10;
        minutes--;
        if(minutes < 0) {
            clearInterval(startTimer)
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
            +minutes;
        }
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
        +seconds;
    }
}
const startTimer = setInterval(timerRegress, 1000)