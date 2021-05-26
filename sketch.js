var box;
var rod;


function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgImage = loadImage("j2a.png");
 
}



function setup() {
  
  createCanvas(displayWidth-20,displayHeight-30);
  
  box = createSprite(200,200,50,50);

  rod = createSprite(300,200,200,20);

  //camera.position.x = box.x;
  //camera.position.y = displayHeight/2;
  

}


function draw() {
  
  background("black");
  
  
  player();

  drawSprites();

}



function player() {

  if(keyDown("up")) {
    
    box.velocityY = -10;
    
  } else{

    box.velocityY = 0;

  }

  if(keyDown("down")) {
    
    box.velocityY = 10;
    
  }

  if(keyDown("left")) {
    
    box.velocityX = -10;
    
  }else{

    box.velocityX = 0;

  }

  if(keyDown("right")) {
    
    box.velocityX = 10;
    
  }

  
  

}



