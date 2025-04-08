// Create a variable that will hold your to-do list items.
let todo = []; 

// Add a function that takes in a string as input
// and adds it to the to-do list.

function addToTodo(task){
    todo.push(task)
    displayToDos();
}

// Remove an item from the to do list

// Add an event handler to populate an HTML element
// with your to-do list when the user clicks the appropriate button.

// when add button is clicked or input is "entered" add item to todo array and display item on to do list
// variable for add button/
// event listener for add button
function displayToDos() {
    let existitingList = document.getElementById('todo-list');
    
    if(!existitingList){
        existitingList = document.createElement('ul');
        existitingList.id = 'todo-list';
        document.body.appendChild(existitingList);
    }

existitingList.innerHTML = "";
for (let item of todo) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let removeButton = document.createElement('button');
    
    li.textContent = item;
    existitingList.appendChild(li);
}
}

// event listener for input entry "enter"

// variable for input entry
const listItemArea = document.getElementById('todo-list-input');

// event listener for enter in input area
listItemArea.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addToTodo(event.target.value);
        event.target.value = '';
        console.log(todo)
    }
});


const addButton = document.getElementById('todo-item-add-btn');

addButton.addEventListener('click', function(event) {
    console.log('add button click event occurred');
        addToTodo(event.target.value);
});

displayToDos(todo);