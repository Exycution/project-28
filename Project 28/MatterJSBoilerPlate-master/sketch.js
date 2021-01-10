
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,stone,ground;
var boyImg,stoneImg,treeImg,mangoImg;
var rope1, tree;
var mango1,mango2,mango3,mango4,mango5;
var lmango, lstone;

function preload()
{
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	// boy sprite
	boy = createSprite(300,585,10,10);
	boy.addImage(boyImg);
	boy.scale = 0.12;

	ground = new Ground(800,650,1600,10);
	stone = new Stone(235,515,20);

	// ropes
	rope1 = new Rope(stone.body,{x: 235, y: 515});

	// Tree
	tree = new Tree(1200,325,50,50);

	// mango
	mango1 = new Mango(1000,200,50);
	mango2 = new Mango(1200,150,50);
	mango3 = new Mango(1400,240,50);
	mango4 = new Mango(1300,135,50);
	mango5 = new Mango(1100,250,50);

	





	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	Engine.update(engine);
  	background(255);
	

	ground.display();
	tree.display();
	rope1.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	drawSprites();
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	rope1.fly();
}

function detectCollision(bodyA,bodyB){
	mangoBodyPosition = bodyA.body.position;
	stoneBodyPosition = bodyB.body.position;

	var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y);
	if(distance<=250){
		Matter.Body.setStatic(bodyB.body, false);
	}
	
}


