/**
 * Importacion de la funcion para crear nodos HTML con texto
 */
import { createElementWithText } from "./common/createElementWithText.js";
/**
 * Arrow function que contiene las funciones e inicializacion para la renderizacion de la pagina del historico de todos los juegos realizados
 * @function
 */
export const Historico = () => {
  const gamesHistoric = JSON.parse(localStorage.getItem("games"));
/**
 * Funcion que genera todo el DOM necesario para visualizar una tabla con el historico de juegos
 * @function
 */
  function renderizarHistorico() {
    const container = document.querySelector("#container");
    const divMajor = createElementWithText(
      "div",
      "",
      "flex justify-center items-center m-4 border-zinc-900"
    );
    const dataTable = createElementWithText(
      "table",
      "",
      "table table-striped table-hover"
    );
    const tableHeader = document.createElement("thead");
    const tableRowHeaders = document.createElement("tr");
    const userHeader = createElementWithText("th", "Jugador", "");
    const categoryHeader = createElementWithText("th", "Categoria", "");
    const pointsHeader = createElementWithText("th", "Puntaje", "");
    tableRowHeaders.append(userHeader, categoryHeader, pointsHeader);
    tableHeader.append(tableRowHeaders);
    dataTable.append(tableHeader);

    const tableBody = document.createElement("tbody");
    gamesHistoric.forEach((game) => {
      let tregister = createElementWithText("tr", "", "");
      let thNameRegister = createElementWithText("th", game.jugador.name, "");
      let tdCategory = createElementWithText("td", game.concurso, "");
      let tdPoints = createElementWithText("td", game.puntaje, "");
      tregister.append(thNameRegister, tdCategory, tdPoints);
      tableBody.append(tregister);
    });
    dataTable.append(tableBody);
    divMajor.append(dataTable);
    container.append(divMajor);
  }
  renderizarHistorico();
};
