class Bola {
  constructor(ctx) {
   //-- Guardar el contexto de dibujo
   this.ctx = ctx;

   //-- Constante: Tamaño de la bola
   this.size = 7;

   //-- Constante: Posición inicial de la bola
   this.x_ini = 100;
   this.y_ini = 200;

   //-- Posición genérica de la bola
   this.x = 0;
   this.y = 0;

   //-- Velocidad inicial de la bola
   this.vx_ini = 3;
   this.vy_ini = 3;
   //-- Velocidad genérica de la bola
  //-- Inicialmente a cero
    this.vx = 0;
    this.vy = 0;

   //-- Inicializar
   this.init();
  }

  draw() {
    //---- Dibujar la bola
    this.ctx.beginPath();
    this.ctx.fillstyle = 'yellow';

    //-- x, y, anchura, altura
    this.ctx.rect(this.x, this.y, this.size, this.size);
    this.ctx.fill();
  }

  init() {
    //-- Inicializada la bola: A su posición Inicial
    //-- y Velocidad genérica de la bola
    //-- Inicialmente a cero
    this.x = this.x_ini;
    this.y = this.y_ini;
    this.vx = 0;
    this.vy = 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
