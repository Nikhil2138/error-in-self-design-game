var bg, longPlatformIMG, StrawHouseIMG;
var IdleMPAnim, RunningLSMPAnim, RunningRSMPAnim, JumpLSMPAnim, JumpRSMPAnim, DeadMPAnim, CherryAnim, GemAnim, BannerIMG, MusicOnButtonIMG, MusicOffButtonIMG;
var MP, LP1, LP2, LP3, LP4, PC1, PC2, banner, StrawHouse, MusicOnButton, MusicOffButton;
var gameState;
var bgMusic, bgMusicStatus;


function preload() {
  bg = loadImage("Assets/Main/bg/back.png");
  bgMusic = loadSound("Assets/Main/BgMusic/hurry_up_and_run.mp3");

  longPlatformIMG = loadImage("Assets/Main/Platforms/land-removebg-preview.png");
  StrawHouseIMG = loadImage("Assets/Main/Platforms/StrawHouse.png");
  BannerIMG = loadImage("Assets/Main/UI/Banner.png");
  MusicOnButtonIMG = loadImage("Assets/Main/UI/MusicOnButton.png");
  MusicOffButtonIMG = loadImage("Assets/Main/UI/MusicOffButton.png");
  RedButtonIMG = loadImage("Assets/Main/UI/RedButtons.png");
  BlueButtonIMG = loadImage("Assets/Main/UI/BlueButtons.png");
  YellowButtonIMG = loadImage("Assets/Main/UI/YellowButtons.png");
  GreenButtonIMG = loadImage("Assets/Main/UI/GreenButtons.png");
  PlayButtonIMG = loadImage("Assets/Main/UI/YEllowButton-removebg-preview (1).png");
  AboutButtonIMG = loadImage("Assets/Main/UI/Screenshot_2023-12-05_114137-removebg-preview (1).png");
  TutorialButtonIMG = loadImage("Assets/Main/UI/Screenshot_2023-12-05_115021-removebg-preview.png");
  TutorialIMG = loadImage("Assets/Main/UI/Tutorials.png");
  AboutIMG = loadImage("Assets/Main/UI/About.png");
  CrossButtonIMG = loadImage("Assets/Main/UI/CrossButton.png");
  PlatformIMG = loadImage("Assets/Main/Platforms/platform-removebg-preview.png");
  rightEndPlatformIMG = loadImage("Assets/Main/Platforms/landRightEnd-preview.png");
  leftEndPlatformIMG = loadImage("Assets/Main/Platforms/land-leftEnd-preview.png");

  IdleMPAnim = loadAnimation(
    "Assets/Main/MainPlayer/idle/player-idle-1.png",
    "Assets/Main/MainPlayer/idle/player-idle-2.png",
    "Assets/Main/MainPlayer/idle/player-idle-3.png",
    "Assets/Main/MainPlayer/idle/player-idle-4.png"
  );
  RunningRSMPAnim = loadAnimation(
    "Assets/Main/MainPlayer/running/RS/player-run-1.png",
    "Assets/Main/MainPlayer/running/RS/player-run-2.png",
    "Assets/Main/MainPlayer/running/RS/player-run-3.png",
    "Assets/Main/MainPlayer/running/RS/player-run-4.png",
    "Assets/Main/MainPlayer/running/RS/player-run-5.png",
    "Assets/Main/MainPlayer/running/RS/player-run-6.png"
  );
  RunningLSMPAnim = loadAnimation(
    "Assets/Main/MainPlayer/running/LS/image.png",
    "Assets/Main/MainPlayer/running/LS/image (1).png",
    "Assets/Main/MainPlayer/running/LS/image (2).png",
    "Assets/Main/MainPlayer/running/LS/image (3).png",
    "Assets/Main/MainPlayer/running/LS/image (4).png",
    "Assets/Main/MainPlayer/running/LS/image (5).png"
  );
  JumpRSMPAnim = loadAnimation(
    "Assets/Main/MainPlayer/jump/RS/player-jump-1.png",
    "Assets/Main/MainPlayer/jump/RS/player-fall.png"
  );
  JumpLSMPAnim = loadAnimation(
    "Assets/Main/MainPlayer/jump/LS/image.png",
    "Assets/Main/MainPlayer/jump/LS/image (1).png"
  );
  DeadMPAnim = loadAnimation(
    "Assets/Main/MainPlayer/dead/player-hurt-1.png",
    "Assets/Main/MainPlayer/dead/player-hurt-2.png"
  );
  CherryAnim = loadAnimation(
    "Assets/Main/items/cherry/cherry-1.png",
    "Assets/Main/items/cherry/cherry-2.png",
    "Assets/Main/items/cherry/cherry-3.png",
    "Assets/Main/items/cherry/cherry-4.png",
    "Assets/Main/items/cherry/cherry-5.png",
    "Assets/Main/items/cherry/cherry-6.png"
  );
  GemAnim = loadAnimation(
    "Assets/Main/items/gem/gem-1.png",
    "Assets/Main/items/gem/gem-2.png",
    "Assets/Main/items/gem/gem-3.png",
    "Assets/Main/items/gem/gem-4.png",
    "Assets/Main/items/gem/gem-5.png"
  );
  RunningRSBearAnim = loadImage(
    "Assets/Main/enemies/bear/RS/bear-walk1.png",
    "Assets/Main/enemies/bear/RS/bear-walk2.png",
    "Assets/Main/enemies/bear/RS/bear-walk3.png",
    "Assets/Main/enemies/bear/RS/bear-walk4.png"
  )
  RunningLSBearAnim = loadImage(
    "Assets/Main/enemies/bear/LS/image.png",
    "Assets/Main/enemies/bear/LS/image (1).png",
    "Assets/Main/enemies/bear/LS/image (2).png",
    "Assets/Main/enemies/bear/LS/image (3).png"
  )

}

function setup() {
  createCanvas(1520,750);
  bgMusic.play();
  bgMusic.loop();

  LP1 = createSprite(160,500,100,100);
  LP1.addImage("platform",longPlatformIMG);
  LP1.scale = 2;

  LP2 = createSprite(900,500,100,100);
  LP2.addImage("platform",longPlatformIMG);
  LP2.scale = 2;

  LP3 = createSprite(1640,500,100,100);
  LP3.addImage("REplatform",rightEndPlatformIMG);
  LP3.scale = 2;

  LP4 = createSprite(2500,500,100,100);
  LP4.addImage("LEplatform",leftEndPlatformIMG);
  LP4.scale = 2;
  
  LP5 = createSprite(3240,500,100,100);
  LP5.addImage("platform",longPlatformIMG);
  LP5.scale = 2;

  LP4 = createSprite(2500,500,100,100);
  LP4.addImage("LEplatform",leftEndPlatformIMG);
  LP4.scale = 2;

  StrawHouse = createSprite(10,520,30,100);
  StrawHouse.addAnimation("StrawHouse", StrawHouseIMG);
  StrawHouse.scale = 2.4;

  MP = createSprite(300,570,30,100);
  MP.addAnimation("idle",IdleMPAnim);
  MP.addAnimation("runningRS",RunningRSMPAnim);
  MP.addAnimation("runningLS",RunningLSMPAnim);
  MP.addAnimation("JumpingRS",JumpRSMPAnim);
  MP.addAnimation("JumpingLS",JumpLSMPAnim);
  MP.addAnimation("dead",DeadMPAnim);
  MP.scale = 4;

  PC1 = createSprite(width/2,650,width+800,20);
  PC1.visible = false;

  PC2 = createSprite(width/2,630,width+800,20);
  PC2.visible = false;

  PC3 = createSprite(width*2-80,650,width,20);
  PC3.visible = false;

  PC4 = createSprite(width*2-80,630,width,20);
  PC4.visible = false;

  PC5 = createSprite(1210,440,280,20);
  PC5.visible = false;

  PC6 = createSprite(1210,420,280,20);
  PC6.visible = false;

  platform = createSprite(1200,430);
  PlatformIMG.resize(300,50)
  platform.addImage("plt",PlatformIMG);

  gameState = 0;

  bgMusicStatus = true;

  banner = createSprite(width/2,160);
  banner.addImage("banner",BannerIMG);
  banner.scale = 1.8;
 
  MusicButton = createSprite(width-60,60);
  MusicButton.addImage("On",MusicOnButtonIMG);
  MusicButton.scale = 0.6;

  PlayButtonIMG.resize(1080,220)
  PlayButton = createSprite(width/2,420,100,100);
  PlayButton.addImage("plyBtn",PlayButtonIMG);
  PlayButton.scale = 0.7;

  TutorialButtonIMG.resize(680,100);
  TutorialButton = createSprite(width/2+15,500);
  TutorialButton.addImage("TutrialBtn",TutorialButtonIMG);

  AboutButtonIMG.resize(960,140);
  AboutButton = createSprite(width/2+20,580);
  AboutButton.addImage("AbtBtn",AboutButtonIMG);
  AboutButton.scale = 0.7;

  Tutorial = createSprite(width/2,height/2);
  Tutorial.addImage("Tutrial",TutorialIMG);
  Tutorial.scale = 0.65;
  Tutorial.visible = false;

  About = createSprite(width/2,height/2);
  About.addImage("About",AboutIMG);
  About.scale = 0.65;
  About.visible = false;

  CrossButton = createSprite(width/2+350,40);
  CrossButton.addImage("Cross",CrossButtonIMG);
  CrossButton.scale = 0.6;
  CrossButton.visible = false;
}

function draw() {
  background(bg);

  if(gameState == 0){

    MP.visible = false;
    LP1.visible = false;
    LP2.visible = false;
    LP3.visible = false;
    LP4.visible = false;
    LP5.visible = false;
    platform.visible = false;
    StrawHouse.visible = false; 
    
    if(mousePressedOver(PlayButton)){
      banner.destroy();
      PlayButton.destroy();
      AboutButton.destroy();
      TutorialButton.destroy();

      Tutorial.destroy();
      CrossButton.destroy();
      About.destroy();
      gameState = 1;
    }
    if(mousePressedOver(TutorialButton)){
      Tutorial.visible = true;
      CrossButton.visible = true;
    }
    if(mousePressedOver(AboutButton)){
      About.visible = true;
      CrossButton.visible = true;
    }
    if(mousePressedOver(CrossButton)){
      Tutorial.visible = false;
      CrossButton.visible = false;
      About.visible = false;
    }
    if(mousePressedOver(MusicButton)){
      if(bgMusicStatus){
        bgMusic.stop();
      }else{
        bgMusic.play();
      }
    }

  }
  if(gameState == 1){

    MP.visible = true;
    LP1.visible = true;
    LP2.visible = true;  
    LP3.visible = true;
    LP4.visible = true;
    LP5.visible = true;
    platform.visible = true;
    StrawHouse.visible = true;
    
    if(MP.y > height){
      gameState = 2;
    }
    MPMovement();
  }

  console.log(bgMusicStatus)

  drawSprites();
}

function MPMovement(){
  
  //Fixing Animation Bug
  if(MP.isTouching(PC2) || MP.isTouching(PC4)){
    MP.changeAnimation("idle");
  }

  // Basic Movement
  if(keyDown("d") || keyDown("RIGHT_ARROW") ){
    LP1.x -= 5;
    LP2.x -= 5;
    LP3.x -= 5;
    LP4.x -= 5;
    LP5.x -= 5;
    PC1.x -= 5;
    PC2.x -= 5;
    PC3.x -= 5;
    PC4.x -= 5;
    PC5.x -= 5;
    PC6.x -= 5;
    platform.x -= 5;
    StrawHouse.x -= 5;
    MP.changeAnimation("runningRS");
  }
  if(keyDown("a") || keyDown("LEFT_ARROW") && LP1.x < 295){
    LP1.x += 5;
    LP2.x += 5;
    LP3.x += 5;
    LP4.x += 5;
    LP5.x += 5;
    PC1.x += 5;
    PC2.x += 5;
    PC3.x += 5;
    PC4.x += 5;
    PC5.x += 5;
    PC6.x += 5;
    platform.x += 5;
    StrawHouse.x += 5;
    MP.changeAnimation("runningLS");
  }
  if(MP.isTouching(PC2) && keyDown("space")){
    MP.changeAnimation("JumpingRS",JumpRSMPAnim);
    MP.velocityY = -15;
  } 
  if(MP.isTouching(PC2) && keyDown("UP_ARROW")){
    MP.changeAnimation("JumpingRS",JumpRSMPAnim);
    MP.velocityY = -15;
  } 
  if(MP.isTouching(PC4)  && keyDown("space")){
    MP.changeAnimation("JumpingRS",JumpRSMPAnim);
    MP.velocityY = -15;
  } 
  if(MP.isTouching(PC4)  && keyDown("UP_ARROW")){
    MP.changeAnimation("JumpingRS",JumpRSMPAnim);
    MP.velocityY = -15;
  } 
  if(MP.isTouching(PC6)  && keyDown("space")){
    MP.changeAnimation("JumpingRS",JumpRSMPAnim);
    MP.velocityY = -15;
  } 
  if(MP.isTouching(PC6)  && keyDown("UP_ARROW")){
    MP.changeAnimation("JumpingRS",JumpRSMPAnim);
    MP.velocityY = -15;
  } 


  //Solving Some animation bug
  if(keyWentUp("a") || keyWentUp("LEFT_ARROW") || keyWentUp("d") || keyWentUp("RIGHT_ARROW")){
    MP.changeAnimation("idle");
  }

  if(!MP.isTouching(PC2) && !MP.isTouching(PC4) && !MP.isTouching(PC6)){
    MP.changeAnimation("JumpingRS",JumpRSMPAnim);
  }
  if(!MP.isTouching(PC2) && keyDown("LEFT_ARROW")){
    MP.changeAnimation("JumpingLS",JumpLSMPAnim);
  }
  if(!MP.isTouching(PC2) && keyDown("a")){
    MP.changeAnimation("JumpingLS",JumpLSMPAnim);
  }
  if(!MP.isTouching(PC4) && keyDown("LEFT_ARROW")){
    MP.changeAnimation("JumpingLS",JumpLSMPAnim);
  }
  if(!MP.isTouching(PC4) && keyDown("a")){
    MP.changeAnimation("JumpingLS",JumpLSMPAnim);
  }
  if(!MP.isTouching(PC6) && keyDown("LEFT_ARROW")){
    MP.changeAnimation("JumpingLS",JumpLSMPAnim);
  }
  if(!MP.isTouching(PC6) && keyDown("a")){
    MP.changeAnimation("JumpingLS",JumpLSMPAnim);
  }
  if(MP.isTouching(PC2) && keyDown("LEFT_ARROW")){
    MP.changeAnimation("runningLS");
  }
  if(MP.isTouching(PC2) && keyDown("a")){
    MP.changeAnimation("runningLS");
  }  
  if(MP.isTouching(PC4) && keyDown("LEFT_ARROW")){
    MP.changeAnimation("runningLS");
  }
  if(MP.isTouching(PC4) && keyDown("a")){
    MP.changeAnimation("runningLS");
  }  
  if(MP.isTouching(PC6) && keyDown("LEFT_ARROW")){
    MP.changeAnimation("runningLS");
  }
  if(MP.isTouching(PC6) && keyDown("a")){
    MP.changeAnimation("runningLS");
  }  
  if(keyDown("a") && keyDown("d")){
    MP.changeAnimation("idle");
  }
  if(keyDown("LEFT_ARROW") && keyDown("RIGHT_ARROW") ){
    MP.changeAnimation("idle");
  }
  if(keyDown("a") && keyDown("RIGHT_ARROW") ){
    MP.changeAnimation("idle");
  }
  if(keyDown("LEFT_ARROW") && keyDown("d") ){
    MP.changeAnimation("idle");
  }
  //Adding Gravity
  MP.velocityY += 0.5;
  MP.collide(PC1);
  MP.collide(PC3);
  MP.collide(PC5);
}

function bgStatusFalse(){
  bgMusicStatus = false;
}

function createMusicOffButton(){
  MusicOffButton = createSprite(width-60,60);
  MusicOffButton.addImage("Off",MusicOffButtonIMG);
  MusicOffButton.scale = 0.6;
}

function createMusicOnButton(){
  MusicOnButton = createSprite(width-60,60);
  MusicOnButton.addImage("On",MusicOnButtonIMG);
  MusicOnButton.scale = 0.6;
}