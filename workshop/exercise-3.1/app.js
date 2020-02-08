
//for loop will create 20 buttons and create IDS for each. 
for (let count = 0; count <=20; count ++) {
    textButton = document.createElement('button');
    textButton.id = `btn${count}`
    textButton.innerText = "Button   " + count;
    document.querySelector('body').appendChild(textButton);
    //styling for each button as it iterates through the loop
    textButton.style.backgroundColor = 'red';
    textButton.style.fontSize = '30px';
    textButton.style.padding = '20px'
}

//Now I need to create an event listener that will listen for a button click, when it does, it will
//turn the button clicked red. 

//create  a loop;


    let buttonClick = document.getElementById('`btn${count}`');
    buttonClick.addEventListener('click', colorChange);


//need to add event listener
// let buttonClick = document.getElementById('btn1');
// buttonClick.addEventListener('click', colorChange);

//var for targetting each Id with the appropriate button. 
//function call from clicking on the button. 
function colorChange () {

    buttonClick.style.backgroundColor = 'green';
 
 }


