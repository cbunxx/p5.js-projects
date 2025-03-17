let state = 0;
let cosVal = 0;
let sinVal = 0;

let x1 = 50; 
let x2 = 50; 
let y1 = 50;
let y2 = 50;
let easeAmount = 0.05;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  colorMode(HSB);
}

function draw() {
  
  switch(state) {
    case 0:
      //resetMatrix();
      pattern0();
      break;
    case 1:
      pattern1();
      break;
    case 2:
      pattern2();
      break;
    case 3:
      pattern3();
      break;
    case 4:
      translate(300,300);
      rotate(frameCount / 30);
      pattern4();
      break;
  }
  
  
}

function pattern0() {
  background(mouseX /2, 70, 100); //change colors
  stroke('black');
  strokeWeight(5);
  frameRate(10);
  
  //nested loops allow for the shape to be drawn i*j times
  let x = 0;
  for(let i = 0; i < 30; i++){ //rows    
    for (let j = 0; j < 30; j++){ //cols
      //fill(random(50, 100), random(100, 255), 100);
      fill(x, 100, 100);
      square(j*40 + 22, i*40 + 15, random(25, 40)); 
      x = x + 20;
    }
    x = 0;
  }
  
  
}

function pattern1() {
  background(255); 
  //multicolored squares
  frameRate(3);
  noStroke();
  
  let sqSize = 550;
  for(let i = 0; i < 10; i++){
    
    let myHue = random(0, 300);
    let sat = random(35, 75);
    let bright = random(70, 90);
    
    fill(myHue, sat, bright);
    square(300, 300, sqSize, mouseX / 2, mouseX /2, mouseX /2, mouseX/2);
    sqSize = sqSize - 50;
  }
  
  
}

function pattern2() {
  background('pink'); 
  frameRate(30);
  noFill('pink');
  stroke('white');
  strokeWeight(10);
  
  let x = 0;
  let y = -150;
  
  rotate(QUARTER_PI);
  for(let i = 0; i < 30; i++){
    for(let j = 0; j < 10; j++){
      arc(x, y, 100, 100, TWO_PI, PI);
      x = x + 100;
    }
    
    x = 0;
    if (i % 2 == 0){
       x = x + 40;
    }else {
      x = 0;
    }
    y = y + 50;
  }
  resetMatrix();
  
  circle(width - 100, 100, 110);
   fill(255);
  // stroke(100);
  //circle(width - 100, 100, 50); //eye
  
  x1 = mouseX; 
  y1 = mouseY;
  easeTo();
  
}

function easeTo() {
  x2 += (x1 - x2) * easeAmount;
  y2 += (y1 - y2) * easeAmount;
  //fill(50);

  let xc = constrain(x2, width - 120, 520);
  let xy = constrain(y2, 80, 120);
  circle(xc, xy, 50);
  // ellipse(x2, y2, 50, 50);
}


function pattern3() {
 background('orange');
  frameRate(10);
  noStroke();
  
  let loopCount = 0;
   let whiteCol = map(mouseX/4, 0, 100, 0, 255);
  let blackCol = map(mouseY/4, 0, 100, 100, 0);
  
    for(let i = 0; i < 40; i++){ //rows  
      
      for (let j = 0; j < 40; j++){ //cols
      
        if(loopCount % 2 == 0){
          
          fill(whiteCol);
        }
        else{
          fill(blackCol);
        }
        circle(i*20 + 10, j*20 + 10, 20); 
        loopCount++;
      }
      loopCount++;
  }
}

function pattern4() {
  frameRate(30);
  background(200);
    
   noFill();
  strokeWeight(5);
  stroke(0);
   //circle(0,0, 540);
   circle(0,0, 120);
  
  //sort of bullseye pattern
//      let radius = 120;
//    fill(0);
//     for(let i = 0; i <6; i++){
//     circle(0, 0, radius);
    
//     if(i % 2 == 0){
//       stroke(225);
//     }else{
//       stroke(0);
//     }
      
//     radius = radius - 20;
//   }
  
  fill(0);

  drawPetals1(-110, 0, 100);
  drawPetals1(110, 0, 100);
  drawPetals2(0, -110, 100);
  drawPetals2(0, 110, 100);
    
  drawPetals2(-350, 0, 200);
  drawPetals2(350, 0, 200);
  drawPetals1(0, -350, 200);
  drawPetals1(0, 350, 200);
  
  drawPetals1(-150, -150, 150);
  drawPetals1(150, -150, 150);
  drawPetals2(-150, 150, 150);
  drawPetals2(150, 150, 150);
  
  //spiral - does not add up/stay on the canvas
  /*
  cosVal = 10 * cos(frameCount * 0.05);
  sinVal = 10 * sin(frameCount * 0.05);
   circle(cosVal * frameCount /20, sinVal * frameCount /20, 20);
  //circle( 100 + x * frameCount /20, 100 + y * frameCount /20, 20);
  */ 

}

function drawPetals1(xVal, yVal, size){
    square(xVal, yVal, size, abs(50 * cos(frameCount * 0.05)), abs(50 * sin(frameCount * 0.05)), abs(50 *cos(frameCount * 0.05)), abs(50 * sin(frameCount * 0.05)));
  

}

function drawPetals2(xVal, yVal, size){
   square(xVal, yVal, size, abs(50 * sin(frameCount * 0.05)), abs(50 * cos(frameCount * 0.05)), abs(50 * sin(frameCount * 0.05)), abs(50 * cos(frameCount * 0.05))); 

}

function mousePressed(){
  state = (state + 1) % 5; 
  
}