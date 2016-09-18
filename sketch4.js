var theta = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255);
  stroke(0);

  // Translate to center of window to draw the sun.
  translate(width/2, height/2);
  fill(255, 200, 50);
  ellipse(0, 0, 64, 64);

  // The earth rotates around the sun
  push();
  rotate(theta);
  translate(100, 0);
  fill(50, 200, 255);
  ellipse(0, 0, 32, 32);

  // Moon #1 rotates around the earth
  // push() is called to save the transformation state before drawing moon #1.
  // This way we can pop and return to earth before drawing moon #2.
  // Both moons rotate around the earth (which itself is rotating around the sun).
  push();
  rotate(-theta*4);
  translate(36, 0);
  fill(50, 255, 200);
  ellipse(0, 0, 12, 12);
  pop();

  // Moon #2 also rotates around the earth
  push();
  rotate(theta*2);
  translate(24, 0);
  fill(50, 255, 200);
  ellipse(0, 0, 6, 6);
  pop();

  pop();

  theta += 0.01;
}
