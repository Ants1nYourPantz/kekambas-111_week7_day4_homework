let form = document.getElementById('toDoList');
form.addEventListener('submit', handleFormSubmit);

let itemsOnList = []

async function handleFormSubmit(event){
    event.preventDefault(); 
    buildList(itemsOnList);
};

function buildList(itemsOnList){
    let itemAdded = document.querySelector('input[name="itemsToDo"]'); 
    let userInput = itemAdded.value; //Used ChatGPT to explain how to use this

    let card = document.createElement('div');
    card.className = 'card w-100';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.textContent = userInput;

    card.append(cardBody);

    let col = document.createElement('div');
    col.className = 'col-12 my-1';

    col.append(card);

    let listOfItems = document.getElementById('listOfItems');
    listOfItems.append(col);

    itemAdded.value = '';
};