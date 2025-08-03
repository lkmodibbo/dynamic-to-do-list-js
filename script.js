// Listen for the 'DOMContentLoaded' event to ensure the HTML document is fully loaded
// before we try to access any elements. All subsequent code will be inside this callback.
document.addEventListener('DOMContentLoaded', () => {

    // Select the DOM elements and store them in constants for easy access.
    // This is a good practice to avoid repeatedly querying the DOM.
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add a new task.
    function addTask() {
        // Retrieve the value from the input field and remove leading/trailing whitespace.
        const taskText = taskInput.value.trim();

        // Check if the input is not empty.
        if (taskText === "") {
            // If the input is empty, alert the user and do nothing else.
            alert("Please enter a task.");
            return;
        }

        // Create a new list item element for the task.
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button to remove the task.
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add an event listener to the remove button to delete the list item.
        // We use an anonymous function here to remove the parent element (the <li>).
        removeBtn.onclick = function() {
            listItem.remove();
        };

        // Append the remove button to the list item.
        listItem.appendChild(removeBtn);

        // Append the new list item to the task list.
        taskList.appendChild(listItem);

        // Clear the input field for the next task.
        taskInput.value = '';
    }

    // --- New code for Event Listeners ---

    // Add a click event listener to the "Add Task" button.
    // When the button is clicked, the addTask function will be called.
    addButton.addEventListener('click', addTask);

    // Add a keypress event listener to the input field.
    // This allows the user to add a task by pressing the 'Enter' key.
    taskInput.addEventListener('keypress', function(event) {
        // Check if the key pressed is the 'Enter' key.
        if (event.key === 'Enter') {
            // Prevent the default form submission behavior.
            event.preventDefault(); 
            // Call the addTask function.
            addTask();
        }
    });


});
