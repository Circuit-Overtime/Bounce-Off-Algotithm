var frect,mrect, rect1,rect2; 
function setup() {
  createCanvas(400,400);
  frect = createSprite(300, 300, 50, 50);
  mrect = createSprite(300,200,50,100);
  rect1 = createSprite(100,100,50,50);
  rect2 = createSprite(200,100,50,50);
  rect1.velocityX = 3;
  rect2.velocityX = -3;
  frect.shapeColor = "green";
mrect.shapeColor = "green";
mrect.velocityY = 3;
frect.velocityY = -3;

}

function draw() {
  background(255,255,255); 
//mrect.x = mouseX;
//mrect.y = mouseY;
if((frect.y-mrect.y < frect.height/2 + mrect.height/2) && (mrect.y - frect.y < frect.height/2 + mrect.height/2))
{
frect.shapeColor = "red";
mrect.shapeColor = "red";
frect.velocityY = (frect.velocityY)*-1;
mrect.velocityY = (mrect.velocityY)*-1;

}
else{
  frect.shapeColor = "green";
mrect.shapeColor = "green";
}

if((rect1.x - rect2.x < rect1.width/2 + rect2.width/2) && (rect2.x - rect1.x < rect1.width/2 + rect2.width/2))
{
  rect1.shapeColor = "red";
rect2.shapeColor = "red";
rect1.velocityX = (rect1.velocityX)*-1;
rect2.velocityX = (rect2.velocityX)*-1;
}
else
{
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
}
drawSprites();
}