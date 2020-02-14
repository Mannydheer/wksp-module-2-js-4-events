
//create a for loop that will create 20 buttons. 

for (count = 1; count <= 20; count++) {
//create a button tag
    const idCreate = document.createElement('button');
    idCreate.id = `btn-${count}`;
    //need to put a inner text.
    idCreate.innerText = "Button" + count;
    //each button will go under the body tag.
    document.querySelector("body").appendChild(idCreate);

    //style.
    idCreate.style.backgroundColor = 'red';
    idCreate.style.fontSize = '30px';
    idCreate.style.padding = '20px';
    idCreate.style.borderRadius = '30px';

    // in each iteration, it will check for a click. If there is one, call changer function. 
    idCreate.addEventListener('click', changer);
}


//pass the event. 
function changer (event) {
//target the id of the event and store it in a var. 
let idStore = event.target.id;
//get the ID now and store it another var. - Understand why - maybe to apply csS?
let realId = document.getElementById(idStore);
realId.style.backgroundColor = 'green';

//add another event listener which will call another function to turn it red. 
//keep note here, you are adding an event listening based on the realId which represents the ID of the button. 
//ASK why--------------------------------------
realId.addEventListener('click', turnGreen);

}

function turnGreen (event) {
    greenStore = event.target.id;
    greenChange = document.getElementById(greenStore);
    greenChange.style.backgroundColor = 'red';

}