//Adding event listner
const element = document.getElementById("description");
element.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
    addTodo();
    }
});

let globalId = 1;
let todoState = [];
let oldTodoState = [];

function deleteTodo(event){
    const delId = event.target.parentElement.id;
    let toDel = todoState.findIndex(todo => todo.id === Number(delId));
    todoState.splice(toDel,1);
    updateState(todoState)
}

function createChild(todo){
    const child = document.createElement("div");
    const title = document.createElement("div");
    //adding title class to tap during update
    title.setAttribute("class","title");
    const description = document.createElement("div");
    description.setAttribute("class","description");
    const updateButton = document.createElement("button");
    updateButton.setAttribute("class","update");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","delete");
    title.innerHTML = todo.title;
    description.innerHTML = todo.description;
    updateButton.innerHTML = "Update";
    deleteButton.innerHTML = "Delete";
     //add event listner to deleteButton
     deleteButton.addEventListener("click",deleteTodo);
    child.appendChild(title);
    child.appendChild(description);
    child.appendChild(document.createElement("br"));
    child.appendChild(updateButton);
    child.appendChild(deleteButton);
    child.appendChild(document.createElement("br"));
    child.appendChild(document.createElement("br"));
    child.setAttribute("id",todo.id);
    return child;
}

function addTodoToDom(todo) {
    const parent = document.getElementById("container");
    parent.appendChild(createChild(todo));
}

function removeTodoFromDom(todo) {
    document.getElementById(todo.id).innerHTML = "";
}

function updateTodoInDom(newTodo) {
    
}

function updateState(newTodos) {
    const added = [];
    const deleted = [];
    const updated = [];
    for(let todo of newTodos){
    let toAdd = oldTodoState.findIndex(oldTodo => oldTodo.id === todo.id);
    if(toAdd === -1){
        added.push(todo);
    }
    else if(oldTodoState[toAdd].title !== todo.title)
        updated.push(todo);
    }
    for(let todo of oldTodoState){
    let toDel = newTodos.findIndex(newTodo => newTodo.id === todo.id);
    if(toDel === -1)
        deleted.push(todo);
    }

    for(let todo of added){
    addTodoToDom(todo);
    }
    for(let todo of deleted){
    removeTodoFromDom(todo);
    }
    for(let todo of updated){
    updateTodoInDom(todo);
    }
    //oldTodoState = [...newTodos]; shallow copy won't work
    oldTodoState = JSON.parse(JSON.stringify(newTodos));
}

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  todoState.push({
    title: title,
    description: description,
    id: globalId++,
  })
  updateState(todoState);
}