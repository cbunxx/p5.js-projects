/*
Code Freeze: 3/6 5pm
I did not get everything I wanted done by this time. I was more focused on adding more complicated things instead of what needed to be prioritized. 

I'm going to code what I originally envisioned and then continue experimenting with this project after submission!

(I wish I had more time to add draggable elements, blinking animation, easing, and have hands instead of circles, but I am currently in the middle of the ocean...)
*/

let numTouches = 0;
let font1;
let state = 0;
let timer = 0;
let flag = false;

function preload() {
  font1 = loadFont("Assets/Miniver-Regular.ttf");
}

function setup() {
  createCanvas(400, 600);
  frameRate(60);

  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 255, 30);

  numTouches = touches.length;

  begin();
  if (flag && numTouches > 0) {
    state = 1;
  }
  drawSeal();

  noStroke();
  fill("pink");
  for (let touch of touches) {
    circle(touch.x, touch.y, 40); //replace with hands
  }
}

//function for the beginning state - mouse press ONCE
function begin() {
  //fade in
  frameRate(30);
  textFont(font1);

  let alpha = timer;
  timer++;
  if (timer > 60) {
    fill(255, 192, 203, alpha);
    textSize(21);
    text("Welcome to the seal petting simulation.", 30, 200);
  }

  alpha = 0;

  if (timer > 2 * 60) {
    //instructions

    fill(255, 192, 203, alpha + timer / 2);
    text("The belly is waiting to be scratched.", 30, 300);
  }

  if (timer > 3 * 60) {
    //click to begin - no fade, inspired by rhythm heaven
    fill(100);
    textFont("Times New Roman");
    text("Lets Begin.", 30, 400);
    flag = true;
  }
}

//if statement for mousepress to call function to change state once only
function mousePressed() {
  if (flag == true) {
    state = 1;
  }
}

function drawSeal() {
  //display next scene
  if (state == 1) {
    background("lightblue");

    fill(140);
    ellipse(200, 450, 400, 700);
    fill(155);
    ellipse(200, 430, 350, 650);
    fill(165);
    ellipse(200, 410, 300, 600);
    fill(169); //belly
    ellipse(200, 500, 280, 300);

    //snout
    fill(165);
    stroke(50);
    strokeWeight(3);
    arc(160, 210, 80, 30, 0, 190, OPEN);
    arc(240, 210, 80, 30, -10, 180, OPEN);

    noStroke();
    //nose
    fill(50);
    circle(200, 200, 12);

    let headHit = int(dist(mouseX, mouseY, 200, 200));
    let bellyHit = int(dist(mouseX, mouseY, 200, 530));

    if (numTouches < 3 && numTouches > 0 && headHit < 100) {
      headSeal();
    } else if (numTouches >= 3 && bellyHit < 200) {
      bellySeal();
    } else {
      idleSeal();
    }
  }
}

//animated
//function for drawing the seal, idle
function idleSeal() {
  //brows
  fill(140);
  circle(180, 160, 15);
  circle(220, 160, 15);

  //animate blinking cycle
  //eye
  fill(255);
  circle(161, 182, 30);
  circle(239, 182, 30);
  //pupil
  fill(50);
  circle(161, 182, 26);
  circle(239, 182, 26);

  //blink();
}

//function for drawing the seal, head hit detection
function headSeal() {
  //print("head")
  //brows
  fill(140);
  circle(180, 160, 15);
  circle(220, 160, 15);

  //eyes are happy
  fill(255);
  circle(161, 182, 30);
  circle(239, 182, 30);
  //pupil
  fill(50);
  circle(161, 182, 26);
  circle(239, 182, 26);

  fill(165);
  arc(161, 182, 31, 31, 0, 180);
  arc(239, 182, 31, 31, 0, 180);
  //add blush
  fill("pink");
  ellipse(130, 190, 20, 10);
  ellipse(270, 190, 20, 10);
}
//function for drawing the seal, belly hit detection
function bellySeal() {
  //print("belly");

  //brows
  fill(140);
  circle(180, 155, 15);
  circle(220, 155, 15);

  //eyes are closed and happy
  noFill();
  strokeWeight(3);
  stroke(50);
  arc(161, 192, 30, 40, 190, 0);
  arc(239, 192, 30, 40, 180, 0);

  //add silly
  push();
  noStroke();
  fill(255);
  fill("pink");
  ellipse(244, 230, 10, 15);
  pop();
  fill(165);
  arc(240, 210, 80, 30, -10, 180, OPEN);
}
