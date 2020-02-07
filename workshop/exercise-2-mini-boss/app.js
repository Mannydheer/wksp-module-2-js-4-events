//body styles
// let body = document.querySelector('body');
// body.style.textAlign = 'center';
// body.style.paddingTop = '20%';
// body.style.backgroundColor = 'white';
//button styles




//need to create an Object that will hold the current TIME:
let current = new Date(2020, 2, 6, 11, 31,);

//1.
//2.
//get an interval function. 
let countDown = setInterval(function(){
    current = new Date();
    let getTime = document.getElementById("timeToday");
    getTime.innerText = current;
    // getTime.style.fontSize = '30px';
    // getTime.style.fontFamily = 'Comic Sans Ms';
    // getTime.style.color = 'black';

}, 1000);


//3.
//Make a start button on the screen. 
//make a stop button on screen. 

// ------------------------------------------------------------------------------------------


//Make a timer function.

//set timer to 0
//timer will still keep the value.
let timer = 0;
//interval which will update the time. 
//put the set interval in a function
let watch;
function controlStart () {
    watch = setInterval(function(){

        timer += 1;
        let timeCount = document.getElementById("displayTime");
            timeCount.innerText = timer + ' seconds elapsed'
            // timeCount.style.fontFamily = 'Comic Sans Ms';
            // timeCount.style.fontSize = ' 30px'
            // timeCount.style.color = 'black';

//update time every second. 
},1000)

}

//get the id for STOP
let stop = document.getElementById('btnStop');

//when click on stop, function call. 
stop.addEventListener('click', controlStop);


//function for stopping time. 

function controlStop() {
    
    clearInterval(watch);
}


//get the id for start
let start = document.getElementById('btnStart');

//when click on stop, function call. 
start.addEventListener('click', controlStart);


// ------------------------------------------------------------

//user can enter amount which can be stored in timer. 

let valuePut = document.getElementById('valueEntered');

//document.getElementById("myText").value = "Johnny Bravo";


//call function when clicking enter. 
let secondTimer;
let enter;
let audioPlay;
// let newEnter;
function computeValue () {
    //the value they put will be stored in enter
    enter = valuePut.value;
   
    
    // newEnter = enter;
// start countingdown
        secondTimer = setInterval(function(){
            
            if (enter > 0) {
                enter -= 1;
                countdownOutput = document.getElementById('output');
                countdownOutput.innerText = enter;
            }
            else {
                // countdownOutput.innerText = "END";
                countdownOutput.innerText = 'END';
                audioPlay = document.getElementById('player');
                audioPlay.play();

            }
    
    }, 1000)




}




//go get button enter from HTML
let valueInput = document.getElementById('inputValue');

valueInput.addEventListener('click', computeValue);













