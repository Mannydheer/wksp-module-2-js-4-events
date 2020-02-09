// # The Events Workshop

// ## Exercise 3.3 - Buttons, Here, There, Everywhere!

// You can copy the `HTML` file over, but I strongly recommend redoing the JS from scratch without looking at your previous answer as mush as possible.

// Building on exercise 3.1 and 3.2, write a program that places 20 buttons in the page that toggle from red to green but this time they are located in random positions on the screen.


//variables



//create a loop that will create 20 buttons. 

for (count = 1; count <= 20; count++) {

    //create a button tag and store in buttonCreate
    const buttonCreate = document.createElement('button');
    //get the body and insert a button Tag as the child of the class div
    document.querySelector("div").appendChild(buttonCreate);
    //give Ids to each button tag. 
    buttonCreate.id = `btn-${count}`;
    //give content to each button
    buttonCreate.innerText = `Button ${count}`;
    //style random
    //adding a random number to the top and left 
    buttonCreate.style.top = `${Math.random() * 80}vh`;
    buttonCreate.style.left = `${Math.random() * 80}vw`;


    //add event listener that calls function on click. 
    //button create already represents each BUTTON tag. 
    buttonCreate.addEventListener('click', toggleColor)

}




//function togglecolor call

//pass the event to the functions
function toggleColor(event) {
    //store the event of the id into a var.
    //target the id of the event. 
    toggler = event.target.id;
    //KEEP IN MIND that toggler now holds the id of each buttons
   

    //you're adding a class name to toggle in between with. 
    // when you click it will toggle by either turninng the class on/off. If its on, it will turn the color to green, if off
    // it will turn it off, and since the color of the button is red to begin with, it will go back to being red. 
    document.getElementById(toggler).classList.toggle('green');
    
}

