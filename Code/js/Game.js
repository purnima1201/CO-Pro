class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      homeScreen = new HomeScreen()
      homeScreen.display();
    }

    player1 = createSprite(100,200);
    player1.addAnimation("player.gif",player1_img);
    players = [player1];
  }

  play(){
    homeScreen.hide();
    
    Player.getPlayerInfo();
    
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      var index = 0;
      var x = 175 ;
      var y;
      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        players[index-1].x = x;
        players[index-1].y = y;

        if (index === player.index){
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y;
        }
       
        
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();}

    /*if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance +=10
      player.update();}

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();}

    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();}*/
    

    if(player.distance > 3860){
      gameState = 2;
      player.rank++;
      player.update();
    }
   
    drawSprites();
  }

  }
  
