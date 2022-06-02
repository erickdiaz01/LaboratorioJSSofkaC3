import { createButton } from "./common/createButton.js";
import { createElementWithText } from "./common/createElementWithText.js";

import { Juego } from "./classes/Juego.js";
export const JuegoNuevo = () => {
  let juegos = JSON.parse(localStorage.getItem("games"));
  let game = juegos[juegos.length - 1];
  console.log(game);
  let contests = JSON.parse(localStorage.getItem("contest"));
  let contestReady = contests.find(
    (contest) => contest.category == game.concurso
  );
  let gameFin = false;
  let points = 0;
  let gameGanado = false;
  let level = 1;

  let rand = 0;

  function randNum(rand) {
    rand = Math.floor(Math.random() * 4);
    return rand;
  }
  function handleIncorrect() {
    alert("Respuesta incorrecta, has perdido");
    let gameUpdate = juegos.pop();
    gameFin = true;
    points = 0;
    let newGame = new Juego(
      gameUpdate.concurso,
      gameUpdate.jugador.name,
      points
    );
    juegos.push(newGame);
    localStorage.setItem("games", JSON.stringify(juegos));
    renderizarJuego();
  }

  function handleCorrect() {
    if (level < 5) {
      level += 1;
      points += 100;
      renderizarJuego();
    } else {
      points+=100
      alert("Felicidades, has ganado el concurso!");
      gameGanado = true;
      let gameUpdate = juegos.pop();
      let newGame = new Juego(
        gameUpdate.concurso,
        gameUpdate.jugador.name,
        points
      );
      juegos.push(newGame);
      localStorage.setItem("games", JSON.stringify(juegos));
      renderizarJuego();
    }
  }

  function handleRetirar() {
    alert("Gracias por participar");
    let gameUpdate = juegos.pop();
    let newGame = new Juego(
      gameUpdate.concurso,
      gameUpdate.jugador.name,
      points
    );
    juegos.push(newGame);
    localStorage.setItem("games", JSON.stringify(juegos));
    gameFin=true;
    renderizarJuego();
  }

  //Generacion del DOM
  function renderizarJuego() {
    if (contestReady) {
      const container = document.querySelector("#container");
      container.innerHTML = "";
      const div1 = createElementWithText(
        "div",
        "",
        "row flex justify-center items -center"
      );
      const titlePoints = createElementWithText(
        "h2",
        "PUNTAJE: " + points,
        "flex justify-center items -center mt-4 text-2xl"
      );
      const titleLevel = createElementWithText(
        "h1",
        "Nivel " + level,
        "flex justify-center items-center text-2xl"
      );
      div1.append(titlePoints, titleLevel);
      container.append(div1);
      if (!gameFin&&!gameGanado) {
        switch (level) {
          case 1:
            let numRand1 = randNum();
            console.log(numRand1);
            const divMajor1 = createElementWithText(
              "div",
              "",
              "flex justify-center items-center h-screen"
            );
            const div21 = createElementWithText(
              "div",
              "",
              "bg-white text-black-800 p-10 rounded-lg shadow-md"
            );
            const titleQuestion1 = createElementWithText(
              "h2",
              contestReady.nivel1[numRand1].pregunta,
              "text-2xl"
            );
            div21.append(titleQuestion1);
            const div31 = createElementWithText(
              "div",
              "",
              "flex flex-wrap mt-4 justify-around"
            );
            contestReady.nivel1[numRand1].respuestasIncorrectas.forEach(
              (Inc) => {
                let buttonInc = createButton(
                  "",
                  "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
                  Inc
                );
                buttonInc.addEventListener("click", (e) => {
                  e.preventDefault();
                  handleIncorrect();
                });
                div31.append(buttonInc);
              }
            );
            const buttonCorr1 = createButton(
              "",
              "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
              contestReady.nivel1[numRand1].respuestaCorrecta
            );
            buttonCorr1.addEventListener("click", (e) => {
              e.preventDefault();
              handleCorrect();
            });
            div31.append(buttonCorr1);
            divMajor1.append(div21, div31);
            container.append(divMajor1);
            break;
          case 2:
            let numRand2 = randNum();
            const divMajor2 = createElementWithText(
              "div",
              "",
              "flex justify-center items-center h-screen"
            );
            const div22 = createElementWithText(
              "div",
              "",
              "bg-white text-black-800 p-10 rounded-lg shadow-md"
            );
            const titleQuestion2 = createElementWithText(
              "h2",
              contestReady.nivel1[numRand2].pregunta,
              "text-2xl"
            );
            div22.append(titleQuestion2);
            const div32 = createElementWithText(
              "div",
              "",
              "flex flex-wrap mt-4 justify-around"
            );
            contestReady.nivel1[numRand2].respuestasIncorrectas.forEach(
              (Inc) => {
                let buttonInc = createButton(
                  "",
                  "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
                  Inc
                );
                buttonInc.addEventListener("click", (e) => {
                  e.preventDefault();
                  handleIncorrect();
                });
                div32.append(buttonInc);
              }
            );
            const buttonCorr2 = createButton(
              "",
              "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
              contestReady.nivel1[numRand2].respuestaCorrecta
            );
            buttonCorr2.addEventListener("click", (e) => {
              e.preventDefault();
              handleCorrect();
            });
            div32.append(buttonCorr2);
            divMajor2.append(div22, div32);
            container.append(divMajor2);
            break;

          case 3:
            let numRand3 = randNum();
            const divMajor3 = createElementWithText(
              "div",
              "",
              "flex justify-center items-center h-screen"
            );
            const div23 = createElementWithText(
              "div",
              "",
              "bg-white text-black-800 p-10 rounded-lg shadow-md"
            );
            const titleQuestion3 = createElementWithText(
              "h2",
              contestReady.nivel1[numRand3].pregunta,
              "text-2xl"
            );
            div23.append(titleQuestion3);
            const div33 = createElementWithText(
              "div",
              "",
              "flex flex-wrap mt-4 justify-around"
            );
            contestReady.nivel1[numRand3].respuestasIncorrectas.forEach(
              (Inc) => {
                let buttonInc = createButton(
                  "",
                  "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
                  Inc
                );
                buttonInc.addEventListener("click", (e) => {
                  e.preventDefault();
                  handleIncorrect();
                });
                div33.append(buttonInc);
              }
            );
            const buttonCorr3 = createButton(
              "",
              "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
              contestReady.nivel1[numRand3].respuestaCorrecta
            );
            buttonCorr3.addEventListener("click", (e) => {
              e.preventDefault();
              handleCorrect();
            });
            div33.append(buttonCorr3);
            divMajor3.append(div23, div33);
            container.append(divMajor3);
            break;

          case 4:
            let numRand4 = randNum();
            const divMajor4 = createElementWithText(
              "div",
              "",
              "flex justify-center items-center h-screen"
            );
            const div24 = createElementWithText(
              "div",
              "",
              "bg-white text-black-800 p-10 rounded-lg shadow-md"
            );
            const titleQuestion4 = createElementWithText(
              "h2",
              contestReady.nivel1[numRand4].pregunta,
              "text-2xl"
            );
            div24.append(titleQuestion4);
            const div34 = createElementWithText(
              "div",
              "",
              "flex flex-wrap mt-4 justify-around"
            );
            contestReady.nivel1[numRand4].respuestasIncorrectas.forEach(
              (Inc) => {
                let buttonInc = createButton(
                  "",
                  "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
                  Inc
                );
                buttonInc.addEventListener("click", (e) => {
                  e.preventDefault();
                  handleIncorrect();
                });
                div34.append(buttonInc);
              }
            );
            const buttonCorr4 = createButton(
              "",
              "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
              contestReady.nivel1[numRand4].respuestaCorrecta
            );
            buttonCorr4.addEventListener("click", (e) => {
              e.preventDefault();
              handleCorrect();
            });
            div34.append(buttonCorr4);
            divMajor4.append(div24, div34);
            container.append(divMajor4);
            break;
          case 5:
            let numRand5 = randNum();
            const divMajor5 = createElementWithText(
              "div",
              "",
              "flex justify-center items-center h-screen"
            );
            const div25 = createElementWithText(
              "div",
              "",
              "bg-white text-black-800 p-10 rounded-lg shadow-md"
            );
            const titleQuestion5 = createElementWithText(
              "h2",
              contestReady.nivel1[numRand5].pregunta,
              "text-2xl"
            );
            div25.append(titleQuestion5);
            const div35 = createElementWithText(
              "div",
              "",
              "flex flex-wrap mt-4 justify-around"
            );
            contestReady.nivel1[numRand5].respuestasIncorrectas.forEach(
              (Inc) => {
                let buttonInc = createButton(
                  "",
                  "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
                  Inc
                );
                buttonInc.addEventListener("click", (e) => {
                  e.preventDefault();
                  handleIncorrect();
                });
                div35.append(buttonInc);
              }
            );
            const buttonCorr5 = createButton(
              "",
              "bg-white w-5/12 p-4 text-black-800 font-semibold rounded shadow mb-4",
              contestReady.nivel1[numRand5].respuestaCorrecta
            );
            buttonCorr5.addEventListener("click", (e) => {
              e.preventDefault();
              handleCorrect();
            });
            div35.append(buttonCorr5);
            divMajor5.append(div25, div35);
            container.append(divMajor5);
            break;

          default:
            break;
        }
      } else if (gameGanado) {
        let divMajorGanado = createElementWithText(
          "div",
          "",
          "flex justify-center items-center h-screen"
        );
        let divGameGanado = createElementWithText(
          "div",
          "",
          "bg-white text-green-800 p-10 rounded-lg shadow-md"
        );
        let titleGameGanado = createElementWithText(
          "h2",
          "FELICITACIONES, HAS GANADO!",
          "text-2xl"
        );
        let titleCatPoint = createElementWithText(
          "h1",
          "CATEGORIA: " + game.concurso + "\n" + "PUNTAJE: " + points
        );
        divGameGanado.append(titleGameGanado, titleCatPoint);
        divMajorGanado.append(divGameGanado);
        container.append(divMajorGanado);
      } else if (gameFin) {
        let divGameFinMajor = createElementWithText(
          "div",
          "",
          "flex justify-center items-center h-screen"
        );

        let divGameFin = createElementWithText(
          "div",
          "",
          "bg-white text-red-800 p-10 rounded-lg shadow-md"
        );
        let titleGameFin = createElementWithText(
          "h2",
          "JUEGO TERMINADO, GRACIAS POR PARTICIPAR",
          "text-2xl"
        );
        let titleCatPointFin = createElementWithText(
          "h1",
          "CATEGORIA: " + game.concurso + "\n" + "PUNTAJE: " + points,
          ""
         
        );

        divGameFin.append(titleGameFin, titleCatPointFin);
        divGameFinMajor.append(divGameFin);
        container.append(divGameFinMajor);
      }

      const divRetirar = createElementWithText("div", "", "flex justify-center intems center mt-4 p-4 text-2x1");
      const buttonRetirar = createButton(
        "danger",
        "btn btn-danger",
        "RETIRARSE"
      );
      buttonRetirar.addEventListener("click",e=>{
        e.preventDefault();
        handleRetirar();
      })
      divRetirar.append(buttonRetirar);
      container.append(divRetirar);
    }
  }
  renderizarJuego();
};
