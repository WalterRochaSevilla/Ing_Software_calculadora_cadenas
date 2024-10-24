import calcular from "./calculadora.js"; // Asegúrate de que este es el archivo correcto

const input = document.querySelector("#numeros"); // Selecciona el nuevo input de cadena
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se recargue

  const cadenaNumeros = input.value; // Obtiene el valor de la cadena
  const resultado = calcular(cadenaNumeros); // Llama a la función 'calcular' con la cadena

  div.innerHTML = `<p>Resultado: ${resultado}</p>`; // Muestra el resultado en el div
});
