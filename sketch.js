var stars = [];
var speed;
let img;
let circleCount = 100;
let circles = [];
let burstCircles = [];
let ship;
var tunes,tunes2, rev;

function preload(){
nightgif=loadImage('WBVk.gif');
ship=loadImage('ship for travel.png');
tunes = loadSound('748404__viramiller__galactic-space-journey.mp3');
tunes2 = loadSound('ground control.mp3');
  rev=loadSound('REV.wav');
}


function setup() {
  createCanvas(windowWidth, windowHeight);  
  for (var i = 0; i < 2000; i++) {
    stars[i] = new Star();
  }
    tunes2.play(); //soundtrack
  tunes2. setVolume (5)
}

function draw() {
  //stars go by
  speed = map(mouseX, 0, width, 75, 75);//speed
  background(50);
image(nightgif, 0, 0,width,height);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
        image(ship,mouseX-500,mouseY-150,750,300);
  // Draw and update burst circles
  for (let i = burstCircles.length - 1; i >= 0; i--) {
    let burstCircle = burstCircles[i];

    // Update burst circle position
    burstCircle.x += burstCircle.speedX;
    burstCircle.y += burstCircle.speedY;

    // Decrease size over time
    burstCircle.size *= 0.95;

    // Remove burst circle if it gets too small
    if (burstCircle.size < 1) {
      burstCircles.splice(i, 1);
    } else {
      // Draw the burst circle
      noStroke();
      fill(burstCircle.color);
      ellipse(burstCircle.x, burstCircle.y, burstCircle.size, burstCircle.size);
    }
  }
  
  
  
    //gif play
function mouseReleased() {
  nightgif.play();
}
}


function mousePressed() {
  // Create burst circles when the mouse is clicked
    rev.play();
    rev. setVolume (5)

  let burstCount = 50;
  for (let i = 0; i < burstCount; i++) {
    let x = mouseX;
    let y = mouseY;
    let size = random(10, 20);
    let speedX = random(-5, 5);
    let speedY = random(-5, 5);
    let color = (random(0,255), random(0,255), random(0,255), 255);
    burstCircles.push({ x, y, size, speedX, speedY, color });
  }  
  
}

function mouseMoved(){
    if (tunes.isLoaded()) {
    tunes.play();
  }  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}