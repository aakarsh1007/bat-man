var thunder,thunderAnimation;
var bruce,bruceAnimation;
function preload(){
    thunderAnimation = loadAnimation("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png");
    bruceAnimation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png",
    "Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
}

function setup(){
   createCanvas(1100,600);
   thunder = createSprite(550,200,10,10);
   thunder.addAnimation("thunderbolt",thunderAnimation);
   
   bruce = createSprite(100,550,10,10);
   bruce.addAnimation("bruce",bruceAnimation);
}

function draw(){
 background("black");
 raindrops();
 if(keyDown("DOWN_ARROW")){
     bruce.velocityX = 4;
 }
 drawSprites();
}   
function raindrops(){
var drops = createSprite(random(10,1090),0,10,random(5,50));
drops.velocityY = random(2,10);
}