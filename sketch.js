 var wall,thickness;
 var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 var speed = random(223,321);
 var weight = random(30,52);

 var thickness = random(22,83);

 var bullet = createSprite(40, 200, 50, 50);
 bullet.shapeColor="white";
 bullet.debug = true;
 var wall = createSprite(1500,200,60,height/2);
 wall.shapeColor=color(80,80,80);
 bullet.debug = true;
 bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);

  

  

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
   return false;

   if(hasCollided(bullet,wall)){
     bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness *thinkness *thinkness);

     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }

     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
   }
}