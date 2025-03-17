let state = 0;
let image1, image2, image3;
let sound1, sound2, sound3;
let soundFx;
let image1Width = 0;
let image1Height = 0;
let font1, font2, font3;

let wordArr = ["Here's artwork I made of my fav game", "Hello!\n My name is Chrissy", "and this is my favorite animal and musician!"];

function preload() {
  image1 = loadImage('Assets/Link_sketch.png');
  image2 = loadImage('Assets/happy-happy-happy-happy.gif');
  image3 = loadImage('Assets/20241122_010214925_iOS.jpg');
  
  sound1 = createAudio('Assets/Forest Beats 2.mp3');
  sound2 = createAudio('Assets/Lemon Chocolate_01.wav'); 
  sound3 = createAudio('Assets/Laufey - Bored_01.mp3'); 
  
  soundFx = createAudio('Assets/Yay Kids Crowd Sound Effect.mp3');
  
  font1 = loadFont('Assets/Jacquard12-Regular.ttf');
  font2 = loadFont('Assets/Miniver-Regular.ttf');
  font3 = loadFont('Assets/PrincessSofia-Regular.ttf');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  //textLeading()
  //rectMode(CENTER);
  textWrap(WORD);
  
}

function draw() {
  
  switch (state){
      case 0:
      sound3.stop();
      soundFx.autoplay();
      background(255, 195, 203);
      
    textSize(35);
       //background(255, 192, 203, 240);
      textFont(font2);
      fill('rgb(108,65,65)');
      textAlign(CENTER);
      textLeading(40);
      text(wordArr[1], 0, 0);
      
      textAlign(LEFT);
      textSize(15);
      text("song: Lemon Chocolate by Mitsukiyo", -width / 2 + 5, -height /2 +15);
      
      //shadow effect? 
      //  while(mousePressed== false){
      //   background(255, 192, 203, 240);
      //    print("works");
      //    translate(mouseX, mouseY)
      //   image(image2, -245, -250, 100, 100); //var, x y coordinates, width, 
      // } //another loop wouldn't work bc it will appear at once bc of draw()?
      
      push();
       //background(255, 192, 203, 10);
        translate(mouseX, mouseY)
        image(image2, -245, -250, 100, 100); //var, x y coordinates, width, height
        pop();
      
      
      sound2.loop(); //I switched cases around
      
      break;
      
    case 1:
      sound2.stop();
      background('rgb(230,191,232)');
     image1Width = image1.width;
     image1Height = image1.height;
      
      textAlign(CENTER);
       image(image1, -200, -150, width, height /2 + 100, 0, 0, image1Width, image1Height, CONTAIN); 
      //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight], [fit], [xAlign], [yAlign])
      
      textSize(50);
      textFont(font1);
      textLeading(330);
      fill(255);
      text(wordArr[0], -width /2 , -height /2 + 50, 400);
      
      textAlign(LEFT);
      textSize(15);
      text("song: Forest Beats by Chrissy", -width / 2 + 5, -height /2 +15);
      
      sound1.loop(); 
      
      break;
      
    case 2:
      sound1.stop();
      
      background('rgb(216,240,248)');
      
      
      push();
      rotateY(frameCount / 50);
      image(image3, -width /2 + 20, -height /2 , image3.width / 3, image3.height  / 3);
      pop();
      
      textFont(font3);
      textSize(30);
      fill(255);
      rect(-200, 100, 400, 80);
      fill(0);
      textAlign(CENTER);
      textLeading(30);
      text(wordArr[2], -200, 135, 400);
      
      textAlign(LEFT);
      textSize(15);
      text("song: Bored by Laufey", -width / 2 + 5, -height /2 +15);
      
      sound3.loop();
      
      break;
  }
}

/* 
//also seems to not work bc of the switch statement?
function mouseWheel(event) {
  
   if (event.delta > 0) { //scrolling down
     print("up");
    image1Width = image1.width + 10;
    image1Height = image1.height +10;
  } else { //scrolling up
    print("down");
    image1Width = image1.width - 10;
  image1Height = image1.height - 10;
  }

}
*/

function mousePressed(){
  state = (state + 1) % 3; 
  
}