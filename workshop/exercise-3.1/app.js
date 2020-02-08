
//var for targetting each Id with the appropriate button. 
//function call from clicking on the button. 





//for loop will create 20 buttons and create IDS for each. 
for (let count = 1; count <=20; count ++) {
    const textButton = document.createElement('button');
    textButton.id = `btn-${count}`
    textButton.innerText = "Button   " + count;
    //create a button under the body parent tag. (*20)
    document.querySelector('body').appendChild(textButton);

    //add clases.
    

    //learn to add clases. 
    textButton.style.backgroundColor = 'red';
    textButton.style.fontSize = '30px';
    textButton.style.padding = '20px';
    textButton.style.borderRadius = '30px';
    
    // event listener
    //as it is iterating through the for loop, check if there is a click.
    textButton.addEventListener('click', colorChange);

    // -----------
     
}

//Now I need to create an event listener that will listen for a button click, when it does, it will
//turn the button clicked red. 

//this function will pass the current event at which it is at. 
//If the function is called, it will pass the event (the button) into the function

function colorChange (event) {
    console.log(event);
    //get the ID of the element that fired the event.
    //next event.target.id will get the specific id that represents the event. And store it in textButtonId
    textButtonId = event.target.id;
    //next, the id value will be stored in newStyler
    newStyler = document.getElementById(textButtonId);
    //now we can style the id. 
    newStyler.style.backgroundColor = 'green';
    
 }
//need to add event listener
//whatever button I click on, I need to store it in the function call. 




