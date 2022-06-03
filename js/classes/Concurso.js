/**
 * Clase que modela la estructura de cada concurso nuevo que se va a guardar
 * @class
 * 
 */


export class Concurso {
  /**
   * Parametros necesarios para crear un concurso nuevo, la categoria diferencia a un concurso de los otros facilmente y cada nivel del concurso consta de 5 preguntas diferentes
   * @param {String} category 
   * @param {Array} nivel1 
   * @param {Array} nivel2 
   * @param {Array} nivel3 
   * @param {Array} nivel4 
   * @param {Array} nivel5 
   * 
   */
  constructor(category, nivel1, nivel2, nivel3, nivel4, nivel5) {
    this.category = category;
    this.nivel1 = nivel1;
    this.nivel2 = nivel2;
    this.nivel3 = nivel3;
    this.nivel4 = nivel4;
    this.nivel5 = nivel5;
  }
}
