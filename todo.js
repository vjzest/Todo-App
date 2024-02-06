let todoList = [
  {
    item: "Try this App",
    dueDate: "29/01/24",
  },
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = ""; // Fixed the duplicate line
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="deleteTodoItem(${i}); displayItems();">Delete</button>
      
    `;
  }

  containerElement.innerHTML = newHtml; // Moved this line outside the loop
}

function deleteTodoItem(index) {
  todoList.splice(index, 1);
}
