let todoList =[];
displayItems();



function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item:todoItem, dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
  
}

function displayItems(){
  let containerElement = document.querySelector('.todoContainer');
    let newHtml = '';
  for(let i = 0; i<todoList.length;i++){
    newHtml += `
    
    <span>${todoList[i].item}</span>
    <span>${todoList[i].dueDate}</span>
    <button class ="delete_button" onClick = "todoList.splice(${i},1);displayItems();">Delete</button>    
    
    
    `;
  }
  containerElement.innerHTML = newHtml;
}