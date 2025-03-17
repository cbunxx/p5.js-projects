// Setup for avatar with two states that change upon click
// Flesh out the drawings and text in the two states!

let state = 1;

function setup() {
  createCanvas(400, 400); //webgl
  textSize(20);
  textWrap(WORD);
  frameRate(10);
}

function draw() {
  //state is changed when mouseisPressed() is called, then draw() loops to check constantly when state changes/mouse clicked
  
  drawAvatar(); //calls drawBg()
  resetMatrix();
  fill('gray');
  //text(mouseX + " " + mouseY, 50, 400); //mouse coordinates
}

function drawAvatar(){
    if (state == 1) { 
      drawBg('rgb(119,188,239)')
      noStroke();
    avatar1(); //display first drawing
  } else if (state == 2) {
    drawBg(0);
    noStroke();
    avatar2(); //display second drawing
  }
}

function avatar1() {
  fill(255); //white text
  text("Baby is a silly baikal seal with a deep\npassion for astronomy and an even deeper\nsecret... ", 10, 30);
  
  //ellipsoid(30, 40);
  fill('gray');
  ellipse(190, 270, 200, 100); //body
  
  //tail
  ellipse(300, 275, 50, 20); //bottom
  ellipse(300, 265, 30, 10); //middle
  ellipse(300, 255, 50, 20); //top
  
  fill('#636363');
  ellipse(195, 280, 50, 30);
  
  drawFace1();
}

function drawFace1(){
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(110, 270, 20, 20, 1, HALF_PI + QUARTER_PI+QUARTER_PI, OPEN);
  arc(123, 270, 20, 20, 0, HALF_PI+QUARTER_PI, OPEN);

  arc(135, 265, 20, 10, PI, TWO_PI); //eye
  
  fill(50);
  noStroke();
  rotate(-QUARTER_PI);
  ellipse(-95, 265, 8, 5); //brow
}

function drawFace2(){  
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(110, 270, 20, 20, 1, HALF_PI + QUARTER_PI+QUARTER_PI,         OPEN);
  arc(123, 270, 20, 20, 0, HALF_PI+QUARTER_PI, OPEN);
  
   fill('pink'); 
  noStroke();
  ellipse(116, 284, 6, 10);
  
  fill(50);
  rotate(-QUARTER_PI);
  ellipse(-95, 265, 8, 5); //brow
  ellipse(-90, 277, 20, 12); //eye
  fill(240);
  circle(-91, 275, 4);
}

function avatar2() {
  fill(225);
text("Baby is a silly baikal seal with a deep\npassion for astronomy and an even deeper\nsecret... She's an alien from planet GWEEP\non a mission to steal all of Earth's fish to\nfeed her 100 little brothers!", 10, 30);  
  
  fill('rgba(83,218,83,0.64)');
  ellipse(190, 270, 200, 100); //body
  //tail
  ellipse(300, 275, 50, 20); //bottom
  ellipse(300, 265, 30, 10); //middle
  ellipse(300, 255, 50, 20); //top
  
  ellipse(195, 280, 50, 30);
  
  rect(104, 225, 5, 20);
  rect(130, 225, 5, 20);
  
  drawFace2();
}

function drawOcean(x, y, widthVal, heightVal, startAngle, stopAngle, hue){
  noStroke();
  fill(hue);
  
  arc(x, y, widthVal, heightVal, startAngle, stopAngle); //x
  arc(x + 80, y, widthVal, heightVal, startAngle, stopAngle); //100
  arc(x + 160, y, widthVal, heightVal, startAngle, stopAngle); //180
  arc(x + 240, y, widthVal, heightVal, startAngle, stopAngle); //260
  arc(x + 320, y, widthVal, heightVal, startAngle, stopAngle); //340
  arc(x + 400, y, widthVal, heightVal, startAngle, stopAngle); //420
} 

function drawBg(colorVar){
  background(colorVar)
  let flag = true;
  fill('darkblue');
  rect(0, 210, 400, 50);
  
  let a = frameCount % 50;
  //text(a, 300, 100);

    if(a == 0){
      drawOcean(20 + a, 200, 100, 80, TWO_PI, PI, 'blue');
      drawOcean(5 + a, 180, 100, 80, TWO_PI, PI, 'lightblue');
    } else { //trying for reverse effect
      drawOcean(20 - a, 200, 100, 80, TWO_PI, PI, 'blue'); 
      drawOcean(5 - a, 180, 100, 80, TWO_PI, PI, 'lightblue');
    }

    if(state == 2){
       if(a == 0){
      drawOcean(1 + a, 160, 100, 80, TWO_PI, PI, 0); //night
      } 
      else{
        drawOcean(1 - a, 160, 100, 80, TWO_PI, PI, 0);
      }

    } else {  
      if (a == 0){
      drawOcean(1 + a, 160, 100, 80, TWO_PI, PI, 'rgb(119,188,239)'); //day
      } else{
        drawOcean(1 - a, 160, 100, 80, TWO_PI, PI, 'rgb(119,188,239)');
      }
     }
  
  fill(255);
  rect(0, 250, 400, 300); //snow
  
  // stroke('lightgray'); 
  // drawSparkles(); 
}

// function drawSparkles(){
//   let x = random(0,400);
//     let y = random(260,400);
  
//     line(x, y, x, y + 10); //32, 330, 32, 340
//     line(x-6, y+5, x+6, y+5); //26, 335, 38, 335
// }

function mousePressed() {
  if (state == 1) { //default
    state = 2; //when mouse is pressed, state changes to 2
  } else if (state == 2) {
    state = 1;
  }
  
}
