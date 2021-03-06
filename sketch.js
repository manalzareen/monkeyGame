
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
//creating monkey  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,390,1200,10)  
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);  
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
background(255);
  
if (ground.x<0){
ground.x=ground.width/2;
}
 if (keyDown("space")){
    monkey.velocityY=-12;
 }
  if (foodGroup.isTouching(monkey)){
     foodGroup.destroyEach();
     score = score+2;
  }
 
   
   
  
  
stroke("white");
textSize(20);
fill("white");
  
  
 stroke("black");
  textSize (20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime: "+ survivalTime,40,50);
 
monkey.velocityY=monkey.velocityY +0.8;
  
monkey.collide(ground);
  
  
food();
obstacles();
  
drawSprites();
}
function food() {
  if (frameCount % 90 === 0) {
     banana = createSprite(530,10,10,5);
    banana.y = Math.round(random(90,10));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    
     //assign lifetime to the variable
    banana.lifetime = 400;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding banana to the group
   foodGroup.add(banana);
    }
}
function obstacles(){
if (frameCount% 90 ===0){
obstacle=createSprite(600,350,10,10);

obstacle.addImage(obstacleImage);
obstacle.scale=0.2;
obstacle.velocityX=-3;
  
obstacle.lifetime=400;
  
obstacle.depth = monkey.depth;
monkey.depth = monkey.depth + 1;
  
obstacleGroup.add(obstacle);
}
}







