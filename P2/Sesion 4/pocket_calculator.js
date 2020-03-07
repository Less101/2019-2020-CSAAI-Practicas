console.log("Ejecutando JS...");

//-- Crear un array con todos los elementos
//-- de la clase digito
digito = document.getElementsByClassName("digito")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

//-- Crear un array con todos los elementos
//-- de la clase operacion
operacion = document.getElementsByClassName("operacion")

for (i=0; i<operacion.length; i++) {
  operacion[i].onclick = (ev) => {
    display.innerHTML += ev.target.value;
  }
}

//-- Estados de la calculadora
  const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}
//-- Ha llegado un dígito
function number(digito)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = digito;
    estado = ESTADO.OP1;
  }else if (estado == ESTADO.OPERATION) {
    display.innerHTML = digito;
    estado = ESTADO.OP2_INIT;
  }else if (estado == ESTADO.OP2_INIT) {
    display.innerHTML = digito;
    estado = ESTADO.OP2;
  }else{
    estado= ESTADO.INIT;
    console.log("Fuck you!!!");
  }
}

function operation(operacion)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.OP1) {
    display.innerHTML = operacion;
    estado = ESTADO.OPERATION;
  }else {
    estado= ESTADO.INIT;
  }
}

 function resultado(igual)
 {
   if (estado == ESTADO.OP2_INIT || estado == ESTADO.OP2) {
     display.innerHTML = igual;
      estado = ESTADO.INIT;
     }
}

igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  estado = ESTADO.INIT;
}
reset.onclick = () => {
  display.innerHTML = "";
  estado = ESTADO.INIT;
}

clear.onclick = () => {

}
