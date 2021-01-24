class block
{

    constructor(x, y)
    {

      var blockOptions = 
      {

        restitution: 0.8,
        friction: 0.1,
        density: 0.1,
        isStatic: false

      }

      this.body = Bodies.rectangle(x, y, 30, 40, blockOptions);
      World.add(world, this.body);

      this.Visiblity = 255;

    }

    display(color)
    {

      //console.log(this.body.speed);

      if(this.body.speed < 3)
      {
      var pos = this.body.position;

      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);

      rectMode(CENTER);

      fill(color)

      rect(0, 0, 30, 40);
      pop();

      }

      else
      {

        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(0, 0, 50, 50);
        pop();

      }

    }

    score()
  {

    if(this.Visiblity < 0 && this.Visiblity > -1005)
    {

      score++;

    }

  }

}