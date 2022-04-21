var box;
function setup() {
  createCanvas(400,400);

  var box = createSprite(200,200,30,30);
}

function draw() 
{
drawSprites();
  if(keyDown("left")) {
    background("red");
  }

  if(keyDown("right")) {
    background("yellow");
  }

}
 











