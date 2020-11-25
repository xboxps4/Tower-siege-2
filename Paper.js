class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:4
      }
      this.body = Bodies.circle(x, y, 10, options);
      //this.width = 50;
      //this.height = 50;
      this.image = loadImage("polygon.png"); 
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER);
      fill("purple");
      stroke("purple");
      strokeWeight(1);
      image(this.image,0, 0, 50, 50);
      pop();
    }
  }