const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5,ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground (400, 200, 350, 10 );

	bob1 = new Bob (300, 500);
	bob2 = new Bob (380, 500);
	bob3 = new Bob (420, 500);
    bob4 = new Bob (460, 500);
    bob5 = new Bob (500, 500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}



