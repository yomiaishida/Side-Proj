const inputBox = document.getElementById("task");
const addTaskBtn = document.getElementById("add-task");
const outputContainer = document.querySelector(".output-container");

function getInputText() {
  let inputValue = inputBox.value;
  if (inputValue === "") {
    alert("Please add a task");
  } else {
    const divEl = document.createElement("div");
    divEl.className = "output";
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`${inputValue}`));
    const b = document.createElement("button");
    b.className = "delete";
    b.appendChild(document.createTextNode("delete"));

    divEl.appendChild(p);
    divEl.appendChild(b);
    outputContainer.appendChild(divEl);
    inputBox.value = "";
  }
}

addTaskBtn.addEventListener("click", getInputText);
