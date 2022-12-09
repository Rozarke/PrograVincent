function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
}
function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  fill(255,0,0)
  rect(100, 100,
    width - 2 * 100,
    height - 2 * 100
    );

    fill(0)
    text("bonjour", width/2, height/2);

}