/**Importacion de las funciones para generar los nodos del DOM */
import { createButton } from "./common/createButton.js";
import { createElementWithText } from "./common/createElementWithText.js";
/**Importacion de las funciosn de renderizacion necesarias desde el NavBar */
import { Historico } from "./Historico.js";
import { Home } from "./Home.js";
import { NuevoConcurso } from "./NuevoConcurso.js";


/**
 * Funcion que engloba las funciones necesarias para renderizar el NavBar
 * @function
 */
export const NavBar = () => {
  const container = document.querySelector("#container");

  const nav = createElementWithText("nav", "", "color-nav");
  const divMajor = createElementWithText("div", "", "container-fluid");
  const alink = createElementWithText("h1", "QA GAME", "navbar-brand");
  const imgage = createElementWithText(
    "img",
    "",
    "d-inline-block align-text-top"
  );
  imgage.setAttribute("src", "../assets/brain-2750415.png");
  imgage.setAttribute("width", "50");
  imgage.setAttribute("height", "50");
  alink.append(imgage);
  divMajor.append(alink);

  const div2 = createElementWithText("div", "", "");
  div2.setAttribute("id", "navbarNav");

  const divButton1 = createElementWithText("div", "", "container-fluid");

  const buttonHome = createButton("button", "btn btn-light", "HOME");
  buttonHome.addEventListener("click", (e) => {
    container.innerHTML = "";
    NavBar();
    Home();
  });

  divButton1.append(buttonHome);

  const divButton2 = createElementWithText("div", "", "container-fluid");
  const buttonCreateContest = createButton(
    "button",
    "btn btn-secondary",
    "Crear Concurso"
  );
  buttonCreateContest.addEventListener("click", (e) => {
    container.innerHTML = "";
    NavBar();
    NuevoConcurso();
  });
  divButton2.append(buttonCreateContest);

  const divButton3 = createElementWithText("div", "", "container-fluid");
  const buttonHistorico = createButton(
    "button",
    "btn btn-secondary",
    "Historico"
  );
  buttonHistorico.addEventListener("click", (e) => {
    container.innerHTML = "";
    NavBar();
    Historico();
  });
  divButton3.append(buttonHistorico);

  div2.append(divButton1, divButton2, divButton3);
  divMajor.append(div2);

  nav.append(divMajor);

  container.append(nav);
};
