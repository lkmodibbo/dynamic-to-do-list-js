// Wait for the entire DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // 1️⃣ Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2️⃣ Function to add a new task
    function addTask() {
        // Get input value and trim spaces
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item <li>
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add click event to remove button
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to list item, and list item to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // 3️⃣ Add event listener for button click
    addButton.addEventListener('click', addTask);

    // 4️⃣ Add event listener for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Call addTask on DOMContentLoaded (just ensures structure is ready)
    console.log("✅ To-Do List Application is ready!");
});
