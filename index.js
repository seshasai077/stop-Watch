// .padStart() అనేది JavaScript లో string method. దీని ఉపయోగం ఒక string ను కావలసిన length కు తీసుకెళ్లడం. అవసరమైతే left (ముందు) వైపు కొన్ని characters తో fill చేస్తుంది.
   // examples //
// "1".padStart(2, "0")    // "01"
// "25".padStart(4, "0")   // "0025"
// "abc".padStart(5, "-")  // "--abc"
// "abc".padStart(2, "-")  // "abc" (Already 3 letters, no change)


let count = 0
let milliSeconds = 0
let seconds = 0
let minutes = 0 
let timerrunning = false
let intervel = 0



function stopWatch(){
    count++;
    
          minutes = Math.floor(count / 6000);
          seconds = Math.floor((count % 6000) / 100); 
          milliSeconds = count % 100;          
         
        document.querySelector('#minutes').innerText = minutes.toString().padStart(2, '0'); 
        document.querySelector('#seconds').innerText = seconds.toString().padStart(2, '0');
        document.querySelector('#milliseconds').innerText = milliSeconds.toString().padStart(2, '0');   
}
//  start
let startBtn = document.querySelector(`#start`)
startBtn.addEventListener(`click`,function(){
    // iw anto increment the seconds so we need count++
    if (timerrunning === false) {
             intervel = setInterval(stopWatch ,10)
             timerrunning = true
    }
})
//stop
let stopBtn = document.querySelector(`#stop`)
stopBtn.addEventListener(`click`,function(){
    if (timerrunning === true) {
         clearInterval(intervel)
         timerrunning = false
    }

})
// reset          
let resetBtn = document.querySelector(`#reset`)
resetBtn.addEventListener(`click`,function(){
   document.querySelector('#minutes').innerText = `00`
        document.querySelector('#seconds').innerText = `00`
        document.querySelector('#milliseconds').innerText = `00`
        
})