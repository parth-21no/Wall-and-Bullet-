 var car,wall;
 var speed,weight;

function setup() {
  createCanvas(1600,400);
 var speed = random(50,70);
 var weight = random(400,1500);

 var car = createSprite(40, 200, 50, 50);
 car.shapeColor="white";
 car.debug = true;
 var wall = createSprite(1500,200,60,height/2);
 wall.shapeColor=color(80,80,80);
 car.debug = true;
 car.velocityX = speed;

  if(car.width+wall.width/2){
   
  var deformation= 0.5* weight* speed* speed/22509;
    if(deformation>100){
       car.shapecolor = color("red");
    }
    if(deformation>180 && deformation<100){
       car.shapecolor = color("yellow");
    }
     if(deformation<180){
      car.shapecolor = color("green");
    }
 }

}



function draw() {
  background(0,0,0);

  

  

  drawSprites();
}