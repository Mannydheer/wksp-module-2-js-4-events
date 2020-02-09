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
//DELETE
   

}



// -------------------------------------------------------------------------
// add another event listener which will
//BUTTON CLICKER. 

//once the buttons are made need to listen for a click.
//once all the buttons turn green , display you win and stop the timer.
//need to somehow register all clicks by having a for loop that will check whether all the buttons are green or not?
// 



    //game will start in this function.
// ---------------------------------------
function gamestarter() {
    //generate for loop for all the buttons. 
    // //generates random number
    let randomNum = Math.floor(Math.random() *20);
    
    for (let count = 0; count < randomNum; count++) {
        buttonAdder = document.createElement('button');
        //where do I put the buttons. 
        document.querySelector('body').appendChild(buttonAdder);
        buttonAdder.innerText = "CLICK ME";
        //give all buttens an id
        buttonAdder.id = `btn-${count}`;    
        //  
        const elementTarget = document.getElementById(`btn-${count}`) 
        elementTarget.addEventListener('click', colorChanger);  

     

    
        //increment count
        count++;
    }



    // colorStore = buttonAdder.style.backgroundColor;
    // console.log(colorStore);

    
    //event listener for buttons.
  
   // ---------------------------------------
   // create a p tag for the timer. that will be udpated. 
   //COUNT DOWN TIMER. 
   paraCreate = document.createElement('p');
   document.querySelector('body').appendChild(paraCreate);
   paraCreate.innerText = '10';
   
       //call set interval function
       //create a timer that will count down.
    totalTime = setInterval(() => {
        paraCreate.innerText -= 1;
        if (paraCreate.innerText == 0) {
            clearInterval(totalTime);
            paraCreate.innerText = "TIMES UP";
            //fix this. 
            removeEventListener();
            
        }
     
    }, 1000);

   
    //once out.
  


}


//FUNCTION CALLS:

//function that will change the colors 


function colorChanger (event) {
    
    
    colorChanger = event.target.id;
    changeIt = document.getElementById(colorChanger);
    changeIt.style.backgroundColor = 'blue';
    
}






