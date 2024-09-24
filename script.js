// Select elements
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Create task text
    const task = document.createElement('span');
    task.textContent = taskText;
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    // Append the task and delete button to the list item
    listItem.appendChild(task);
    listItem.appendChild(deleteButton);

    // Add the list item to the to-do list
    todoList.appendChild(listItem);

    // Clear the input field
    input.value = '';
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addTask);

// Add task on pressing the "Enter" key
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
