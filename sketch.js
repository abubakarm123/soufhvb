const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	

ground = new Ground(800,680,1600,20)
	Engine.run(engine);

//dustbin1 = new Dustbin(1200,560,200,200)
//dustbin2 = new Dustbin(1100,560,20,200)
dustbin3 = new Dustbin(1300,560,200,200)
 paper = new Paper(100,300,30,30)
 
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  
  paper.display()
  ground.display()
 // dustbin1.display()
  
 // dustbin2.display()
  dustbin3.display()
 

}

function keyPressed() {

if(keyCode === UP_ARROW)
Matter.Body.applyForce(paper.body,paper.body.position,{x:230,y:-230})

}



