/*  
Here is the exercise on working on the remaining bom method 
Location , Navigator , screen , Window 
Follow the Instruction on the comments 
1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 
Adding Extra is Possible if you want to explore more ...
Good Luck !!! 
*/



const reloadIcon = document.querySelector('.fa'); //relod Icon
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks)
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);

//Fumctions
function addNewTask(e){

    if (taskInput.value === ''){
        // alert('Enter New Task');
        taskInput.style.botderColor="red";

        return;
    }
    const li = document.createElement('li');
    li.className('collection-item')
    li.appendChild(document.createTextNode(taskInput.value))
    
    const link = document.createElement('a')
    link.innerHTML('<i class="fa fa-remove"></i>');
    link.className('delete-item secondary-content');

    li.appendChild(link);

    taskList.appendChild(li);

    // e.preventDefault();

    // alert("Add New Tas ...");
}

function clearAllTasks(){
    // First way
    // taskList.innerHTML = '';

    //second way
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    // alert("clear All Tasks...")
}
function filter Tasks(e){
    // console.log("Task Filter...");
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
