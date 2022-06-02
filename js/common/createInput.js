export function createInput(id, name, type, placeholder, list) {
    let containerInput = document.createElement("div");
    containerInput.setAttribute("class", "input-container");

    let inputTemporal = document.createElement("input");

    for (let i = 0; i < arguments.length; i++) {
      if (i == 0) {
        inputTemporal.setAttribute("id", arguments[i]);
      } else if (i == 1) {
        inputTemporal.setAttribute("name", arguments[i]);
      } else if (i == 2) {
        inputTemporal.setAttribute("type", arguments[i]);
      } else if (i == 3) {
        inputTemporal.setAttribute("placeholder", arguments[i]);
      } else {
        inputTemporal.setAttribute("list", arguments[i]);
      }
    }
    inputTemporal.classList.add("regular-style");
    containerInput.append(inputTemporal);
    return containerInput;
  }