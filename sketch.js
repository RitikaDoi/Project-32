const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

var backgroundImg;

var polygon1, ground1, ground2;

var block6, block2, block3, block4, block5, block6, block7, block8, block9; 
var block60, block61, block62, block63, block64, block65, block66, block67, block67, block68, block69, block20, block21, block22, block23, block24, block25;

function preload() 
{
  
  getBackgroundImage();

}

function setup()
{

    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(990, 265);
    ground2 = new ground(529, 397);

    polygon1 = new polygon(50, 200);

    //top
    block1 = new block(990, 155);
    //2nd layer
    block2 = new block(960, 195);
    block3 = new block(990, 195);
    block4 = new block(1020, 195);
    //3rd layer
    block5 = new block(930, 235);
    block6 = new block(960, 235);
    block7 = new block(990, 235);
    block8 = new block(1020, 235);
    block9 = new block(1050, 235);

    //top
    block10 = new block(529, 247);
    //2nd layer
    block11 = new block(499, 287);
    block12 = new block(529, 287);
    block13 = new block(559, 287);
    //3rd layer
    block14 = new block(469, 327);
    block15 = new block(499, 327);
    block16 = new block(529, 327);
    block17 = new block(559, 327);
    block18 = new block(589, 327);
    //4th layer
    block19 = new block(439, 367);
    block20 = new block(469, 367);
    block21 = new block(499, 367);
    block22 = new block(529, 367);
    block23 = new block(559, 367);
    block24 = new block(589, 367);
    block25 = new block(619, 367);

    slingshot = new SlingShot(polygon1.body, {x: 50, y: 180});

}

function draw()
{
  
    background("lightBlue");

    textSize(35);
    fill("white");
    text("Score " + score, 50, 50);

    Engine.update(engine);

    ground1.display();
    ground2.display();

    polygon1.display();

    slingshot.display();

    block1.display("pink");
    block2.display("green");
    block3.display("green");
    block4.display("green");
    block5.display("lightBlue");
    block6.display("lightBlue");
    block7.display("lightBlue");
    block8.display("lightBlue");
    block9.display("lightBlue");

    block10.display("pink");
    block11.display("green");
    block12.display("green");
    block13.display("green");
    block14.display("lightBlue");
    block15.display("lightBlue");
    block16.display("lightBlue");
    block17.display("lightBlue");
    block18.display("lightBlue");
    block19.display("pink");
    block20.display("pink");
    block21.display("pink");
    block22.display("pink");
    block23.display("pink");
    block24.display("pink");
    block25.display("pink");

    block6.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    
    //console.log(mouseX);
    //console.log(mouseY);

}

function mouseDragged()
{

    Matter.Body.setPosition(polygon1.body, {x: mouseX, y: mouseY});

}

function mouseReleased()
{

    slingshot.fly();

}

function keyPressed()
{

  if(keyCode === 32)
  {

    slingshot.attach(polygon1.body)

  }

}

async function getBackgroundImage()
{

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJSON = await response.json();
  console.log(responseJSON);

  DateTime = responseJSON.datetime;
  console.log(DateTime);

  var hour = DateTime.slice(11, 13);
  console.log(hour);

  if(hour >= 06 && hour <= 19)
  {

    bg = "lightBlue";

  }
  else
  {

    bg = "blue";

  }

  backgroundImg = bg

}
