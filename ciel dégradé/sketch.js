
let c1,c2;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  c1 = color(0,0,85);
  c2 = color(170, 0, 0);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function draw() {
  // put drawing code here
}
