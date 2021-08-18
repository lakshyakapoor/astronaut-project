var bath1img, bath;
var bath2img 
var brush,
var drink1 , drink2
var eat1,eat2
var gym1,gym2,gym11, gym12
var iss,
var move,
var move1,
var sleep,
var gamestate = "play"

function preload(){
  background=loadImage("iss.png")
  sleep = loadAnimaton("sleep.png")
  brush = loadAnimaton("brush.png")
  gym =loadAnimaton("gym1.png","gym2.png","gym11.png","gym12.png")
  eat = loadAnimaton("eat1.png","eat2.png")
  drink = loadAnimaton("drink1.png","drink2.png")
  move = loadAnimaton("move.png","move1.png")
}












function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
}