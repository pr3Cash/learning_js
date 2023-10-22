//variables

const addTask = document.getElementById('add-task');
const taskCon = document.getElementById('task-con');
const inputTask = document.getElementById('input-task');

//event listener for add button 

addTask.addEventListener('click',function(){

    let task = document.createElement('div');
    task.classList.add('task');
    
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<b class='fa-solid fa-check'>&#9745</b>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<b class='fa-solid fa-trash-can'>&#x2612</b>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);


    if(inputTask.value === ""){
        alert('please enter a task');
    }else taskCon.appendChild(task)

    inputTask.value = '';

    checkButton.addEventListener('click',function(){

       checkButton.parentElement.style.textDecoration = 'line-through';
    });

    deleteButton.addEventListener('click',function(e){

        let target = e.target;
        
        target.parentElement.parentElement.remove();
    });

    
});