const boxArray = [
  {
    id: "dsadasdasdsadsa",
    title: "Read book",
    Description: "Huuhdin nom olj unshih",
    Status: "todo",
    Priority: "low",
  },
  {
    id: "qdwqdwq",
    title: "Code",
    Description: "SPOJ 10 bodlogo",
    Status: "todo",
    Priority: "high",
  },
  {
    id: "ewqeqwedsadsadsadsa",
    title: "Sleep",
    Description: "8n tsag untah",
    Status: "todo",
    Priority: "high",
  },
];
// array dahi elementudig niilulj boxnud bolgod todo ruu hiij bga
const render = () => {
  let todoContainerElemenents = "";
  let doneContainerElemenents = "";
  const filteredTodo = boxArray.filter((el, i) => el.Status === "todo");
  const filteredDone = boxArray.filter((el, i) => el.Status === "done");
  filteredTodo.forEach((el, i) => {
    todoContainerElemenents += `<div ondragstart="drag(event)" class="box" draggable="true" id="${el.id}">
        <ul>
          <li>${el.title}</li>
          <li>${el.Description}</li>
          <li>${el.Status}</li>
          <li>${el.Priority}</li>
        </ul>
      </div>
      `;
  });
  filteredDone.forEach((el, i) => {
    doneContainerElemenents += `<div ondragstart="drag(event)" class="box" draggable="true" id="${el.id}">
        <ul>
          <li>${el.title}</li>
          <li>${el.Description}</li>
          <li>${el.Status}</li>
          <li>${el.Priority}</li>
        </ul>
      </div>
      `;
  });
  document.getElementById("todo").innerHTML = todoContainerElemenents;
  document.getElementById("done").innerHTML = doneContainerElemenents;
};
render();
//todo nemeh
const addTodo = () => {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;
  console.log(Math.random());
  const inputObj = {
    id: Math.random().toString(),
    title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  render();
};
//modal il gargah
const show = () => {
  document.getElementsByClassName("modalContainer")[0].classList.add("show");
};
//modal nuuh
const hide = () => {
  document.getElementsByClassName("modalContainer")[0].classList.remove("show");
};
//drag drop ajildag bolgoh
const allowDrop = (event) => {
  event.preventDefault();
};
const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};
const drop = (event) => {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  const filteredTodo = boxArray.filter((el, i) => el.id === boxId);
  filteredTodo[0].Status = event.target.id;
  render();
};
//edit function implement
const edit = () => {};
//modal gadna tald darahad nuugdah   ======> zasah shaardlagatai
const modalContainer = document.getElementsByClassName("modalContainer")[0];
window.onclick = function (event) {
  if (event.target == modalContainer) {
    //
    console.log(event.target, "=====", modalContainer);
    modalContainer.classList.remove("show");
  }
};
dd 