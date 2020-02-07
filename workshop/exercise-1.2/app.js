// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

// Challenge
// Make the countdown live...

//target the body tag
const body = document.querySelector('body');
//give the body 100 view height. 
body.style.height = "100vh";


//styling
body.style.fontSize = "30px";
body.style.textAlign = "center";
body.style.color = "red";
body.style.background = "white";

//Winner has not won yet. 
let Winner = false;
//keep the random number in a var
let random = Math.floor(Math.random() * 6);
//time output
spanOutput = document.getElementById('time');
spanOutput.innerText = random;

setTimeout(function() {
    if (Winner = false) {
        let output = document.getElementById('result');
        output.innerText = "You lost"
    }
    // else {
    //     clickTime();
    // }

}, random);

function clickTime() {
    let screenResult = document.getElementById('result')
    screenResult.innerText = "You won";
}

body.addEventListener('click', clickTime);