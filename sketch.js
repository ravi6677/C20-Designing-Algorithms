var movingRect, fixedRect;

function setup(){

  createCanvas(800,400);

  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(500,200,50,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

}


function draw(){

  background("black");

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x > fixedRect.width/2 + movingRect.width/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();

}