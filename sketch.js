
var farmboy,farmgirl,pl_choice;
var boy,girl;
var game;
var form;
var soil;
var Cotton;
var gameState=0;
var line1,line2;
function preload(){
  farmboy = loadImage("Farmboy.png");
  farmgirl = loadImage("GirlFarm.png");
  Cotton = loadImage("Cotton.png");
  Paddy = loadImage("Paddy.png");
  Maize = loadImage("Maize.png");
 Oat= loadImage("Oats.png");
 Barley= loadImage("Barley.png");
 Mustard= loadImage("Mustard.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 // createSprite(400, 200, 50, 50);

  game = new Game();
  game.Start(); 
}
function draw() {
  background(255); 
  if(gameState==1){
    game.level1();
  }
  drawSprites();
}