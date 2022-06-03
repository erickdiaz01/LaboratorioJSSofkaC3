/**
 * Facilita la creacion de una etiqueta HTML button basado en bootstrap, ingresando variante,clase y su texto a mostrar
 * @param {String} variant 
 * @param {String} className 
 * @param {String} text 
 * @returns {Object}
 */
export function createButton(variant, className, text) {
    let buttonTemporal = document.createElement("button");
    buttonTemporal.setAttribute("class", className);
    buttonTemporal.setAttribute("variant", variant);
    buttonTemporal.textContent = text;
    return buttonTemporal;
  }