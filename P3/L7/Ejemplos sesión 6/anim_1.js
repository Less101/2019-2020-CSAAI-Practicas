console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Objeto a mover
var objeto ={
  x : 18, // coordenada x
  y : 40, // coordenada y
  vx : 4, // Velocidad en x
  ctx : null, // Contexto
  done: false, //-- si el objeto ha llegado al final

  //-- inizializar el Objeto
  init: function(ctx) {
    this.ctx = ctx;
  },

  // dibujar el Objeto
  draw : function() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, 20, 20)
    this.ctx.strokeRect(this.x, this.y, 20, 20)
  },

  // Actualizar la posición del objeto y redibujar
  update: function() {
    this.x += this.vx;
    if (this.x > (tablero.canvas.width - 30))
      this.done = true;
    this.draw()
  },

//-- Objeto a su estado inicial
reset : function (){
  this.x = 10;
  this.done = false;
  }
}

//-- Objeto tablero
var tablero = {
    canvas : document.getElementById("canvas"),
    start : document.getElementById("start"),
    ctx : null,
    timer : null,

    //-- Actualizar el tablero
    update : function() {
      this.clear();
      objeto.update();
      //-- si objeto lallegado al final
      if (objeto.done){

        // Eliminar el timer
        clearInterval(this.timer);
        this.timer = null;
        //-- Resetea objeto;
        objeto.reset();

        // Borrar tablero
        this.clear();

        // Dibujar objeto en el origen
        objeto.draw();
      }
    },
    //-- Borrar el tablero
    clear: function() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    //-- Inicializar el tablero
    init : function(){
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = 300;
      this.canvas.heigt = 100;
      //-- Cuando se pulsa el botón de start
      //-- se actualiza el tablero cada 20ms
      this.start.onclick = () => {
        if(!this.timer){
          this.timer = setInterval(()=> {tablero.update()}, 20);
        }
      }
    },
 }
// -- Inicializar tablero
tablero.init()
//-- inicial el Objeto
objeto.init(tablero.ctx)
//-- dibujar el Objeto
objeto.draw()
