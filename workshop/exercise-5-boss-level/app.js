//Create add event listener for start. 
//DECLARED GLOBALLY
const instructionMenu = document.getElementById("instruc")
const gamestart = document.getElementById("start");
gamestart.addEventListener('click', playGame);

//audio control player.
let playTrack;
//second track.
let playSignal;

//once START is clicked, START THE GAME!



function playGame(event) 
{
    //delete both buttons. 
    gamestart.remove();
    instructionMenu.remove();



//AUDIO.
    let soundTimer = setInterval(() => {
        
        //play audio
        playTrack = document.getElementById('soundTrack');
        playTrack.play();
            
        }, 1);
        
    
    //make sonic appear on the right and kirby on the left.
    //Can place them in spans since they are inline. 



let randomTime = (Math.floor(Math.random() * 4) + 1)*1000
    //set time out function which will make coin appear. 
    let timer = setTimeout(() => {
        let coinCreate = document.createElement('img');
        coinCreate.id = "coinStyler";
        document.querySelector('body').appendChild(coinCreate);
        //image added when time has passed from timeout. 
        coinCreate.setAttribute("src", "/workshop/exercise-5-boss-level/imgs/prize.gif");
        //make exclamation mark pop and pause audio.
        //need to make it appear randomly.
        let exclamation = document.createElement('img');
        exclamation.id = 'exclamationMarks'
        document.querySelector('body').appendChild(exclamation);
        exclamation.setAttribute("src", "signal copy.png");
       
        playTrack.pause();
        clearInterval(soundTimer);
        // now add second audio. 
        playSignal = document.getElementById('secsoundTrack');
        playSignal.play();
        //ADD RESETER FOR GAME. 
        
    }, randomTime)






}