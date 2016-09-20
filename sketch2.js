var ex = 100;
var ey = 100;
var ed = 10;
var speed = 10;
var ts = "";
var gravity = 0;
// var squareState = 1;
// var squareState1 = 1;
// var squareState2 = 1;
// var squareState3 = 1;
var score = 0;
var doonce = 1;
// var blocks = new Array(40);
// var p = 0;
// var imageSprite;
// var points = [];
// var theta = 0;
var rx = 200;
var ry = 200;
var rw = 100;
var rh = 100;
// var robots;

function setup() {
  createCanvas(640, 480);
  // robots = new Group();
  //
  // for(var i=0; i<20; i++)
  // {
  // var robot = createSprite(random(0,width),random(0,height));
  // robot.addAnimation("normal", "assets/New_Piskel.png");
  // robot.setCollider("circle", -2,2,55);
  // robot.setSpeed(random(2,3), random(0, 360));
  // robot.scale = random(0.5, 1);
  // robot.mass = robot.scale;
  // robot.add(robot);

  // for(var x = 0; x < rotaters.length; x++ ) {
  //   rotaters[x] = new rotater(random(width), random(height), random(-0.1, 0.1), random(48));
  // }
}

function draw(){
  background(150, 100);

  // for(var x = 0; x < rotaters.length; x++ ) {
  //   rotaters[x].spin();
  //   rotaters[x].display();
  // }
//   var point = {
//     x: mouseX,
//     y: mouseY
//   }
//   points.push(point);
//
//   if (points.length > 50) {
//   points.splice(0,1);
// }
//
// for (var i = 0; i < points.length; i++) {
//   noStroke();
//   fill(255-i*5);
//   ellipse(points[i].x,points[i].y,i,i);
// }
  textSize(32);
  text(score, width/2, 32);

  // while (p < 1000){
  //   blocks[p] = random(0, 20);
  //   p = p + 1;
  // }

  rect(rx, ry, rw, rh);

  textSize(32);
  text(ts, width/2, height/2);
  fill(116, 183, 187);
  ellipse(ex, ey, ed);

  ey = ey + speed;

  if((ey >= height) || (ey < 0)){
    speed = speed * -1;
  }
  if((ex >= width) || (ex < 0)){
    speed = speed * -1;
  }

  if(ex+50 > rx && ex < rx + rw + 50 && ey < ry + rh + 50 && ey+50 > ry) {
    background(255, 0, 0, 100);
    ts = "got heem";
    ed = ed *1.01
    // squareState = 0
    if(doonce == 1){
      score++;
      doonce = 0;
    }
  } else {
    background(255, 100);
    ts = "eat the block";
    doonce = 1;

  }

  if(keyIsPressed) {
    if(key == "w"){
      println("forward");
      ey-=speed;
    }
    if(key == "a"){
      println("left");
      ex-=speed;
    }
    if(key == "s"){
      println("back");
      ey+=speed;
    }
    if(key == "d"){
      println("right");
      ex+=speed;
    }
  }
  // for(var i=0; i<allSprites.length; i++) {
  // var s = allSprites[i];
  // if(s.position.x<0) {
  //   s.position.x = 1;
  //   s.velocity.x = abs(s.velocity.x);
  // }
  //
  // if(s.position.x>width) {
  //   s.position.x = width-1;
  //   s.velocity.x = -abs(s.velocity.x);
  //   }
  //
  // if(s.position.y<0) {
  //   s.position.y = 1;
  //   s.velocity.y = abs(s.velocity.y);
  // }
  //
  // if(s.position.y>height) {
  //   s.position.y = height-1;
  //   s.velocity.y = -abs(s.velocity.y);
  //   }
  // }
  //
  // drawSprites();

}
