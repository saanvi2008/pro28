
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1,boyImage,boy,tree1

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8; 

var ground1;

var sling1;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree1  = new tree(1000,600,20,20);

    stones=new Stone(100,160,40);

    attach2=new Throw(stones.body,{x:100,y:300});

    mango1 = new mango(800,300,40);
    mango2 = new mango(850,200,40);
    mango3 = new mango(900,100,40);
    mango4 = new mango(950,300,40);
    mango5 = new mango(1000,200,40);
    mango6 = new mango(1150,200,40);
    mango7 = new mango(1150,100,40);
    mango8 = new mango(1150,200,40);

    ground1 = new ground(width/2,height-35,width,20);

    boy = createSprite(200,430,20,20);
	  boy.addImage(boyImage);
    boy.scale = 0.2;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  tree1.display();


  stones.display();

  attach2.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  ground1.display();

  

  textSize(36);
  text("Press Space To Get second Chance!", 200, 50);
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX , y:mouseY});
}
function mouseReleased(){
   attach2.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPos.x, stoneBodyPos.y,mangoBodyPosition.x,stoneBodyPosition.y);

  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango,false);
  }
}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach2.attach(stones.body);
	}
}

