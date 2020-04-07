// Objeto raqueta
class Raqueta
{
  constructor(ctx) {

    //-- Guardar el contexto
    this.ctx = ctx;

    //-- Constante: Tamaño de la raqueta
    this.width = 10;
    this.height = 40;

    //-- Constante: Posición Inicial
    this.x_ini = 50;
    this.y_ini = 100;

    //-- Constante: velocidad
    this.v_ini = 6;

    //-- Velocidad (variable)
    this.v = 0;

    //-- Inicializar la raqueta a su posición Inicial
     this.init();
    }

    //-- Inicializar la raqueta a su posición original
    init()
    {
      this.x = this.x_ini;
      this.y = this.y_ini;
    }

    //-- Actualizar la posición de la raqueta
    update()
    {
      this.y += this.v;
    }

    //-- Dibujar la raqueta
    draw()
    {
       //------- Dibujar las raquetas
       this.ctx.beginPath();
       this.ctx.fillStyle= 'white';
       this.ctx.rect(this.x, this.y, this.width, this.height);

       //---¡Pintar!
       this.ctx.fill();
    }
  }
