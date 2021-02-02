// // Add to LocalStorage function declaration 
// function addToDatabase(newTask) {
//     let listofTasks;
//     if (localStorage.getItem('tasks') == null) {
//         listofTasks = [];
//     } else {
//         listofTasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     listofTasks.push(newTask);
//     localStorage.setItem('tasks', JSON.stringify(listofTasks));


// }

// // Load task from local storage function declaration 
// function loadfromDB() {
//     let listofTasks;
//     if (localStorage.getItem('tasks') == null) {
//         listofTasks = [];
//     } else {
//         listofTasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     return listofTasks;
// }

// // Clear from Local Storage 
// function clearAllTasksfromDB() {
//     localStorage.clear();
// }

// // Remove from Local storage function declaration 
// function removefromDB(taskItem) {

//     // console.log(taskItem.textContent);
//     let listofTasks;
//     if (localStorage.getItem('tasks') == null) {
//         listofTasks = [];
//     } else {
//         listofTasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     listofTasks.forEach(function(task, index) {
//         if (taskItem.textContent.trim() === task.trim())
//             listofTasks.splice(index, 1);
//     });
//     localStorage.setItem('tasks', JSON.stringify(listofTasks));

// }
// // ****************************************************
// / Load from Storage Database 
// function loadTasksfromDB() {
//     let listofTasks = loadfromDB();
//     if (listofTasks.length != 0) {



//         listofTasks.forEach(function(eachTask) {

//             // Create an li element when the user adds a task 
//             const li = document.createElement('li');
//             // Adding a class
//             li.className = 'collection-item';
//             // Create text node and append it 
//             li.appendChild(document.createTextNode(eachTask));
//             // Create new element for the link 
//             const link = document.createElement('a');
//             // Add class and the x marker for a 
//             link.className = 'delete-item secondary-content';
//             link.innerHTML = '<i class="fa fa-remove"> </i>';
//             // Append link to li
//             li.appendChild(link);
//             // Append to UL 
//             taskList.appendChild(li);
//         });

//     }

// }