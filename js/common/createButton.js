export function createButton(variant, className, text) {
    let buttonTemporal = document.createElement("button");
    buttonTemporal.setAttribute("class", className);
    buttonTemporal.setAttribute("variant", variant);
    buttonTemporal.textContent = text;
    return buttonTemporal;
  }