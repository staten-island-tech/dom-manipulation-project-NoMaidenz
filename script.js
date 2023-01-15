const DOMSelectors = {
  form: document.querySelector("#form"),
  inputName: document.querySelector("#input-name"),
  outputContainerNam: document.querySelector("#output-containerNam"),
  inputDate: document.querySelector("#input-Date"),
  outputContainerDate: document.querySelector("#output-containerDate"),
};
/* Related to name */
function createObject() {
  const name = DOMSelectors.inputName.value;

  const Object = {
    name,
  };

  injectIntoDOM(Object);

  ClearFields();
}

function injectIntoDOM(object) {
  const div = document.createElement("div");

  div.innerHTML = `
    <p>Name: ${object.name}</p>
  `;
  DOMSelectors.outputContainerNam.appendChild(div);
}

function ClearFields() {
  DOMSelectors.inputName.value = "";
}

function removeObject() {
  if (
    DOMSelectors.outputContainerNam.childElementCount > 0 &&
    !DOMSelectors.outputContainerNam.lastChild.classList.contains(
      "remove-button"
    )
  ) {
    DOMSelectors.outputContainerNam.lastChild.remove();
  }
}

/* end of name */

function createObject1() {
  const date = DOMSelectors.inputDate.value;

  const Object1 = {
    date,
  };

  injectIntoDOM1(Object1);
  ClearFields1();
}

function injectIntoDOM1(object1) {
  const div1 = document.createElement("div1");
  div1.innerHTML = `
     <p>Date: ${object1.date}</p>
   `;
  DOMSelectors.outputContainerDate.appendChild(div1);
}

function ClearFields1() {
  DOMSelectors.inputDate.value = "";
}

function removeObject1() {
  if (
    DOMSelectors.outputContainerDate.childElementCount > 0 &&
    !DOMSelectors.outputContainerDate.lastChild.classList.contains(
      "remove-button"
    )
  ) {
    DOMSelectors.outputContainerDate.lastChild.remove();
  }
}

DOMSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();

  createObject();
});
DOMSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();

  createObject1();
});
