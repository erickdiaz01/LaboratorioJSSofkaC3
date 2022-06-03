
/**
 * Clase Juego, modela la estructura que lleva un juego realizado por algun usuario
 * @class
 */
export class Juego {
    /**
     * Estos parametros son necesarios para generar un nuevo juego y guardarlo en el sistema
     * @param {String} concurso 
     * @param {Usuario} jugador 
     * Por defecto si no se pasa algun argumento para el parametro este es igual a cero
     * @param {number} puntaje 
     */
constructor (concurso,jugador,puntaje=0){
    this.concurso=concurso
    this.jugador=jugador
    this.puntaje=puntaje
    
}
 
}