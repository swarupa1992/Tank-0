//m  code  c38 - 2/4/21
//Display 4 sprites on the screen as cars.

//MCR38 - new database

var canvas;
var allfighters;
var gameState = 0;
var fighterCount=0;

var database;

var form, fighter, battle;
var tank1,tank2,wall1,wall2,solider1,solider2;
var bullets,bulletsImg,bulletsGroup;
//var car1,car2,car3,car4,cars;


function preload() {

     bulletsImg = loadImage("images/bulletn.jpg");

}
function setup(){
  

  canvas = createCanvas(displayWidth-20,displayHeight-30);
  console.log("MCR battle started ....");
  console.log(displayWidth,displayHeight);
  console.log(windowWidth,windowHeight);
  database = firebase.database();

  battle = new Battle();
  battle.getState();
  battle.start();
  
  bulletsGroup = new Group();

  
}


function draw(){

  if(fighterCount === 2){

     battle.update(1);

  }

  if(gameState === 1){

       clear();
       battle.play();
       battle.firebullets();
  }

}//draw
