//Funcion que crea los elementos HTML
import { createElementWithText } from "./common/createElementWithText.js";
import { createInput } from "./common/createInput.js";
import { createButton } from "./common/createButton.js";
import { Concurso } from "./classes/Concurso.js";

export const NuevoConcurso = () => {
  //variables globales
  let indiceNivel = 0;
  let indicePregunta = 0;
  let nivel1 = [];
  let nivel2 = [];
  let nivel3 = [];
  let nivel4 = [];
  let nivel5 = [];
  let siguiente = true;
  let inicio = true;
  let category = "";
  let question = "";
  let respInc1 = "";
  let respInc2 = "";
  let respInc3 = "";
  let respCorr = "";

  //Funciones para manejar el DOM

  function handleCategory() {
    try {
      let arrayCategories = JSON.parse(localStorage.getItem("categories"));
      let categoryHandle = document.querySelector("#category");

      if (arrayCategories === null) {
        arrayCategories = [];
      }
      if (categoryHandle.value === "") {
        categoryHandle.setAttribute("class", "input-error");
        return alert("Ingrese una categoria");
      }
      let contestByCategory = arrayCategories.find(
        (contest) => contest.category === categoryHandle.value
      );
      if (contestByCategory) {
        return alert("Ya existe un concurso con dicha categoria");
      }
      arrayCategories.push(categoryHandle.value);
      localStorage.setItem("categories", JSON.stringify(arrayCategories));
      category = categoryHandle.value;
      console.log(category);
      inicio = false;
      renderizacionPreguntas(0, 0);
    } catch (error) {
      console.log(error);
    }
  }
  function handleFormQuestionary() {
    let inputs = [
      document.querySelector("#question"),
      document.querySelector("#answerInc1"),
      document.querySelector("#answerInc2"),
      document.querySelector("#answerInc3"),
      document.querySelector("#answerCorr"),
    ];

    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      if (element.value === "") {
        element.setAttribute("class", "input-error");
        alert("Ingrese la respuesta");
        return false;
      } else {
        element.setAttribute("class", "regular-style");
      }
    }
    question = inputs[0].value;
    respInc1 = inputs[1].value;
    respInc2 = inputs[2].value;
    respInc3 = inputs[3].value;
    respCorr = inputs[4].value;
    return true;
  }
  function handleSiguiente() {
    const checkFormQuestion = handleFormQuestionary();
    if (checkFormQuestion) {
      switch (indiceNivel) {
        case 0:
          nivel1.push({
            pregunta: question,
            respuestaCorrecta: respCorr,
            respuestasIncorrectas: [respInc1, respInc2, respInc3],
          });

          break;

        case 1:
          nivel2.push({
            pregunta: question,
            respuestaCorrecta: respCorr,
            respuestasIncorrectas: [respInc1, respInc2, respInc3],
          });

          break;

        case 2:
          nivel3.push({
            pregunta: question,
            respuestaCorrecta: respCorr,
            respuestasIncorrectas: [respInc1, respInc2, respInc3],
          });
          break;
        case 3:
          nivel4.push({
            pregunta: question,
            respuestaCorrecta: respCorr,
            respuestasIncorrectas: [respInc1, respInc2, respInc3],
          });
          break;
        case 4:
          nivel5.push({
            pregunta: question,
            respuestaCorrecta: respCorr,
            respuestasIncorrectas: [respInc1, respInc2, respInc3],
          });
          break;

        default:
          console.log("terminado");
      }
      //CAMBIAR LOS LIMITES A 4
      if (indicePregunta < 1) {
        indicePregunta += 1;
        question = "";
        respInc1 = "";
        respInc2 = "";
        respInc3 = "";
        respCorr = "";

        renderizacionPreguntas(indiceNivel, indicePregunta);
      } else {
        //CAMBIAR LOS LIMITES A 4
        if (indiceNivel < 1) {
          indicePregunta = 0;
          indiceNivel += 1;
          renderizacionPreguntas(indiceNivel, indicePregunta);
        } else {
          siguiente = false;
          renderFinalPartCategory();
        }
      }

      console.log(nivel1);
      console.log(nivel2);
      console.log(nivel3);
      console.log(nivel4);
      console.log(nivel5);
      console.log(indicePregunta);
      console.log(indiceNivel);

      //Falta resetear los valores, cambiar el tipo del div a form
    } else {
      return alert("Ingrese la información");
    }
  }

  function handleSaveContest(){
    let arrayContest = JSON.parse(localStorage.getItem("contest"));
    const newContest = new Concurso(category,nivel1,nivel2,nivel3,nivel4,nivel5) 
    if(arrayContest===null){
      arrayContest=[]
    }
    arrayContest.push(newContest);
    localStorage.setItem("contest", JSON.stringify(arrayContest));

  }

  //Generacion del DOM mediante JS

  function renderizacionPreguntas(indiceNivel, indicePregunta) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const sectionMajor = createElementWithText(
      "section",
      "",
      "containerNuevoConcurso"
    );

    const titleNewContest = createElementWithText(
      "h2",
      "Nuevo concurso " + category,
      "flex justify-center items-center text-2xl"
    );
    const titleNivel = createElementWithText(
      "h3",
      "Nivel " +
        //to do Falta poner el indice de nivel bajo la logica de renderizacion condicional
        indiceNivel,
      "flex justify-center items-center text-2xl"
    );
    const question = createElementWithText(
      "h4",
      "Pregunta " + indicePregunta,
      "flex justify-center items-center text-xl"
    );
    const div1 = createElementWithText("div", "", "row ml-4 mr-4");
    const labelQuestion = createElementWithText("label", "Ingrese la pregunta");
    const inputQuestion = createInput(
      "question",
      "question",
      "text",
      "Ingrese la pregunta"
    );
    div1.append(labelQuestion, inputQuestion);

    const div2 = createElementWithText("div", "", "row ml-4 mr-4");
    const subDiv1 = createElementWithText("div", "", "col-md-6");
    const labelAnswerInc1 = createElementWithText(
      "label",
      "Ingrese una opcion de respuesta incorrecta"
    );
    const inputAnswerInc1 = createInput(
      "answerInc1",
      "answerInc1",
      "text",
      "Ingrese la opción"
    );
    subDiv1.append(labelAnswerInc1, inputAnswerInc1);

    const subDiv2 = createElementWithText("div", "", "col-md-6");
    const labelAnswerInc2 = createElementWithText(
      "label",
      "Ingrese una opcion de respuesta incorrecta"
    );
    const inputAnswerInc2 = createInput(
      "answerInc2",
      "answerInc2",
      "text",
      "Ingrese la opción"
    );
    subDiv2.append(labelAnswerInc2, inputAnswerInc2);

    div2.append(subDiv1, subDiv2);

    const div3 = createElementWithText("div", "", "row ml-4 mr-4");

    const subDiv3 = createElementWithText("div", "", "col-md-6");
    const labelAnswerInc3 = createElementWithText(
      "label",
      "Ingrese una opcion de respuesta incorrecta"
    );
    const inputAnswerInc3 = createInput(
      "answerInc3",
      "answerInc3",
      "text",
      "Ingrese la opción"
    );
    subDiv3.append(labelAnswerInc3, inputAnswerInc3);

    const subDiv4 = createElementWithText("div", "", "col-md-6");
    const labelAnswerCorrect = createElementWithText(
      "label",
      "Ingrese la opcion de respuesta CORRECTA"
    );
    const inputAnswerCorrect = createInput(
      "answerCorr",
      "answerCorr",
      "text",
      "Ingrese la respuesta correcta"
    );
    subDiv4.append(labelAnswerCorrect, inputAnswerCorrect);

    div3.append(subDiv3, subDiv4);
    if (siguiente) {
      const div4 = createElementWithText("div", "", "");
      const buttonSiguiente = createButton(
        "success",
        "bg-success flex justify-center items-center",
        "Siguiente"
      );
      buttonSiguiente.addEventListener("click", (e) => {
        e.preventDefault();
        handleSiguiente();
      });
      div4.append(buttonSiguiente);
      sectionMajor.append(
        titleNewContest,
        titleNivel,
        question,
        div1,
        div2,
        div3,
        div4
      );
      container.append(sectionMajor);
    }
  }

  function renderInicio() {
    const container = document.querySelector("#container");

    const divMajor = createElementWithText("form", "", "containerNewContest");

    const sectionCategoryInput = createElementWithText(
      "section",
      "",
      "justify-center m-4"
    );
    const titleInputCategory = createElementWithText(
      "h2",
      "Ingrese el nombre de la categoria del nuevo concurso",
      "flex justify-center items- center text-2xl"
    );
    const inputCategory = createInput(
      "category",
      "category",
      "text",
      "Ingrese la categoria"
    );

    const divButtonInputQuestion = createElementWithText("div", "", "");
    const buttonInputQuestion = createButton(
      "dark",
      "btn btn-dark",
      "Ingresar Preguntas y Respuestas"
    );
    buttonInputQuestion.addEventListener("click", (e) => {
      e.preventDefault();
      let trueCategory = handleCategory();
      if (trueCategory) {
        divMajor.reset();
      }
    });

    divButtonInputQuestion.append(buttonInputQuestion);

    sectionCategoryInput.append(
      titleInputCategory,
      inputCategory,
      divButtonInputQuestion
    );
    divMajor.append(sectionCategoryInput);
    container.append(divMajor);
  }

  function renderFinalPartCategory() {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const divMajor = createElementWithText("div", "", "");

    const titleCategoryContest = createElementWithText(
      "h2",
      "Categoria del concurso: " + category
    );

    const parraf = createElementWithText("p", "Preguntas: 25", "");
    const div1 = createElementWithText("div", "", "");
    const buttonSaveContest = createButton(
      "dark",
      "btn btn-dark",
      "Guardar Concurso"
    );
    buttonSaveContest.addEventListener("click",(e)=>{
e.preventDefault();
handleSaveContest();

    })
    div1.append(buttonSaveContest);
    divMajor.append(titleCategoryContest, parraf, div1);
    container.append(divMajor);
  }

  // if (inicio) {
  renderInicio();
  // }
  // if (!inicio && siguiente) {
  //   renderizacionPreguntas();
  // }
  // if (!siguiente) {
  //   renderFinalPartCategory();
  // }

  // while(inicio){
  //   renderInicio();
  // }

  // while((!inicio)&&siguiente){
  //   renderizacionPreguntas();
  // }
  // while (!siguiente) {
  //   renderFinalPartCategory();
  // }
  // do{
  //   let inicioReq = await renderInicio();
  //   if(inicioReq){
  //     break;
  //   }
  // }while(inicio)

  // do{
  //   renderizacionPreguntas();
  // }while((!inicio)&&siguiente)

  // do{
  //   renderFinalPartCategory();
  // }while(!siguiente)
};
