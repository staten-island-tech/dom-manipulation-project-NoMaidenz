const DOMSelectors = {
  form: document.querySelector("#form"),
  inputName: document.querySelector("#input-name"),
  outputContainerNam: document.querySelector("#output-containerNam"),
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

  DOMSelectors.outputContainerNam.appendChild(div);
}

function clearFields() {
  DOMSelectors.inputName.value = "";
}

function removeObject() {
  DOMSelectors.outputContainerNam.lastChild.remove();
}

DOMSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();

  createObject();
});
