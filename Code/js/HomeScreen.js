class HomeScreen {


  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.welcome = createElement('h2');
    this.info = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton('Reset');
    this.sD=createSprite(displayWidth/2 + 10, 170,width,height);
    this.sD.addImage("sd.png",sd_image);
    this.enemy=createSprite( 200 , 200 , width , height );
    this.homeScreenPlayer=createSprite(350,200,width,height);

    

  }
  hide(){
    this.homeScreenPlayer.visible=false;
    this.enemy.visible=false;
    this.sD.visible=false;
    this.welcome.hide();
    this.info.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  
    


  display(){
    
    this.title.html("Co_Protection");
    this.title.position(displayWidth/2 - 50, 0);

    sd_image.height=200;
    sd_image.width=100;
    //this.sD.display();

    this.enemy.addImage("enemy.png",enemy_img);
    
    //this.enemy.display();    
    //this.enemy.depth=3;
    
    this.homeScreenPlayer.addImage("player.gif",player_img);
    this.homeScreenPlayer.width=50;
    this.homeScreenPlayer.height=100;
    this.homeScreenPlayer.scale=5;
    //this.homeScreenPlayer=2;

    //this.homeScreenPlayer.display();

    console.log(this.enemy.depth,this.homeScreenPlayer.depth);

    this.welcome.html("Hello Welcome To The game ")
    this.welcome.position(displayWidth/2 - 100, displayHeight/5);

    


    this.info.html(" To Start This Game Please Click On Play Button")
    this.info.position(displayWidth/2 - 180, displayHeight/4);


    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);


    this.button.position(displayWidth/2 + 20, displayHeight/2);
    
    

    this.reset.position(displayWidth-100,20);
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      
    });

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();      
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      });

    
    enemy_img.height=300;
    enemy_img.width=150; 

    drawSprites();
  }
    
}
