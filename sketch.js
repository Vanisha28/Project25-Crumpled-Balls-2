const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}
	
function setup() {
	createCanvas(1200,550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(110,450,70);
	ground = new Ground(600,height,1200,20);
	dustbin = new Dustbin(950,520,100,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  paper.display();
  dustbin.display();
  ground.display();
  
  
  
  
  
  
  
  
  
  
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:165,y:-95})
}
}