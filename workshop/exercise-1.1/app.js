// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

const body = document.querySelector('body');
//give the max a max height of the screen. 
body.style.height ='100vh'
let hasWon = false;


    setTimeout(function() {
        
        if (hasWon === false) {
            let output = document.getElementById('result');
        output.innerText = ("YOU LOSE")
        
        }
       
        
    },1000)

    body.addEventListener('click', clickFast);
    function clickFast() {

        let output = document.getElementById('result');
        output.innerText = ("YOU WIN")
        hasWon = true;
        
    }
