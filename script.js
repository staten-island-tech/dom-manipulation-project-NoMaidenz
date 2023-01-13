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

  const newObject = {
    name,
  };

  injectIntoDOM(newObject);

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
  DOMSelectors.outputContainerNam.lastChild.remove();
}

/* end of name */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function createObject1() {
  const date = DOMSelectors.inputDate.value;

  const oldObject = {
    date,
  };

  injectIntoDOM(oldObject);

  ClearFields1();
}

function injectIntoDOM(object1) {
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
  DOMSelectors.outputContainerDate.lastChild.remove();
}
/* Start of date */
/*
function createObject1() {
  const date = DOMSelectors.inputDate.value;

  const OldObject = {
    date,
  };

  injectIntoDOM(OldObject);

  clearFields1();
}

function injectIntoDom(object1) {
  const div1 = document.createElement("div1");
  div1.innerHTML = `
   <p>Date: ${object1.date}</p>
  `;
  DOMSelectors.outputContainerDate.appendChild(div1);
}

function clearFields1() {
  DOMSelectors.inputDate.value = "";
}

function removeObject1() {
  DOMSelectors.outputContainerDate.lastChild.remove();
}
*/
/* end of date */

DOMSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();

  createObject();
  createObject1();
});
