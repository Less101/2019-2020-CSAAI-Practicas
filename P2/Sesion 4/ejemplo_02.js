console.log("Ejecutando JS...");

// -- Acceder al párrafo de prueba
const test = document.getElementById('test');

//-- Función de retrollamada
test.onclick = () => {
  console.log("¡¡Click!!");

//-- Cambiar el color de fondo
//-- Si no tenía color asignado, poner amarillo
  if (test.style.background ==""){
    test.style.background = "yellow";

//-- Ya tiene clor: quitarselo
}else {
  test.style.backgroundColor = "";
}
}
