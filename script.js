function addto() {
    let toadd= document.querySelector(".toadd input")
    let add= document.querySelector(".display")
    if (toadd.value.length==0) {
        alert("it is empty")
        
    }else{
    let newDiv=document.createElement("div")  
    newDiv.id = "p11"; 
    let newP = document.createElement("p");
        newP.textContent = toadd.value; // Set the text content to the input value

        // Append the paragraph to the div
        newDiv.appendChild(newP);
        let remove=document.createElement("button");
        remove.innerHTML="<i class='fa-solid fa-trash'></i>"
        remove.addEventListener("click", function() {
            add.removeChild(newDiv);
            updateLocalStorage()
        });
        newDiv.appendChild(remove);
        // Append the new div to the display container
        add.appendChild(newDiv);
        updateLocalStorage()
        // Clear the input field
        toadd.value = "";
        newDiv.addEventListener("click",function() {
            newP.classList.toggle("completed"); 
        }); 

    }

}
function updateLocalStorage() {
    let tasks = document.querySelectorAll('.display p');
    let tasksArray = [];
    tasks.forEach(task => tasksArray.push(task.textContent));
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

// Function to load tasks from localStorage
function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        let add = document.querySelector(".display");
        savedTasks.forEach(taskText => {
            let newDiv = document.createElement("div");
            newDiv.id = "p11";
            
            let newP = document.createElement("p");
            newP.textContent = taskText;

            let remove = document.createElement("button");
            remove.innerHTML="<i class='fa-solid fa-trash'></i>"
            remove.classList.add("remove-button");
            remove.addEventListener("click", function() {
                add.removeChild(newDiv);
                updateLocalStorage();
            });

            newDiv.appendChild(newP);
            newDiv.appendChild(remove);
            add.appendChild(newDiv);
            newDiv.addEventListener("click",function() {
                newP.classList.toggle("completed"); 
            }); 
    
        });
    }
}

// Call loadTasks() when the page is loaded to load previously saved tasks
document.addEventListener("DOMContentLoaded", loadTasks);