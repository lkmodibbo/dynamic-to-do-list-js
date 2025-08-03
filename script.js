// Wait for the entire DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // 1️⃣ Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2️⃣ Function to add a new task
 function addTask() {
    // Get and trim input
    const taskText = taskInput.value.trim();

    // Only proceed if not empty
    if (taskText !== "") {
        // Create new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // ✅ Using classList.add

        // Assign onclick event to remove button
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li
        li.appendChild(removeButton);

        // Append li to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
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
