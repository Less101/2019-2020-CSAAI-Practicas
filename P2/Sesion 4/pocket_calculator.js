console.log("Ejecutando JS...");

//-- Crear un array con todos los elementos
//-- de la clase digito
digito = document.getElementsByClassName("digito")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
    number(ev.target.value);
  }
}

//-- Crear un array con todos los elementos
//-- de la clase operacion
operacion = document.getElementsByClassName("operacion")

for (i=0; i<operacion.length; i++) {
  operacion[i].onclick = (ev) => {
    operation(ev.target.value);
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
estado = ESTADO.INIT
var state = [];
state.push(estado);


//-- Ha llegado un dígito
function number(digito)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = digito;
    estado = ESTADO.OP1;
    state.push(estado);
  }else if (estado == ESTADO.OP1) {
    display.innerHTML += digito;
    state.push(ESTADO.OPERATION);
  }else if (estado == ESTADO.OPERATION) {
    display.innerHTML += digito;
    estado = ESTADO.OP2_INIT;
    state.push(estado);
  }else if(estado == ESTADO.OP2_INIT){
    display.innerHTML += digito;
    state.push(estado);
    estado= ESTADO.OP2;
  } else if (estado == ESTADO.OP2) {
    display.innerHTML += digito;
    state.push(estado);
  }
}

function operation(operacion)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.OP1) {
    display.innerHTML += operacion;
    estado = ESTADO.OPERATION;
    state.push(estado);
 }
}

igual.onclick = () => {
  if (estado == ESTADO.OP2_INIT || estado == ESTADO.OP2) {
     display.innerHTML = eval(display.innerHTML);
     estado = ESTADO.OP1;
     state = [];
     state.push(estado);
    }
}
reset.onclick = () => {
  display.innerHTML = "";
  estado = ESTADO.INIT;
}

clear.onclick = () => {
  estado = state[state.length-2];
  state.pop();
  display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
  state.push(estado);
}
