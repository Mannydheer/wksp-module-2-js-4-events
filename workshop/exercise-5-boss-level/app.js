//Create add event listener for start. 
//DECLARED GLOBALLY
const instructionMenu = document.getElementById("instruc")
instructionMenu.addEventListener('click',displayMenu);
//
const gamestart = document.getElementById("start");
gamestart.addEventListener('click', playGame);

//audio control player.
let playTrack;
//second track.
let playSignal;

//sonic score board.
let sonicCount = 0;
//kirby score board
let kirbyCount = 0;

//once START is clicked, START THE GAME!


    // ------START TIMER.
    //random time for coin in the middle to appear.
let randomTime = (Math.floor(Math.random() * 4) + 1) * 1000
// -------GAME STARTER----------
function playGame(event) {
    //delete both buttons. 
    gamestart.remove();
    instructionMenu.remove();

    //COUNTER THAT WILL DISPLAY ALERT THAT SONIC WON
    if (sonicCount == 2) {
        document.removeEventListener('keydown', checkKey);
        document.removeEventListener('keydown', checkKey2);

        

        setTimeout(() => {
            alert("Sonic Won")
            
        }, 3000);
        
    }  
    //COUNTER THAT WILL DISPLAY ALERT THAT SONIC WON
    if (kirbyCount == 2) {
        document.removeEventListener('keydown', checkKey2);
        document.removeEventListener('keydown', checkKey);

        setTimeout(() => {
            alert("Kirby Won")
            
        }, 3000);
        
    }  

    //AUDIO.
    //start the set intervak right away which will play the music as soon as I press start
    let soundTimer = setInterval(() => {

        //play audio
        playTrack = document.getElementById('soundTrack');
        playTrack.play();

    }, 1);
    //make sonic appear on the right and kirby on the left.
    //Can place them in spans since they are inline. 

    //set time out function which will make coin appear. 
    let timer = setTimeout(() => {

        //reset 
        let sonicTimer = setTimeout(() => {
            //RESET POISTIONS
            sonicReset();
            kirbyReset();
            clearTimeout(sonicTimer);
            
        }, randomTime);

        makeCoin();
        // ---SIGNAL----
        exclaFunc();

        // ---AUDIO ----
        //audio play sound. 
        playTrack.pause();
        clearInterval(soundTimer);
        // now add second audio.  
        playSignal = document.getElementById('secsoundTrack');
        playSignal.play();

        //Event listener for p. - SONIC - PLayer 1. 

        document.addEventListener('keydown', checkKey);
        //Event listener for p. - KIRBY - PLayer 2. 
        document.addEventListener('keydown', checkKey2);



        //ADD RESETER FOR GAME. 

    }, randomTime)
    // -------END TIMER
    //function gamestart END
}

//function call for SONIC. 
function checkKey(key) {
    //ONLY IF KEYPRESSED IS 'p'
    if (key.keyCode == '80') {
        //add remove keyevent
        document.removeEventListener('keydown', checkKey);
        document.removeEventListener('keydown', checkKey2);
        // 
//if sonic wins.
    
        //MOVE SONIC TO THE MIDDLE. 
        sonicScore();
        //coin dissapear.
        coinDissapear();
        //function that will give sonic a point.
        sonicPoint();
        //reset the game?
        playGame();

        //keep track of sonics score. 
        sonicCount++;
        clearTimeout(timer);



    }

}


//function call for KIRBY
function checkKey2(key) {
    //ONLY IF KEYPRESSED IS 'p'
    if (key.keyCode == '81') {
        //add remove keyevent
        document.removeEventListener('keydown', checkKey2);
        document.removeEventListener('keydown', checkKey);

        // 

    
        //MOVE SONIC TO THE MIDDLE. 
        kirbyScore();
        // coin dissapear.
// DOUBLE CHECK!!!
        // coinDissapear();
        //function that will give sonic a point.
        kirbyPoint();
        //reset the game?
        playGame();

        //keep track of sonics score. 
        kirbyCount++;
        clearTimeout(timer);



    }

}

// FUNCTION CALLS!!!!!
//function for creating coin.
function makeCoin() {
    coinCreate = document.createElement('img');
    coinCreate.id = "coinStyler";
    document.querySelector('body').appendChild(coinCreate);
    //image added when time has passed from timeout. 
    coinCreate.setAttribute("src", "/workshop/exercise-5-boss-level/imgs/prize.gif");

}

//function for exclamatio  mark.
function exclaFunc() {
    let exclamation = document.createElement('img');
    exclamation.id = 'exclamationMarks'
    document.querySelector('body').appendChild(exclamation);
    exclamation.setAttribute("src", "signal copy.png");
    // make button appear in random positions
    exclamation.style.top = `${Math.random() * 50}vh`;
    exclamation.style.left = `${Math.random() * 90}vw`;


}


//sonic reset position. 
function sonicReset() {
    let sonicstartPosition = document.getElementById('sonicMove');
    sonicstartPosition.style.width = '80px';
    sonicstartPosition.style.position = 'absolute';
    sonicstartPosition.style.bottom = '10px';
    sonicstartPosition.style.right = '5px';

}
function kirbyReset() {
    let kirbystartPosition = document.getElementById('kirbyMove');
    kirbystartPosition.style.width = '80px';
    kirbystartPosition.style.position = 'absolute';
    kirbystartPosition.style.bottom = '10px';
    kirbystartPosition.style.left = '5px';

}

function sonicPoint() {
      //give sonic a point. 
      sonicCoin = document.createElement('img');
      sonicCoin.id = "sonicCoin";
      document.getElementById("sonicPoint").appendChild(sonicCoin);
      //image added when time has passed from timeout. 
      sonicCoin.setAttribute("src", "/workshop/exercise-5-boss-level/imgs/prize.gif");
      //reset sonic position.
      sonicTarget.style.position = 'absolute';
      sonicTarget.style.bottom = '10px';
      sonicTarget.style.right = '45%';
}

function kirbyPoint() {
    //give sonic a point. 
    kirbyCoin = document.createElement('img');
    kirbyCoin.id = "kirbyCoin";
    document.getElementById("kirbyPoint").appendChild(kirbyCoin);
    //image added when time has passed from timeout. 
    kirbyCoin.setAttribute("src", "/workshop/exercise-5-boss-level/imgs/prize.gif");
    //reset sonic position.
    sonicTarget.style.position = 'absolute';
    sonicTarget.style.bottom = '10px';
    sonicTarget.style.left = '45%';
}


function coinDissapear() {
    //make the coin dissapear. 
    let coinDissapear = document.getElementById('coinStyler');
    coinDissapear.style.display = 'none';

}

//function that moves sonic to the middle.
function sonicScore() {
    sonicTarget = document.getElementById('sonicMove');
    sonicTarget.style.right = '45%';
}
//function that moves kirby to the middle.
function kirbyScore() {
    sonicTarget = document.getElementById('kirbyMove');
    sonicTarget.style.left = '45%';
}

function displayMenu() {
    let instrucAdd = document.createElement('h3');
    document.getElementById('instruc').appendChild(instrucAdd);
    instrucAdd.innerText = "Two players wait for a signal to start after a random delay. Once the start signal, first person to press their key wins. If a player presses before the signal appears, they lose. Player one presses the q key and player 2 presses the p key. ";

}