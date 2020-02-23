console.log("Ejecutando JS...");

// leer el elemento párrafo test 2
const test2 = document.getElementById("test2");
// leer el elemento párrafo test 1 para modificalo
const test1 = document.getElementById("test1");
/*-- configurar el manejador para el eventos
     de pulsación de botón*/
test2.onclick = () => {
  console.log("Click sobre el párrafo 2...");

//-- Cambiar su Texto
test1.innerHTML = "¡Texto cambiado!"
}
