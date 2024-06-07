document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const searchInput = document.getElementById('search');

    let tasks = [];

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;

        const task = {
            title,
            description,
            dueDate,
            priority,
            status: 'Pending'
        };

        tasks.push(task);
        displayTasks();
        taskForm.reset();
    }

    function displayTasks() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.dueDate}</td>
                <td>${task.priority}</td>
                <td>${task.status}</td>
                <td class="actions">
                    <button data-action="toggle" data-index="${index}">${task.status === 'Pending' ? 'Complete' : 'Reopen'}</button>
                    <button data-action="delete" data-index="${index}">Delete</button>
                </td>
            `;

            taskList.appendChild(row);
        });
    }
});
