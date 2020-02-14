//event listening that listens for 'keydown'
const balloon = document.getElementById('balloon');
//set global var that will know what the size of the balloon is. 
let balloonSize = 12;
//call
balloon.style.fontSize = balloonSize + 'px';  //can also write: '${balloonSize}px'  //backticks allows to put javascipt in there. 
//min size of the baloon.
const MIN_SIZE = 6;
//set a max size for the balloon. 
const MAX_SIZE =  100;
const increment = 2;
const MAX_EXPLOSION_SIZE = 1000;

//create the function that calls when pressing keydown
function handlekeydown() {
    //we want to console log 
    //change to event.key instead of event.target
    // console.log(event.key);

        //if "arrow up" 
        if (event.key === 'ArrowUp') {
            //grow the ballon. 
            // if (balloonSize < MAX_SIZE)
            balloonSize += increment;
            balloon.style.fontSize = `${balloonSize}px`;
            //if balloon is bigger than "font size' -- x 
            
            if (balloonSize > MAX_SIZE) {
                //remove the event listener. 
                //remove the baloon.
                document.removeEventListener('keydown', handlekeydown);
                //switch the balloon /add in xplosion emoji.
                balloon.innerText = '💥'
            //explosion grows incrementally
                const explosion = setInterval(function() {
                    balloonSize += 1;
                    balloon.style.fontSize = `${balloonSize}px`;
                })
            
            //if xplosion size is y 
                if (balloonSize > MAX_EXPLOSION_SIZE) {
                    //clear the interval - stop growing
                    clearInterval(explosion);
                
            //fadeout. (opacity to 0) - transition on div so it will fade out. 
                balloon.style.opacity = 0;
            };

        }   else if (event.key === 'ArrowDown') {
            //if balloon is z bigger than Z
            if (balloonSize > MIN_SIZE) {
                //shrink the balloon.
                //I need to change the global VAR and then modify the DOM
                balloonSize -= increment;
                //make DOM reflect this.
                balloon.style.fontSize = `${balloonSize}px`;
            }
                        //if "arrow down"
            //if balloon is x in size, stop strinking. 
            // ---------------------------------
        }
        
    }
}

// ------------------------------------

//create an event listneing.
//need to create a function for handling keydown.

//change to document
document.addEventListener('keydown', handlekeydown);