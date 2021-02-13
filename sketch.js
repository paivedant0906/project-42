var score=0;
 var bananaImage; 
 var banana
 var obstaclesGroup;
var FoodGroup;
var backImage,backgr;
var player, player_running;
var ground,ground_img;
var obstacleImage
var END =0;
var PLAY =1;
var gameState = PLAY;
var obstacle;
function preload(){
  backImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");  
  obstacleImage=loadImage("stone.png");
player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
}

function setup() {
  createCanvas(800,400);
   backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  obstaclesGroup=new Group();
  FoodGroup=new Group();
 
  
   
  
 
  
  
  
  
   
}

function draw() {
  background(0);
  if(gameState===PLAY){
if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
   switch(score){
    case 10:player.scale=0.12;
      break;
       case 20:player.scale=0.16;
      break;
       case 30:player.scale=0.20;
      break;
       case 40:player.scale=0.54;
      break;       
      default: break;      
  }
  
  if(obstaclesGroup.isTouching(player)){
    gameState=END;

  }
  
  if(FoodGroup.isTouching(player)){
    score=score+2;
    FoodGroup.destroyEach();
    player.scale += +0.1
  }
         
         
 
  
  food();
  obstacles();
  
  
 
   
  ground.visible=false;
  
 
 
   drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
    player.collide(ground);

  }
  else if(gameState===END){
    backgr.velocityX=0;
  image(backImage,0,0,800,400)
    obstaclesGroup.destroyEach()
     FoodGroup.destroyEach()
     textSize(40)
     fill("white")
     text("GAME OVER!",400,200)
      stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  }
  

  
 
}


function food(){
  if (frameCount % 150 === 0) {
    banana = createSprite(810,300,20,20);  
    banana.y = random(100,140);    
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.addImage(bananaImage);
    banana.scale=0.06;
    FoodGroup.add(banana);
    
  }
}
function obstacles(){
  if(frameCount % 300 === 0) {
    obstacle = createSprite(810,340,20,20);
    obstacle.velocityX = -5;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
}
}  


      


