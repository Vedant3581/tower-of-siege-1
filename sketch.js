const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,slingshot;
var engine,world;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,800,1000,20);

  Box1 = new Box(600,800,1000,20);
  box2 = new Box(600,800,1000,20);
  box3 = new Box(600,800,1000,20);
  box4 = new Box(600,800,1000,20);
  box5 = new Box(600,800,1000,20);
  box6 = new Box(600,800,1000,20);
  box7 = new Box(600,800,1000,20);
  Box8 = new Box(600,800,1000,20);


  slingshot= new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  Box8.display();
  engine.display();
  
 
}

function mouseDragged(){
  Matter.Body.setPosition(BodyA, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}