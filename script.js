const DOMSelectors = {
  form: document.querySelector("#form"),
  inputName: document.querySelector("#input-name"),
  inputDate: document.querySelector("#input-date"),
  outputContainer: document.querySelector("#output-container"),
};

function createObject() {
  const name = DOMSelectors.inputName.value;
  const date = DOMSelectors.inputDate.value;

  const Object = {
    name,
    date,
  };

  injectIntoDOM(Object);
  ClearFields();
}
function injectIntoDOM(object) {
  const container = document.createElement("div");
  container.classList.add("output-box");

  const div = document.createElement("div");
  div.innerHTML = `
    <p>Name: ${object.name}</p>
    <p>Date: ${object.date}</p>
  `;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    container.remove();
  });

  container.appendChild(div);
  container.appendChild(removeButton);
  DOMSelectors.outputContainer.appendChild(container);
}

function ClearFields() {
  DOMSelectors.inputName.value = "";
  DOMSelectors.inputDate.value = "";
}

function removeObject(button) {
  button.parentElement.remove();
}

DOMSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();
  createObject();
});
