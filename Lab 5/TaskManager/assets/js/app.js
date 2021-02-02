const reloadIcon = document.querySelector('.fa'); 
const taskInput = document.querySelector('#task');
const dateInput = document.querySelector('#dateInput');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks'); 
const asscending = document.querySelector('.asc');
const decending = document.querySelector('.des');


form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);
asscending.addEventListener("click", sortAsc  )
decending.addEventListener("click", sortDsc )


function createTask(task, date) {
    const li = document.createElement("li");
    li.className = "collection-item";
    const p = document.createElement("p")
    p.innerHTML = task
    li.appendChild(p);
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    const addDate = document.createElement("p")
    addDate.className = "d-none"
    addDate.innerHTML = date
    li.appendChild(addDate)
}





function addNewTask(e){

    e.preventDefault();
    if (taskInput.value === ''){
        taskInput.style.borderColor="red";

        return;
    }
    const nowDate = new Date();
    const nowDateString = nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds() + ":" + nowDate.getMilliseconds()

    createTask(taskInput.value, nowDateString)
    sortAsc()
    taskInput.value = "";

}

function sortAsc() {
    const allTasks = document.querySelectorAll('.collection-item')
    const allContents = []
    allTasks.forEach(function (task) {
        let content = {
            task: task.childNodes[0].textContent,
            date: task.childNodes[2].textContent
        }

        allContents.push(content)
    })

    const sortedContent = allContents.sort((a, b) => (a.date > b.date) ? 1 : -1)


    document.querySelector('.collection').innerHTML = ''
    sortedContent.forEach(function (task) {
        createTask(task.task, task.date)
    })
}

function sortDsc() {
    const allTasks = document.querySelectorAll('.collection-item')
    const allContents = []
    allTasks.forEach(function (task) {
        let content = {
            task: task.childNodes[0].textContent,
            date: task.childNodes[2].textContent
        }

        allContents.push(content)
    })

    const sortedContent = allContents.reverse((a, b) => (a.date > b.date) ? 1 : -1)


    document.querySelector('.collection').innerHTML = ''
    sortedContent.forEach(function (task) {
        createTask(task.task, task.date)
    })
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