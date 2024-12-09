document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement('li');
    taskItem.classList.add('pending');

    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            <button class="complete-btn" onclick="markComplete(this)">Complete</button>
        </div>
    `;

    document.getElementById('pendingTasks').appendChild(taskItem);
    taskInput.value = '';
}

function markComplete(button) {
    const taskItem = button.closest('li');
    taskItem.classList.add('completed');
    taskItem.classList.remove('pending');
    document.getElementById('completedTasks').appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.closest('li');
    const taskText = taskItem.querySelector('span');
    const newText = prompt('Edit Task:', taskText.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText.trim();
    }
}
