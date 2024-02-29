const boards = document.querySelectorAll(".board");

const todoEl = document.querySelector("#todo");
const inProgressEl = document.querySelector("#inProgress");
const stuckEl = document.querySelector("#stuck");
const doneEl = document.querySelector("#done");

const addBtn = document.getElementsByClassName("add-btn")[0];
const newTodo = document.getElementById("todo");

let mocData = [
  {
    id: "moc",
    status: "todo",
    title: "Todo",
    priority: "High",
    description: "This is a todo card",
  },
  {
    id: "moc",
    status: "inprogress",
    title: "Todo",
    priority: "High",
    description: "This is a todo card",
  },
];

let boxArray = [];

const render = () => {
  let todoContainerElemenents = "";
  let inProgressContainerElements = "";
  let stuckContainerElements = "";
  let doneContainerElemenents = "";
  const filteredTodo = boxArray.filter((el, i) => el.status === "todo");
  const filteredInProgress = boxArray.filter(
    (el, i) => el.status === "inProgress"
  );
  const filteredStuck = boxArray.filter((el, i) => el.status === "stuck");
  const filteredDone = boxArray.filter((el, i) => el.status === "done");

  filteredTodo.forEach((el, i) => {
    todoContainerElemenents += `<div class="card" draggable="true" ondragstart="drag(event)" id="${el.id}">

      <div class="done-btn">
        <i class="fa-solid fa-check" id="done-i"></i>
      </div>
      <div class="input">

        <h4>${el.title}</h4>
        <p>${el.description}</p>
        <div>${el.status}</div>
        <div>${el.priority}</div>
      
      </div>
      <div class="action-btn">
        <i class="fa-solid fa-xmark" id="remove-i"></i>
        <i class="fa-solid fa-pen-to-square" id="edit-i"></i>
      </div>

    </div>
    `;
  });
  filteredInProgress.forEach((el, i) => {
    inProgressContainerElements += `<div class="card" draggable="true" ondragstart="drag(event)" id="${el.id}">

      <div class="done-btn">
        <i class="fa-solid fa-check" id="done-i"></i>
      </div>
      <div class="input">

        <h4>${el.title}</h4>
        <p>${el.description}</p>
        <div>${el.status}</div>
        <div>${el.priority}</div>
      
      </div>
      <div class="action-btn">
        <i class="fa-solid fa-xmark" id="remove-i"></i>
        <i class="fa-solid fa-pen-to-square" id="edit-i"></i>
      </div>

    </div>
    `;
  });
  filteredStuck.forEach((el, i) => {
    stuckContainerElements += `<div class="card" draggable="true" ondragstart="drag(event)" id="${el.id}">

      <div class="done-btn">
        <i class="fa-solid fa-check" id="done-i"></i>
      </div>
      <div class="input">

        <h4>${el.title}</h4>
        <p>${el.description}</p>
        <div>${el.status}</div>
        <div>${el.priority}</div>
      
      </div>
      <div class="action-btn">
        <i class="fa-solid fa-xmark" id="remove-i"></i>
        <i class="fa-solid fa-pen-to-square" id="edit-i"></i>
      </div>

    </div>
    `;
  });
  filteredDone.forEach((el, i) => {
    doneContainerElemenents += `<div class="card" draggable="true" ondragstart="drag(event)" id="${el.id}">

      <div class="done-btn">
        <i class="fa-solid fa-check" id="done-i"></i>
      </div>
      <div class="input">

        <h4>${el.title}</h4>
        <p>${el.description}</p>
        <div>${el.status}</div>
        <div>${el.priority}</div>
      
      </div>
      <div class="action-btn">
        <i class="fa-solid fa-xmark" id="remove-i"></i>
        <i class="fa-solid fa-pen-to-square" id="edit-i"></i>
      </div>

    </div>
    `;
  });
  document.getElementById("todo").innerHTML = todoContainerElemenents;
  document.getElementById("inProgress").innerHTML = inProgressContainerElements;
  document.getElementById("stuck").innerHTML = stuckContainerElements;
  document.getElementById("done").innerHTML = doneContainerElemenents;
};
render();

const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-select").value;
  const priorityInputValue = document.getElementById("priority-select").value;
  const inputObj = {
    title: titleInputValue,
    description: descriptionInputValue,
    status: statusInputValue,
    priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  render();
};

const show = () => {
  console.log(document.getElementsByClassName("modalContainer")[0].classList);
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};

const hide = () => {
  document.getElementsByClassName("modalContainer")[0].classList.remove("show");
};

const allowDrop = (event) => {
  event.preventDefault();
};

const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};

const drop = (event) => {
  event.preventDefault();
  const cardsId = event.dataTransfer.getData("text");
  // event.target.appendChild(document.getElementById(cardsId));
  const draggedElement = document.getElementById(cardsId);
  const target = event.target.closest(".board");
  if (target) {
    const newStatus = target.querySelector(".header").textContent.trim();
    const taskId = parseInt(draggedElement.id);
    const foundTask = boxArray.find((task) => task.id === taskId);
    if (foundTask) {
      foundTask.status = newStatus;
    }
  }
  // const filteredTodo = boxArray.filter((el, i) => el.id === cardsId);
  // filteredTodo[0].Status = event.target.id;
  render();
  console.log(event);
};

// addBtn.addEventListener("click", () => {
//   if (newTodo.nodeValue != "") {
//     todo.push(newTodo.value);
//     console.log(todo);
//   }
// });
