let isVertical = true
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
  background ;
  stroke(random(255),random(255),random(255));
  let counter = 0;
  while(counter<5000){
  mouliStar(noise(1,counter)*width,noise(2, counter)*height,5,5);
counter ++;
}
}

function mouliStar(x, y ,w, h){
  push();
  translate( x, y);
    if(frameCount%5==0){ 
      line(-w/2, 0, w/2, 0);
    }else{ 
      line(0, -h/2, 0, h/2)
    }
    pop();


}


