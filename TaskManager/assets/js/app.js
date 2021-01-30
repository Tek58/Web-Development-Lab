const reloadIcon = document.querySelector('.fa'); 
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks'); 

form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);


function addNewTask(e){

    e.preventDefault();
    if (taskInput.value === ''){
        taskInput.style.borderColor="red";

        return;
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);


}

function clearAllTasks(){
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// *************************************************************************************
function filterTasks(e) {
    var txtValue, ul, li, a; 
    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].firstChild;
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter.value.toUpperCase()) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
} 

// *************************************************************************************

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