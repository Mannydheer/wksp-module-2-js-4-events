// # The Events Workshop

// ## Exercise 4 - Is This All a Game to You?!

// Building on the exercises done so far, write a program that

// - on load, there is only a 'Start' button
// - clicking on the start button
//     - deletes the button
//     - a random number of buttons appear on the screen.
// - These buttons need to all be clicked within a given amount of time.

// If the user is successful, reward them! They've won the game!!

// ### Note.

// - Once the user clicks all of the buttons, the game ends.
// - Once the game ends, the buttons no longer change change color (remove the event listeners).

// ### B-E-A-U-TIFUL

// Don't forget to take some time to make it pretty.


//do the windows onload/


// Clicking on start button will remove the button. 





const deleteBtn = document.getElementById('startBtn');
//event listener that will wait for click. '
deleteBtn.addEventListener('click', deleteFunction);
// calls function that will remove. 
function deleteFunction() {
    deleteBtn.remove();
    //call function that wiill start game
    gamestarter();
}


var counter =0;
let randomNum = Math.floor(Math.random() *10);
// -------------------------------------------------------------------------

//BUTTON CLICKER. 

//once the buttons are made need to listen for a click.
//once all the buttons turn green , display you win and stop the timer.
//need to somehow register all clicks by having a for loop that will check whether all the buttons are green or not?
// 




function colorChanger (event) 
{   

    colorChanger = event.target.id;
    document.getElementById(colorChanger).classList.toggle('white');
    //toggler.
    // changeIt.style.backgroundColor = 'white';
    counter++;
    if(counter === randomNum)
    {
        tagCreate = document.createElement('span');
        document.querySelector('body').appendChild(tagCreate);
        tagCreate.innerText = ("Winner");
        clearInterval(totalTime);
       
    }
    // let arrayStore = [];
    // arrayStore.push(changeIt)
    
}



    //game will start in this function.
// ---------------------------------------
function gamestarter() {
    //generate for loop for all the buttons. 
    // //generates random number


    for (let giveId = 0; giveId < randomNum; giveId ++) 
    {
        buttonAdder = document.createElement('button');
        //where do I put the buttons. 
        document.querySelector('div').appendChild(buttonAdder);
        buttonAdder.innerText = "⭐";

        // BUTTON STYLER.

        buttonAdder.style.fontSize = '40px';
        buttonAdder.style.padding = 0;

        //random position
        buttonAdder.style.top = `${Math.random() * 40}vh`;
        buttonAdder.style.left = `${Math.random() * 80}vw`;
        


        // 




        //give all buttens an id
        buttonAdder.id = `btn-${giveId}`;    
        //  
        const elementTarget = document.getElementById(`btn-${giveId}`) 
        elementTarget.addEventListener('click', colorChanger); 
 
    }  
    
    //event listener for buttons.
  
   // ---------------------------------------
   // create a p tag for the timer. that will be udpated. 
   //COUNT DOWN TIMER. 
   paraCreate = document.createElement('p');
   document.querySelector('body').appendChild(paraCreate);
   paraCreate.innerText = '10';
   
       //call set interval function
       //create a timer that will count down.
    totalTime = setInterval(() => 
    {
        paraCreate.innerText -= 1;
        if (paraCreate.innerText == 0) {
            clearInterval(totalTime);
            paraCreate.innerText = "TIMES UP!";
            //fix this. 
           
 
            
        }
    }, 1000);
    //call another which will check if everything has been clicked. 
}


//FUNCTION CALLS:

//function that will change the colors 

//declare empty array.






