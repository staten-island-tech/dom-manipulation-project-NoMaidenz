const DOMSelectors = {
  form: document.querySelector("#form"),
  inputName: document.querySelector("#input-name"),
  outputContainerName: document.querySelector("#output-containerName"),
};

function createObject() {
  const name = DOMSelectors.inputName.value;

  const newObject = {
    name,
  };

  injectIntoDOM(newObject);

  clearFields();
}

function injectIntoDOM(object) {
  const div = document.createElement("div");

  div.innerHTML = `
    <p>Name: ${object.name}</p>
  `;

  DOMSelectors.outputContainerName.appendChild(div);
}

function clearFields() {
  DOMSelectors.inputName.value = "";
}

function removeObject() {
  DOMSelectors.outputContainerName.lastChild.remove();
}

DOMSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();

  createObject();
});
