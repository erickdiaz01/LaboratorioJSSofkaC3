//Clases de objetos a guardar
import { Juego } from "./classes/Juego.js";
import { Usuario } from "./classes/Usuario.js";
 //Funcion que crea los elementos HTML
import { createElementWithText } from "./common/createElementWithText.js";
import { createInput } from "./common/createInput.js";
import { createButton } from "./common/createButton.js";
export const Home = () => {
 



  //
   function handleForm() {
    console.log("first");
    const user = document.querySelector("#user");
    const category = document.querySelector("#category");

    if (user.value === "") {
      user.setAttribute("class", "input-error");
      alert("Ingrese un nombre de usuario");
      return false;
    } else {
      user.setAttribute("class", "regular-style");
    }
    if (category.value === "") {
      category.setAttribute("class", "input-error");
      alert("Ingrese una categoria valida");
      return false;
    } else {
      category.setAttribute("class", "regular-style");
    }
    return true;
  }

  function createItemGame(category, user) {
    const newUser = new Usuario(user);
    const newGame = new Juego(category, newUser);
    return newGame;
  }

  function handleIniciarJuego() {
    console.log("first");
    const checkForm = handleForm();
    if (checkForm) {
      let arrayCategories = JSON.parse(localStorage.getItem("categories"));
      let arrayGames = JSON.parse(localStorage.getItem("games"));
      const user = document.querySelector("#user");
      const category = document.querySelector("#category");
      if (arrayCategories === null) {
        arrayCategories = [];
        return alert(
          "No hay categorias de juegos disponibles, por favor cree un nuevo concurso para continuar"
        );
      }
      const newGame = createItemGame(category.value, user.value);
      arrayGames.push(newGame);
      localStorage.setItem("games", JSON.stringify(arrayGames));
    }
  }

  //Generacion del DOM mediante JS

  const container = document.querySelector("#container");

  const divMajor = createElementWithText("div", "", "containerHome");

  const titleWelcome = createElementWithText(
    "h1",
    "Bienvenido a 'THE Q-A GAME'",
    "flex justify-center intems center mt-4 text-2x1"
  );
  const titleInputTheInfo = createElementWithText(
    "h3",
    "Ingresa la información para empezar a jugar!",
    "flex justify-center intems center mt-4 text-2xl "
  );
  const section1 = createElementWithText("section", "", "justify-center m-4");
  const label1 = createElementWithText("label", "Nombre o UserGame");
  label1.setAttribute("for", "user");
  const inputName = createInput(
    "user",
    "user",
    "text",
    "Ingrese su nombre o un UserGame"
  );
  section1.append(label1, inputName);

  const section2 = createElementWithText("form", "", "justify-center m-4");
  section2.setAttribute("id", "formularioIniciarJuego");
  const label2 = createElementWithText("label", "Categoria de las preguntas");
  label2.setAttribute("for", "category");
  const divSelect = createElementWithText("div", "", "input-container");
  const selectCategory = document.createElement("select");
  selectCategory.classList.add("regular-style");
  selectCategory.setAttribute("required", "");
  selectCategory.setAttribute("id", "category");
  selectCategory.setAttribute("name", "category");
  //Aqui se tiene que generar las opciones mediante un fetch o un consumo de localStorage para el select, junto con su "value"

  divSelect.append(selectCategory);
  section2.append(label2, divSelect);

  const section3 = createElementWithText(
    "section",
    "",
    "flex justify-center intems center mt-4 p-4 text-2x1"
  );
  const buttonPlay = createButton("dark", "btn btn-dark", "A Jugar!");
  buttonPlay.setAttribute("id", "buttonPlay");
  buttonPlay.addEventListener('click', (e) => {
    e.preventDefault();
    handleIniciarJuego();
  });
  section3.append(buttonPlay);
  section2.append(section3);

  divMajor.append(
    titleWelcome,
    titleInputTheInfo,
    section1,
    section2
    
  );
  container.append(divMajor);
};
