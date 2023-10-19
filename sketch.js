
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball ,ground,left,right
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Matter.Bodies.circle(100,30,30,ball_options) 
	World.add(world,ball)
	Engine.run(engine);
	ground = new Ground(width/2,670,width,20);
	left = new Ground(1100,600,20,120);
	right = new Ground(1300,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30)
  ground.show()
	left.show()
	right.show()
  
  drawSprites();


 
}
function keyPressed() {
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-50})
	}
	
}



