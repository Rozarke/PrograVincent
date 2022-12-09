let myImg
function preload(){
  myImg = loadImage("bababoy.gif");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  // put drawing code here
  background(255, 0, 0);
  image (myImg, mouseX, mouseY);
}