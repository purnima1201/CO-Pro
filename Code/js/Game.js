class Game {
  constructor(){

  }

  

  async start(){
    if(gameState === 0){
      homeScreen = new HomeScreen()
      homeScreen.display();
    }

    player1 = createSprite(100,200);
    player1.addAnimation("player.gif",player1_img);
    player1.scale = 0.5;
  }

  play(){
    homeScreen.hide();
  
    background(rgb(198,135,103));
   
   
      
    //camera.position.x = displayWidth/2;
    //camera.position.y = player1.y;

    if(keyWentDown(UP_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityY = -3;
    }
    else if(keyWentUp(UP_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityY = 0;
    }

    if(keyWentDown(DOWN_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityY = 3;
    }
    else if(keyWentUp(DOWN_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityY = 0;
    }

    if(keyWentDown(LEFT_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityX = -3;
    }
    else if(keyWentUp(LEFT_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityX = 0;
    }

    if(keyWentDown(RIGHT_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityX = 3;
    }
    else if(keyWentUp(RIGHT_ARROW) ){
      console.log("here");
      console.log(player1.velocityY)
      player1.velocityX = 0;
    }
    
    drawSprites();
  }
}
  
