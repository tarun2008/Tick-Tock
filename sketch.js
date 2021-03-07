var sc;
var min;
var hr;

var scAngle;
var minAngle;
var hrAngle;

var point;

function setup() {
  createCanvas(600,800);
  
}

function draw() {
  background(0);
  
  textSize(100);
  fill(255,0,0);
  text(hr,70,700);

  textSize(100);
  fill(255,0,0);
  text(min,220,700);

  textSize(100);
  fill(255,0,0);
  text(sc,400,700);

  fill(255);
  text(":",185,690);
  text(":",335,690);

  hr = hour() % 12;
  min = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  noFill();
  stroke(0,255,0);
  strokeWeight(10);
  arc(300,300,360,360,-90,scAngle -90);

  stroke(0,0,255);
  strokeWeight(10);
  arc(300,300,340,340,-90,minAngle -90);

  stroke(255,0,0);
  strokeWeight(10);
  arc(300,300,320,320,-90,hrAngle -90);

  push();
  translate(300,300);
  rotate(scAngle -90);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  push();
  translate(300,300);
  rotate(minAngle -90);
  stroke(0,0,255);
  strokeWeight(8);
  line(0,0,125,0);
  pop();

  push();
  translate(300,300);
  rotate(hrAngle -90);
  stroke(255,0,0);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  stroke(hr*10,sc*4,min*4);
  fill(hr*10,sc*4,min*4);
  point = ellipse(300,300,20,20);

  drawSprites();
}