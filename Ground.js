class ground
{

  constructor(x, y)
  {

    var options = {
        restitution:1,
        friction:1.0,
        density:1.0,
        isStatic: true
    }

    this.body = Bodies.rectangle(x, y, 350, 20, options);
    World.add(world, this.body);

  }

  display()
  {

    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, 350, 20);

  }

}