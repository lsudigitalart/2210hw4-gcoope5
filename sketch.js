var rotaters = new Array(20);

function setup() {
  createCanvas(480, 270);

  for (var i = 0; i < rotaters.length; i++ ) {
    rotaters[i] = new Rotater(random(width), random(height), random(-0.1, 0.1), random(48));
  }
}

function draw() {
  background(255);

  for (var i = 0; i < rotaters.length; i++ ) {
    rotaters[i].spin();
    rotaters[i].display();
  }
}
