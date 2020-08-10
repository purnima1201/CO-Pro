var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var homeScreen, player, game,player1,players,sd_image,sD,player_img;

var player1_img,player2_img;
function preload(){
  player_img=loadImage("images/player.gif")
  enemy_img = loadImage("images/enemy.png");
  sd_image = loadImage("images/sd.png");
  player1_img = loadAnimation("images/player1.png","images/player2.png");
}
var player_img;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.start();
}


function draw(){
  

  
  if(gameState == 1){
    clear();
    game.play();
  }
  if(gameState == 2){
    game.end();
  }
}
