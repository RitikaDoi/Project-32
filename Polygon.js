class polygon
{

    constructor(x, y)
    {

      var polygonOptions = 
      {

        restitution: 0.1,
        friction: 1,
        density: 1,

      }

      this.body = Bodies.circle(x, y, 30, polygonOptions);
      this.image = loadImage("polygon.png");
      World.add(world, this.body);

    }

    display()
    {

        var pos = this.body.position;

        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);

        imageMode(CENTER);

        image(this.image, 0, 0, 80, 80);
        pop();

    }

}