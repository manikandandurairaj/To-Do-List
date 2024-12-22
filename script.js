// Script File
document.getElementById('add-button').addEventListener('click', function(){
	const todoInput = document.getElementById('todo-input');
	const todoText = todoInput.value.trim();

	if(todoText !== ''){
		addTodoItem(todoText);
		todoInput.value = '';
		todoInput.focus();
	}
});

// Add Task To List
function addTodoItem(text){
	const todoList = document.getElementById('todo-list');

	const listItem = document.createElement('li');

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';
	checkbox.addEventListener('change', function(){
		listItem.classList.toggle('completed');
	})

	const taskText = document.createElement('span');
	taskText.textContent = text;
	taskText.className = 'task-text';

	const deleteBtn = document.createElement('span');
	deleteBtn.className = 'deleteBtn';
	deleteBtn.innerHTML = '<i class="fa solid fa-trash"></i>';
	deleteBtn.addEventListener('click', function(){
		todoList.removeChild(listItem);
	})

	listItem.appendChild(checkbox);
	listItem.appendChild(taskText);
	listItem.appendChild(deleteBtn);

	todoList.appendChild(listItem);
}