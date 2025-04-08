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
    let existingList = document.getElementById('todo-list');
    
    if(!existingList){
        existingList = document.createElement('ul');
        existingList.id = 'todo-list';
        document.body.appendChild(existingList);
    }

existingList.innerHTML = "";

todo.forEach((item, index) => {
    
    let li = document.createElement('li');
    let span = document.createElement('span');
    let removeButton = document.createElement('button');
    
    li.classList.add('todo-item');
    
    span.textContent = item;
    removeButton.textContent = 'Remove';
    
    span.addEventListener("click", function(event){
    span.style.textDecoration =
    span.style.textDecoration === 'line-through' ? '' : 'line-through';
    
    });
    
    removeButton.addEventListener('click', function(event){
    
    todo.splice(index, 1);
    displayToDos();
    
    });
    
    li.appendChild(span);
    li.appendChild(removeButton);
    existingList.appendChild(li);
    
    li.addEventListener('click', function (event){
    const clickedListItem = event.target;
    
    if (clickedListItem.style.textDecoration === 'line-through') {
        clickedListItem.style.textDecoration = '';
    } else {
        clickedListItem.style.textDecoration = 'line-through';
    }
    
    });
});


// for (let item of todo) {
//     let li = document.createElement('li');
//     let span = document.createElement('span');
//     let removeButton = document.createElement('button');
    

//     li.classList.add('todo-item');
    
//     span.textContent = item;
//     removeButton.textContent = 'Remove';

//     li.appendChild(span);
//     li.appendChild(removeButton);
//     existingList.appendChild(li);

//     // <li>List Item Text<span>Remove Button</span></li>

//     li.addEventListener('click', function (event){
//         const clickedListItem = event.target;

//         if (clickedListItem.style.textDecoration === 'line-through') {
//             clickedListItem.style.textDecoration = '';
//         } else {
//             clickedListItem.style.textDecoration = 'line-through';
//         }
//     });
//     removeButton.addEventListener('click', function(){
//         todo.splice(index, 1);
//         displayToDos();
//     });
// }
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
        addToTodo(listItemArea.value);
});

displayToDos(todo);