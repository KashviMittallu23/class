var player1, player2 ,shuttle,player1img
var gameState="serve";
var player1score=0;
var player2score=0;


function preload(){
  player1img=loadImage("racket1.png")
  player2img=loadImage("racket2.png")
  shuttleimg=loadImage("shuttle1.png")
}

function setup() {
  createCanvas(400,400);
  player1=createSprite(10,180,10,100);
 // player1.addImage(player1img)
  player2=createSprite(380,180,10,100);
  //player2.addImage(player2img)
  shuttle=createSprite(200,220,10,10)
  shuttle.addImage(shuttleimg)
  shuttle.scale=0.1

}

function draw() {
  background("green");
  textSize(15)
  fill("white")
  text("Player1:"+player1score,10,20)
  text("Player2:"+player2score,10,50)
  player2.y=World.mouseY;
  player1.y=shuttle.y;
  
  if (gameState==="serve"){
    text("Press space to start",150,200);
  }
  if(keyDown("space")&&gameState==="serve"){
    serveShuttle();
    gameState="play" ;
  }
  
  if(shuttle.x>400 || shuttle.x<0){
    if(shuttle.x>400){
      player1score=player1score+1;
    }
    if(shuttle.x<0){
      player2score=player2score+1;
    }
      reset();
      gameState="serve";
  }
  
    edges=createEdgeSprites();
    shuttle.bounceOff (edges[2]);
    shuttle.bounceOff(edges[3]);
    shuttle.bounceOff(player2);
    shuttle.bounceOff(player1);

 
  
  drawSprites();
}

function serveShuttle(){
  
    shuttle.velocityX=3;
    shuttle.velocityY=3;
    
  
}

function reset (){
  shuttle.x=200
  shuttle.y=200
  shuttle.velocityX=0
  shuttle.velocityY=0
}