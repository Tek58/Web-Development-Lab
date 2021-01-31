const reloadIcon = document.querySelector('.fa'); 
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks'); 

// ***********************************************************************
const aUpToz = document.querySelector('A_Z');
const zUpToa = document.querySelector('Z_A');
// ***********************************************************************


form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);

// ***********************************************************************
aUpToz.addEventListener('click', filterAuptoZ);
zUpToa.addEventListener('click', filterZuptoA);

// ***********************************************************************
function filterAuptoZ(){
    var txtValue, ul, li, a; 
    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName('li');
    var lis  = []
    for (i = 0; i < li.length; i++) {
        a = li[i].firstChild;
        txtValue = a.textContent;
        lis.push(textValue)
      }

    var sortedLis =  lis.sort(function (a, b) {var dateA = new Date(a.date), dateB = new Date(b.date)
        return dateA - dateB
    });
    for (i = 0; i < li.length; i++) {
        a = li[i].firstChild;
        a = sortedLis[i] 
      }
}

function filterZuptoA(e){
    var txtValue, ul, li, a; 
    ul = document.getElementById("myUl");
    li = ul.getElementsByTagName('li');
    var lis  = []
    for (i = 0; i < li.length; i++) {
        a = li[i].firstChild;
        txtValue = a.textContent;
        lis.push(textValue)
      }

    var sortedLis =  lis.sort(function (a, b) {var dateA = new Date(a.date), dateB = new Date(b.date)
        return dateB - dateA
    });
    for (i = 0; i < li.length; i++) {
        a = li[i].firstChild;
        a = sortedLis[i] 
      }
}
// ****************************************************************************************************


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
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
//   });