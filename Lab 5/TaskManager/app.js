//DB variable 

let DB;

// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const sortBtn = document.querySelector('#sortButton')

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
//#region SearchFilter
filter.addEventListener('keyup',filterStuff);
function filterStuff(e){
    const key = e.target.value;6
    populateTaskList(key);
}
function populateTaskList(key) {
    var lists  = taskList.querySelectorAll(".collection-item");
    lists.forEach(element => {
        if(element.textContent.includes(key)){
            console.log(element.textContent);
            element.style.display = "block";
        }
        else{
            element.style.display = "None";
        }
    });
}
///#endregion
//#region Sort
sortBtn.addEventListener('click',sortTasks);
function sortTasks(e){
    var doSort;
    if( sortBtn.firstElementChild.classList.contains('fa-arrow-up')){
        sortBtn.firstElementChild.classList.remove('fa-arrow-up');
        sortBtn.firstElementChild.classList.add('fa-arrow-down');
        doSort = "A"
    }
    else{
        e.target.firstElementChild.classList.remove('fa-arrow-down');
        e.target.firstElementChild.classList.add('fa-arrow-up');
        doSort = "D";
    }
 
    sortList(taskList,doSort);
}
function sortList(list,t) {
    var i, switching, b, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      b = list.querySelectorAll(".collection-item");
      for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (t==="A" && ((b[i].querySelector(".hiddenEle").innerHTML) < (b[i + 1].querySelector(".hiddenEle")).innerHTML)) {
          shouldSwitch = true;
          break;
        }
        else if (t==="D" && ((b[i].querySelector(".hiddenEle").innerHTML) > (b[i + 1].querySelector(".hiddenEle")).innerHTML)) {
            shouldSwitch = true;
            break;
          }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
//#endregion



// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let TasksDB = indexedDB.open('tasks', 1);

    // if there's an error
    TasksDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = TasksDB.result;

        // display the Task List 
        displayTaskList();
    }

    // This method runs once (great for creating the schema)
    TasksDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('taskname', 'taskname', { unique: false });

        console.log('Database ready and fields created!');
    }

    form.addEventListener('submit', addAppointment);
    form.addEventListener('submit', addAppointment);

    function addAppointment(e) {
        e.preventDefault();

        // Check empty entry
        if (taskInput.value === '') {
            taskInput.style.borderColor = "red";

            return;
        }

        // create a new object with the form info
        let newTask = {
                taskname: taskInput.value,
                taskdate: new Date(),
            }
            // console.log(newAppointment);

        // Insert the object into the database 
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');

        // console.log(objectStore);
        let request = objectStore.add(newTask);

        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New appointment added');

            displayTaskList();
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }

    }

    function displayTaskList() {
        // clear the previous task list
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // create the object store
        let objectStore = DB.transaction('tasks').objectStore('tasks');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                // Create an li element when the user adds a task 
                const li = document.createElement('li');
                //add Attribute for delete 
                li.setAttribute('data-task-id', cursor.value.id);
                // Adding a class
                li.className = 'collection-item';
                // Create text node and append it 
                li.appendChild(document.createTextNode(cursor.value.taskname));
                // Create new element for the link 
                const link = document.createElement('a');
                // Add class and the x marker for a 
                link.className = 'delete-item secondary-content';
                link.innerHTML = '<i class="fa fa-remove"></i>';
                // Append link to li
                li.appendChild(link);
                //ADD THE DATE
                const date = document.createElement('div');
                date.innerHTML = cursor.value.taskdate;
                date.classList.add("hiddenEle");
                li.appendChild(date);

                // Append to UL 
                taskList.appendChild(li);
                cursor.continue();            }
        }
    }

    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure about that ?')) {
                // get the appointment id
                let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
                // use a transaction
                let transaction = DB.transaction(['tasks'], 'readwrite');
                let objectStore = transaction.objectStore('tasks');
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }

            }

        }

    }

    clearBtn.addEventListener('click', clearAllTasks);
    //clear tasks 
    function clearAllTasks() {
        let transaction = DB.transaction("tasks", "readwrite"); // (1)
        let tasks = transaction.objectStore("tasks");
        tasks.clear(); // clear the storage.
        displayTaskList();
        console.log("Tasks Cleared !!!");
    }


});