
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground1,ground2,ground3;
var polygon;
var body;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11,box12,box13,box14,box15,box16,box17;
var box18,box19,box20,box21,box22,box23,box24,box25,box26,box27;
var slingshot;
//var launchingForce=100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground3 = new Ground(400,750,780,50);
	ground2 = new Ground(655,510,200,10);
	box18 = new Bin(640,488,30,35);
	box19 = new Bin(580,488,30,35);
	box20 = new Bin(610,488,30,35);
	box21 = new Bin(670,488,30,35);
	box22 = new Bin(700,488,30,35);
	box23 = new Bin(730,488,30,35);
	box24 = new Bin(620,453,30,35);
	box25 = new Bin(650,453,30,35);
	box26 = new Bin(680,453,30,35);
	box27 = new Bin(650,418,30,35);
	
	polygon = new Paper(100, 550);

	ground1 = new Ground(400, 620, 250, 10);
	box1 = new Bin(370,595,30,35);
	box2 = new Bin(340,595,30,35);
	box3 = new Bin(310,595,30,35);
	box4 = new Bin(400,595,30,35);
	box5 = new Bin(430,595,30,35);
	box6 = new Bin(460,595,30,35);
	box7 = new Bin(490,595,30,35);
	box8 = new Bin(325,560,30,35);
	box9 = new Bin(355,560,30,35);
	box10 = new Bin(385,560,30,35);
	box11 = new Bin(415,560,30,35);
	box12 = new Bin(445,560,30,35);
	box13 = new Bin(475,560,30,35);
	box14 = new Bin(365,525,30,35);
	box15 = new Bin(395,525,30,35);
	box16 = new Bin(425,525,30,35);
	box17 = new Bin(395,490,30,35);

	slingshot=new SlingShot(polygon.body,{x:100,y:550})
  

	Engine.run(engine);
  
}

function draw() 
{
	background("lightBlue");
	rectMode(CENTER);

	textSize(25);
    text("Drag the polygon and launch it towards the boxes to play!!",50 ,200);

	ground1.display();
	ground2.display();
	
	polygon.display();
	slingshot.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box7.display();
	box6.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();
	box26.display();
	box27.display();
	//bin1.display();
	///bin2.display();
	//bin3.display();
	
	//keyPressed();

	
  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased()
{
	slingshot.fly();
}
function keyPressed()
{
	if (keyCode === 32) 
    {
      Matter.Body.setPosition(polygon.body, {x:235, y:420}) 
      slingshot.attach(polygon.body);
    }
}




