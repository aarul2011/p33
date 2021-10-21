


var snow3,bgImg
var snow,snowBody



function preload()
{
bgImg = loadImage("snow3.jpg")
snowBody = loadImage("snow4.webp")


}

function setup() {
  createCanvas(800,750);
 
}

function draw() {
  background(bgImg);  

  if(frameCount%40 === 0){
    snow = createSprite(650,30);
  snow.x = Math.round(random(40,750))
  snow.addImage(snowBody);

 snow.scale = 0.2
 snow.velocityY = 2







  }

  drawSprites();
}
