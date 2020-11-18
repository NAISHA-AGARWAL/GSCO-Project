var car;
var wall;
var speed;
var weight;
function setup() {
  createCanvas(1200,400);
  speed=random(55,90);
  weight=random(400,1500);
car = createSprite(50, 200, 50, 50);
wall = createSprite(1000,200,10,200);
wall.shapeColor=("white");
car.velocityX = 4;

}

function draw() {
  background("black"); 
  if(car.collide(wall)){

  
  //if(wall.x-car.x===(car.width+wall.width)/2); {
  //car.velocityX=0;
  var deformation=(0.5*weight*speed*speed)/22500;
  if(deformation>180){
    car.shapeColor=("red");
  }
  if(deformation<180&&deformation>100){
    car.shapeColor=("yellow");
  }
  if(deformation<100){
    car.shapeColor=("green");
  }
  }
  console.log(deformation);
  drawSprites();
}