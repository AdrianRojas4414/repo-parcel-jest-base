import sumar from "./sumador";
import multiplicar from "./multiplicador";
import saludar from "./saludador";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const idioma_input = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = edad_input.value; //agarra el valor del index
  const genero = genero_input.value;
  const idiom = idioma_input.value; //implementando el idioma

  //implementando el tiempo del sistema
  const fecha = new Date();
  const hora = fecha.getHours();

  div.innerHTML = "<p>" + saludar(nombre, edad, genero, hora, idiom) + "</p>";  
});