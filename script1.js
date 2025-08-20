function addTask() {
    const newTask = document.createElement('li')
    const tasklist = document.getElementById('tasklist')
    tasklist.appendChild(newTask)
    newTask.textContent = document.getElementById('search').value
     document.getElementById('search').value = ""
     deleteTask(newTask)
}
 
  function deleteTask(newTask){
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent='delete';
  newTask.appendChild(deleteBtn)
    deleteBtn.addEventListener("click",function(){
    tasklist.removeChild(newTask);
  
    })
   }

   


  
   