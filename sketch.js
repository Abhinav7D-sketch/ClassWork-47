var ground,background_Img,background;
var rider_animation,main_Character;
var coin_Animation;

function preload(){
  rider_animation = loadAnimation("images/Rider01.png","images/Rider02.png","images/Rider03.png","images/Rider04.png","images/Rider05.png")
  background_Img = loadImage("images/background.jpg");
  coin_Animation = loadAnimation("images/coin01.png","images/coin02.png","images/coin03.png","images/coin04.png","images/coin05.png","images/coin06.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  background.addImage("background",background_Img);
  background.x = windowWidth/2;
  background.scale = 3;
  background.velocityX = -3;
  ground = createSprite(windowWidth/2,windowHeight-20,windowWidth,20);
  ground.visible = false;
  main_Character = createSprite(windowWidth/3,windowHeight-160,10,10);
  main_Character.addAnimation("rider",rider_animation);
  main_Character.scale = 2;
  
}

function draw() { 
  if(background.x<100){
    background.x = windowWidth/2;
  }
  if(keyDown("SPACE")){
    main_Character.velocityY = -10;
  }
  main_Character.velocityY = main_Character.velocityY+0.5;

  main_Character.collide(ground);
  drawSprites();
  spawnCoins();
  spawnBoats();
}

function spawnCoins(){
if(frameCount%150 === 0){
  var coin = createSprite(windowWidth,random(displayHeight/2,displayHeight/2+200),20,30);
  coin.velocityX = -5;
  coin.addAnimation("points",coin_Animation);
}

}

function spawnBoats(){
  if (frameCount%200 === 0){
    var boat = createSprite(windowWidth,windowHeight/2,25,25);
    boat.velocityX = -5;
  }
}