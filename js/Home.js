export const Home = () => {
  

  //Funcion que crea los elementos HTML

  function createElementWithText(etiqueta, texto, classNamed) {
    let elemento = document.createElement(etiqueta);
    elemento.textContent = texto;
    elemento.setAttribute("class", classNamed);

    return elemento;
  }

  function createInput(id, name, type, placeholder, list) {
    let containerInput = document.createElement("div");
    containerInput.setAttribute("class", "input-container");

    let inputTemporal = document.createElement("input");

    for (let i = 0; i < arguments.length; i++) {
      if (i == 0) {
        inputTemporal.setAttribute("id", arguments[i]);
      } else if (i == 1) {
        inputTemporal.setAttribute("name", arguments[i]);
      } else if (i == 2) {
        inputTemporal.setAttribute("type", arguments[i]);
      } else if (i == 3) {
        inputTemporal.setAttribute("placeholder", arguments[i]);
      } else {
        inputTemporal.setAttribute("list", arguments[i]);
      }
    }
    inputTemporal.classList.add("regular-style");
    containerInput.append(inputTemporal);
    return containerInput;
  }

  function createButton(variant, className, text) {
    let buttonTemporal = document.createElement("button");
    buttonTemporal.setAttribute("class",className);
    buttonTemporal.setAttribute("variant", variant);
    buttonTemporal.textContent = text;
    return buttonTemporal;
  }


//Generacion del DOM mediante JS

const container = document.querySelector("#container");

const divMajor= createElementWithText("div","","containerHome")

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

  const section2 = createElementWithText("section", "", "justify-center m-4");
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
  buttonPlay.setAttribute("id","buttonPlay")
  section3.append(buttonPlay);

  divMajor.append(titleWelcome,titleInputTheInfo,section1,section2,section3)
  container.append(divMajor);
};
