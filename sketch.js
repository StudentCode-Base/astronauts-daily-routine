/*var bathIMG, bath;
var brushIMG, brush;
var eatingA, eating;
var drinkingA, drink;
var gymA, gym;
var moveA, move;
var sleepA, astronaut;
var bgIMG, BG;

function preload(){
  bgIMG = loadImage("assets/iss.png")
  brushIMG = loadAnimation("assets/brush.png")
  eatingA = loadAnimation("assets/eat1.png","assets/eat2.png")
  drinkingA = loadAnimation("assets/drink1.png","assets/drink2.png")
  gymA = loadAnimation("assets/gym1.png","assets/gym2.png","assets/gym11.png","assets/gym12.png")
  moveA = loadAnimation("assets/move.png","assets/move1.png")
  sleepA = loadAnimation("assets/sleep.png")
}

function setup() {
  createCanvas(800,400);
  BG = createSprite(400,200)
  BG.scale = 0.2
  BG.addImage(bgIMG)
  astronaut = createSprite(400,200)
  astronaut.scale = 0.1
  astronaut.addAnimation("sleep",sleepA)
}

function draw() {
  background(0);  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("gym",gymA)
    astronaut.changeAnimation("gym")
    astronaut.x = 200
    astronaut.y = 200
    astronaut.velocityX = 3
  }
  drawSprites();
}*/

var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("assets/iss.png");
  sleep = loadAnimation("assets/sleep.png");
  brush = loadAnimation("assets/brush.png");
  gym = loadAnimation("assets/gym1.png","assets/gym2.png");
  eat = loadAnimation("assets/eat1.png","assets/eat2.png");
  bath = loadAnimation("assets/bath1.png","assets/bath2.png");
 move = loadAnimation("assets/move.png","assets/move.png","assets/move1.png","assets/move1.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  drawSprites();
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");

  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");

  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");

  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");

  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
  }

}