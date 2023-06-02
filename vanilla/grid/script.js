window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  const rootRadius = 25;
  const spacing = rootRadius * 2.5;

  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.documentElement.scrollHeight;

  const columns = canvas.width / (rootRadius);
  const rows = canvas.height / (rootRadius);

  ctx.lineWidth = 3;
  // ctx.shadowOffsetY = ctx.lineWidth / 2;
  // ctx.shadowOffsetX = ctx.lineWidth / 2;
  // ctx.shadowBlur = ctx.lineWidth * 2.5;

  ctx.beginPath();
  ctx.rect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = "#03071e";
  ctx.fill();

  class Circle {
    constructor(radius, x, y){
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.maxLevel = 3;
      this.scale = 0.45;
      this.spread = Math.random() * 1.8 + 0.1;
      
      const randPerc = 10 + Math.random() * 70;
      // const randColor = 0;
      // this.color = 'hsl(' + randColor + ', 0%, 66%)';
      this.color = 'hsl(3, 0%, '+randPerc+'%)';
      // ctx.shadowColor = 'hsl(' + (randColor + 40) + ', 100%, 50%)';
    }

    draw (context){
      context.save();
      context.strokeStyle = this.color;

      this.#drawCircle(context,0);
    };

    #drawCircle(context, level){
      if (level > this.maxLevel) return;

      const offset = level * (2 + (Math.random() * 5));

      context.beginPath();
      context.arc(this.x, this.y, this.radius - offset, 0, Math.PI * 2);
      context.lineWidth = 5 - Math.random() * 2;
      context.stroke();

      this.#drawCircle(context, level + 1);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const circle = new Circle(rootRadius, spacing * j, spacing * i);
      circle.draw(ctx)
    }
  }
});