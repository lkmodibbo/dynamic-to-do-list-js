// Wait for the entire DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // 1️⃣ Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2️⃣ Function to add a new task
  function addTask() {
    // 1️⃣ Retrieve and trim input value
    const taskText = taskInput.value.trim();

    // 2️⃣ Check if input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return; // Stop function if no input
    }

    // 3️⃣ Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // 4️⃣ Create a Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // 5️⃣ Add onclick event to remove button
    removeButton.onclick = function () {
        taskList.removeChild(li);
    };

    // 6️⃣ Append remove button to li
    li.appendChild(removeButton);

    // 7️⃣ Append li to the task list
    taskList.appendChild(li);

    // 8️⃣ Clear input field
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
