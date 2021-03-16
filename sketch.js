var fixedRect, movingRect;
var square1,square2,square3,square4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  square1 = createSprite(500,300,50,50);
  square1.shapeColor = "blue";
  square1.debug = true;
  square2 = createSprite(300,200,50,50);
  square2.shapeColor = "blue";
  square2.debug = true;
  square3 = createSprite(200,100,50,50);
  square3.shapeColor = "blue";
  square3.debug = true;
  square4 = createSprite(700,500,50,50);
  square4.shapeColor = "blue";
  square4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(collision(square1,movingRect)){
  movingRect.shapeColor = "red";
  square1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green"; 
  square1.shapeColor = "blue";
}
  
  drawSprites();
}

