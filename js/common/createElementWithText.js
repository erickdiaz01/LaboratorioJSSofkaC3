/**
 * Crea con facilidad una etiqueta cualquiera, en especial las que usualmente llevan un texto dentro, retorna un nodo de HTML
 * @param {String} etiqueta 
 * @param {String} texto 
 * @param {String} classNamed 
 * @returns 
 */
export function createElementWithText(etiqueta, texto, classNamed) {
    let elemento = document.createElement(etiqueta);
    elemento.textContent = texto;
    elemento.setAttribute("class", classNamed);

    return elemento;
  }