const addButton = document.querySelector("#add-button"),
      textInput = document.querySelector("#text-input"),
      orderInput = document.querySelector("#order-input"),
      todosContainer = document.querySelector("#todos-container");

const todos = [
  { order: 5, text: 'Hello world' },
  { order: 3, text: 'Hello world' },
  { order: 1, text: 'Hello world' },
  { order: 2, text: 'Hello world' },
  { order: 4, text: 'Hello world' },
];

function render() {
  todosContainer.innerHTML = '';

  todos
  .sort((a, b) => a.order - b.order)
  .forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `${todo.order}) ${todo.text}`;
    todosContainer.appendChild(
      todoItem
    );
  });
};
function clearFields() {
  orderInput.value = '';
  textInput.value = '';
}

//initial render
render();

addButton.addEventListener("click", () => {
  if (!orderInput.value.length || !textInput.value.length) return;

  todos.push({
    order: orderInput.value,
    text: textInput.value
  });

  render();
  clearFields();
});