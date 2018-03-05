var tasks = ["buy milk", "eat dinner", "nail javascript"];
var todoList = document.getElementById("todo-list");

for (let i = 0; i < tasks.length; i++) {
  createList(tasks[i]);
}

function markAsDone(event) {
  if (event.target.classList.value === "done") {
    event.target.classList.remove("done");
  } else {
    event.target.classList.add("done");
  }
}

function createList(event) {
  var todo = document.createElement("li");
  todo.textContent = event;
  todoList.appendChild(todo);
  todo.addEventListener("click", markAsDone);
}

var form = document.getElementsByTagName("form")[0];
form.addEventListener("keypress", function(event) {
  if (event.charCode === 13) {
    event.preventDefault();
    createList(event.target.value);
  }
});

var btnPressed = document.getElementsByTagName("form")[0];
btnPressed.addEventListener("submit", function(event) {
  event.preventDefault();

  var userInput = form.elements["todo-input"].value;
  if (userInput !== "") {
    createList(userInput);
    form.elements["todo-input"].value = "";
  }
});
