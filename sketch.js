/******************************************/
/* Pre-work assignment for Code the Dream */
/* Author: Alona Vladymyrova              */
/* Date: November 3, 2022                 */
/******************************************/

// declare any variables you need here.
// var x, y, etc..
// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.
var leftX = 10;
var rightX = 351;
var sunRadius = 70;
var x = 10;
var speed = 2;

function setup() {
  // create your canvas and define size here it's set to 500 x 500px you can also set any static shapes that won't need to be drawn here.
  createCanvas(400, 400);
}

function draw() {
  background(62, 150, 222);
  //call your functions and do your drawing here.
  // please erase code below once you are working.

  myHouse();
  cloudsAndSun();
  setTimeout(drawRain, 1000);
  //drawRain();
  movingСar();
}

// write functions here that are called in your setup or draw function. please remove this one.
var myHouse = () => {
  stroke(0, 0, 0);
  //roof
  fill(174, 180, 214);
  triangle(200, 28, 350, 150, 50, 150);
  //grass
  fill(19, 66, 26);
  rect(0, 306, 400, 94);
  /* this code is not working in p5js
var GrassCount = 0;
while (GrassCount<323) {
image(getImage("cute/GrassBlock"),GrassCount,280,83,120);
GrassCount+=80;
} */
  //walls
  fill(179, 120, 120);
  rect(60, 150, 280, 207);
  //bricks
  var x = 0;
  var y = 0;
  var brick = 9;
  for (var k = 0; k < 45; k++) {
    if (k < brick) {
      y += 0;
      x += 0;
    } else if (k % brick === 0) {
      y += 40;
      x -= 279;
    }
    rect(k * 31 + 60 + x, 150 + y, 31, 20);
  }
  var x1 = 0;
  var y1 = 0;
  var brick1 = 8;
  for (var k1 = 0; k1 < 40; k1++) {
    if (k1 < brick1) {
      y1 += 0;
      x1 += 0;
    } else if (k1 % brick1 === 0) {
      y1 += 40;
      x1 -= 248;
    }
    rect(k1 * 31 + 75 + x1, 170 + y1, 31, 20);
  }
  /*this code is not working in p5js
var x = 61;
var y = 117;
for (var k=0; k<6; k++) {
    for (var z=0; z<4; z++) {
    image(getImage("cute/StoneBlock"),k*46+x,z*40+y,49,120);
    }
}*/
  //door
  fill(176, 123, 44);
  rect(180, 280, 40, 77);
  //doorhandle
  fill(5, 5, 5);
  ellipse(192, 316, 5, 2);
  //windows
  fill(183, 247, 246);
  var xWindow = 89;
  var yWindow = 260;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
      if (i !== 1 || j !== 1) {
        rect(i * xWindow + 94, j * yWindow + 180, 36, 50);
        yWindow = 80;
      }
    }
  }
};

var cloudsAndSun = () => {
  noStroke();
  fill(255, 170, 0);
  ellipse(100, 50, sunRadius, sunRadius);

  // clouds
  fill(255, 255, 255);
  // left cloud
  ellipse(leftX, 63, 80, 65);
  ellipse(leftX + 40, 63, 50, 40);
  ellipse(leftX - 40, 63, 50, 40);

  // right cloud
  ellipse(rightX, 30, 80, 65);
  ellipse(rightX + 40, 30, 50, 40);
  ellipse(rightX - 40, 30, 50, 40);
  leftX += 1;
  rightX -= 1;
};

var drawRain = () => {
  var xPositions = [];
  var yPositions = [];
  for (var i = 0; i < 500; i++) {
    xPositions.push(random(1, 400));
    yPositions.push(random(1, 400));
  }
  var xSnowSize = [];
  var ySnowSize = [];
  for (var i = 0; i < 500; i++) {
    xSnowSize.push(random(1, 5));
    ySnowSize.push(random(1, 5));
  }
  var SnowColor = [];
  for (var i = 0; i < 500; i++) {
    SnowColor.push(0, 0, round(random(1, 255)));
  }

  noStroke();
  //background(204, 247, 255);
  for (var i = 0; i < xPositions.length; i++) {
    fill(SnowColor[i], SnowColor[i + 1], SnowColor[i + 2]);
    ellipse(xPositions[i], yPositions[i], xSnowSize[i], ySnowSize[i]);
    yPositions[i] += 1;
    if (yPositions[i] > 398) {
      yPositions[i] = 0;
    }
  }
};

var movingСar = () => {
  noStroke();
  // draw the car body
  fill(34, 0, 255);
  rect(x, 351, 100, 20);
  rect(x + 15, 328, 70, 40);

  // draw the wheels
  fill(77, 66, 66);
  ellipse(x + 25, 372, 24, 24);
  ellipse(x + 75, 372, 24, 24);
  if (x > 290) {
    speed = -1;
  }
  if (x < 25) {
    speed = 1;
  }
  x = x + speed;
};
