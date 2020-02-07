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
//add time into the HTML
 let countAdd =  document.getElementById('timer');
 countAdd.innerText = random;
// ------------------------------------------------------------

let timer = setTimeout(function() {
    loserOutput = document.getElementById('result');
    loserOutput.innerText = "LOSER";
}, random*1000);



function clicker () {
    let outputTag = document.getElementById('result');
    outputTag.innerText = 'WINNER';

}


//function call
 body,addEventListener('click', clicker);


