var thunder,thunderAnimation;
var bruce,bruceAnimation;
function preload(){
    thunderAnimation = loadAnimation("1.png","2.png","3.png","4.png");
    bruceAnimation = loadAnimation("walking_1.png","walking_2.png","/walking_3.png","walking_4.png","walking_5.png",
    "walking_6.png","walking_7.png","walking_8.png");
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