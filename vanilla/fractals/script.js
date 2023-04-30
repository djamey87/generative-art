window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 600;
  ctx.lineWidth = 50;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'green'

  class Fractal {
    constructor(canvasWidth, canvasHeight){
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = 200;
    }

    draw (context){
      context.fillRect(0,0, this.canvasWidth, this.canvasHeight);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(this.size, 0);
      context.stroke();
    };
  }

  const fractal = new Fractal(canvas.width, canvas.height);
  fractal.draw(ctx)

  class Particle {

  }

  class Rain {

  }
});