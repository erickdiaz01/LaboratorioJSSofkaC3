export function createElementWithText(etiqueta, texto, classNamed) {
    let elemento = document.createElement(etiqueta);
    elemento.textContent = texto;
    elemento.setAttribute("class", classNamed);

    return elemento;
  }