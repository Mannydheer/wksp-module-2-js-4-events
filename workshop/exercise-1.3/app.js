// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.


//Lets get a math random number

let random = (Math.floor(Math.random() * 6));

//able to click on anywhere on the body.
 let body = document.querySelector('body');
 body.style.height = "100vh";


// STYLING

body.style.fontSize = '40px';
body.style.backgroundColor = "black";
body.style.color = "white";
body.style.textAlign = 'center';
body.style.paddingTop = '20%';
body.style.fontFamily = 'Arial';




//add time into the HTML
 let countAdd =  document.getElementById('timer');
countAdd.innerText = random;
//COUNT DOWN STYLING
countAdd.style.color = 'yellow';
countAdd.style.fontSize = '100px';
//this will run the set ineterval function every 1000ms which will be equal to the time that we want to decrement by
// every 1000ms we will run the if statement which will decrement the countdown value bye 1 and add it to the html with DOM. 
let countDown = setInterval(function() {
    if (random > 0) {
        random -= 1;
        countAdd.innerText = random;
        
    }
},1000);


// ------------------------------------------------------------

//declare boolean
// realWin is not a winner. 
let realWin = false;

//set Timeout function will only occur after ranom*1000 time has passed. Then it will enter the if statement and check if its true;
let timer = setTimeout(function() {

    if (realWin === false)
    loserOutput = document.getElementById('result');
    loserOutput.innerText = "LOSER";
    realWin = true;
    //LOSER STYLING
    loserOutput.style.fontSize = '60px';
    loserOutput.style.color = 'red';

}, random*1000);



//if you click, will call function first.

function clicker () {
    if (realWin === false) {
        let outputTag = document.getElementById('result');
        outputTag.innerText = 'WINNER';
        //WINNER STYLING.
        outputTag.style.fontSize = '60px';
        outputTag.style.color = 'green';


    //this will clear the setTimeout function so that will stop it and thus NEVER enter it. 
    clearTimeout(timer);

    //clear set interval function so it stops counting down once you win. 
    clearTimeout(countDown);

    // removeEventListener(); //why?

    
    }

}
//function call
 body,addEventListener('click', clicker);


