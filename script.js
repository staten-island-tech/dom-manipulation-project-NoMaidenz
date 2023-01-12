const DOMSelectors = {
  form: document.querySelector("#form"),
  inputName: document.querySelector("#input-name"),
  outputContainerNam: document.querySelector("#output-containerNam"),
  inputDate: document.querySelector("#input-Date"),
  outputContainerDate: document.querySelector("#output-containerDate"),
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
  D;
}

function removeObject() {
  DOMSelectors.outputContainerNam.lastChild.remove();

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
}
function removeObject1() {
  DOMSelectors.outputContainerDate.lastChild.remove();
}

DOMSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();

  createObject();
  createObject1();
});
