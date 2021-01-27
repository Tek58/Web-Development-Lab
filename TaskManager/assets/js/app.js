const reloadIcon = document.querySelector('.fa'); //relod Icon
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);


function addNewTask(e){

    e.preventDefault();
    if (taskInput.value === ''){
        // alert('Enter New Task');
        taskInput.style.borderColor="red";

        return;
    }
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);


}

function clearAllTasks(){
    // taskList.innerHTML = '';

    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}


function filterTasks(e) {
   document.querySelectorAll('.collection-item').forEach(item => {
       if (item.firstChild.textContent.toString() === filter.value.toString()){
           item.style.display = 'block';
       }else{
           item.style.display = 'none';
       }
   })
} 

function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are you Sure aboyt that ?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

function reloadPage() {
    location.reload();
}