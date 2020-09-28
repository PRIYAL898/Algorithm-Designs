var moving,fixed;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400,200,40,80);
  fixed.shapeColor="green";
  fixed.debug=true;

  moving=createSprite(200,178,60,90);
  moving.shapeColor="green";
  moving.debug=true;

}

function draw() {
  background("lightBlue");
  
 moving.x=mouseX;
 moving.y=mouseY;

 //console.log(moving.y-fixed.y);

 if(fixed.x-moving.x<fixed.width/2+moving.width/2 &&
  fixed.y-moving.y<fixed.height/2+moving.height/2 &&
  moving.x-fixed.x<fixed.width/2+moving.width/2 &&
  moving.y-fixed.y<fixed.height/2+moving.height/2
  ){
   moving.shapeColor="red";
   fixed.shapeColor="red";
 }else{
  moving.shapeColor="green";
  fixed.shapeColor="green";
 }
  


  drawSprites();
}