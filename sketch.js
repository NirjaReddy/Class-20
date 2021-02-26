var fr,mr;
function setup() {
  createCanvas(800,400);
 
fr= createSprite(200,200,100,50);
mr= createSprite(300,300,50,100);

fr.shapeColor ="green";
mr.shapeColor="green";
}

function draw() {
  background("blue"); 

  mr.x = mouseX;
  mr.y = mouseY;

  if(mr.x - fr.x < mr.width/2 + fr.width/2 && 
    fr.x - mr.x < mr.width/2 + fr.width/2 &&
    fr.y - mr.y < mr.height/2 + fr.height/2 &&
    mr.y - fr.y < mr.height/2 + fr.height/2){
    fr.shapeColor="red";
    mr.shapeColor="red";
  }else{
    fr.shapeColor="green";
    mr.shapeColor="green";
  }
 
  drawSprites();
}