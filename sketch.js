
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, b1, b2, b3

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
b1 = new Box(1200,617,100,15)
b2 = new Box(1150,595,15,60)
b3 = new Box(1250,595,15,60)

ground = new Ground(800,700,1600,20)
ball = new Ball(100,200,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:1, y:-1})

}

  b1.display();
  b2.display();
  b3.display();
  ground.display();
  ball.display();

  drawSprites();
 
}



