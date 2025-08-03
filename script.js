// Wait for the entire DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load saved tasks on page load
    loadTask();

    // Function to add a new task
    function addTask(taskText = taskInput.value.trim(), save = true) {
        if (taskText !== "") {
            // Create new li element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');

            // Assign onclick event to remove button
            removeButton.onclick = function () {
                taskList.removeChild(li);
                removeFromStorage(taskText);
            };

            // Append button to li
            li.appendChild(removeButton);

            // Append li to task list
            taskList.appendChild(li);

            // Save to localStorage
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            // Clear input field
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Load tasks from localStorage
    function loadTask() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Remove task from localStorage
    function removeFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Add event listener for button click
    addButton.addEventListener('click', () => addTask());

    // Add event listener for Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    console.log("✅ To-Do List Application is ready!");
});
