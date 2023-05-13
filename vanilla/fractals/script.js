window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.fillStyle = 'blue';
  ctx.shadowColor = 'black';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowBlur = 10;

  class Fractal {
    constructor(canvasWidth, canvasHeight){
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.32;
      this.sides = 5;
      this.maxLevel = 3;
      this.scale = 0.45;
      this.spread = Math.random() * 1.8 + 0.1;
      this.branches = 2;
      this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%';
    }

    draw (context){
      context.strokeStyle = this.color;
      context.save();
      context.translate(this.canvasWidth/2,this.canvasHeight/2);
      context.scale(1, 1);
      context.rotate(0);

      for (let i =0; i < this.sides; i++) {
        this.#drawLine(context,0);
        context.rotate((Math.PI * 2)/this.sides);
      }
      context.restore();
    };

    #drawLine(context, level){
      if (level > this.maxLevel) return;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(this.size, 0);
      context.stroke();

      for (var i = 0; i < this.branches; i++){
        context.save();
        context.translate(this.size - (this.size / this.branches) * i, 0);
        context.scale(this.scale, this.scale);
        
        context.save();
        context.rotate(this.spread);
        this.#drawLine(context, level + 1);
        context.restore();

        context.save();
        context.rotate(-this.spread);
        this.#drawLine(context, level + 1);
        context.restore();
        
        context.restore();
      } 
      
    }
  }

  const fractal = new Fractal(canvas.width, canvas.height);
  fractal.draw(ctx)

  class Particle {

  }

  class Rain {

  }
});