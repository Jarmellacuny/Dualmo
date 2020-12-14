var newnew=mouseX;
var newnew2=mouseY;

function setup() {
  createCanvas(600, 600);

function draw() {
  background(100);
    // Draw a cir)cle
  strokeWeight(1);
  stroke(b, b, b);
  fill(b, 127, b, 127);
  ellipse(newnew,newnew2,100,100,100,100,);
}


// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(newnew, newnew2, 360, 200);
  if (d < 100) {
    // Pick new color values
    r = (255);
    g = (255);
    b = (255);
  }
}