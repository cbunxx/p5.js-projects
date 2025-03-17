function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(mouseX, mouseX, mouseY); //fix
  //background(50, 0, 200);
  strokeWeight(5);
  //noStroke();

   if(mouseIsPressed){
     //sun/moon that appears when pressed
    fill(250, 200, 100);
    circle(mouseX, mouseY - 100, 100);
  }

  //grass
  fill(150, 240, 10);
  rect(-2, 350, 704, 700); //x, y, width, length

  //ears
  fill(250);
  ellipse(455, 260, 30, 100);
  fill(250);
  ellipse(500, 260, 30, 100);

  //feet
  fill(250);
  ellipse(455, 455, 50, 30);
  fill(250);
  ellipse(495, 455, 50, 30);

  //body
  fill(200, 40, 0); //x1, y1, x2, y2, x3, y3, x4, y4
  quad(510, 350, 550, 450, 400, 450, 445, 350); //top right, bot right, bot left, top left

  //head
  fill(250);
  ellipse(476, 320, 105, 100); //x, y, width, heightish

  line(465, 340, 485, 350); // top x, top y, bot x, bot y
  line(485, 340, 465, 350); //switched x's

  line(448, 324, 448, 330);
  line(500, 324, 500, 330);
  
  
}


//holding down the mouse will turn every line green and a smaller weight until button is released
function mousePressed() {
  //this only works for strokes?
  stroke("green");
  strokeWeight(2);
}

//releasing the mouse button will turn stroke color to brown instead of original black
function mouseReleased() {
  stroke('brown');
  //fill('limegreen'); ?
  
}
