class HomeScreen {


  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.welcome = createElement('h2');
    this.info = createElement('h2');
    this.title = createElement('h2');

    this.sD=createSprite(displayWidth/2 + 10, 130,width,height);
    this.sD.addImage("sd.png",sd_image);
    this.sD.scale = 0.05;
    this.enemy=createSprite( 200 , 200 , width , height );
    this.homeScreenPlayer=createSprite(1200,200,width,height);

    

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

    

    this.enemy.addImage("enemy.png",enemy_img);
    
    //this.enemy.display();    
    this.enemy.depth=3;
    
    this.homeScreenPlayer.addImage("player.gif",player_img);
    this.homeScreenPlayer.width=50;
    this.homeScreenPlayer.height=100;
    this.enemy.scale=0.5;
    this.homeScreenPlayer.scale=0.5;

   

    console.log(this.enemy.depth,this.homeScreenPlayer.depth);

    this.welcome.html("Hello Welcome To The game ")
    this.welcome.position(displayWidth/2 - 100, displayHeight/5);

    


    this.info.html(" To Start This Game Please Click On Play Button")
    this.info.position(displayWidth/2 - 180, displayHeight/4);


    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);


    this.button.position(displayWidth/2 + 20, displayHeight/2);
    

    this.button.mousePressed(()=>{
      gameState =1;
      
    });

    
    //enemy_img.height=300;
    //enemy_img.width=150; 

    drawSprites();
  }
    
}
