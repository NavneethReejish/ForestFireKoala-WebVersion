//declaring variables
var INFO = 5;
var INFO2 = 4;
var INFO3 = 3
var PLAY = 2;
var END = 1;
var WIN = 0;
var gameState = INFO;

//let gui;

var koala, koala_collided, koala_running, koala_jumping;
var PlayButton, playImg;
// var NextButton, NextButton2, nextImg;
var pg1Button, pg2Button, pg3Button, pg1Img, pg2Img, pg3Img;
// var PrevButton, prevImg;

var ground, bg1, bg2, bg1Image, bg2Image, WinScreen, winImg;
var bg1DeSat, bg2DeSat, bg1imgDeSat, bg2imgDeSat;
var obstacle, obstaclesGroup, obstacleAnime;
var JumpButton, JumpImg

var score = 0;

var gameOver, restart;


function preload() {

    //loading Images
    koala_running = loadAnimation("images/koala_walk01.png", "images/koala_walk02.png", "images/koala_walk03.png");

    koala_collided = loadAnimation("images/koala_idle@2x.png");
    koala_jumping = loadImage("images/koala_jump@2x.png");

     playImg = loadImage("images/Play.png");
    // nextImg = loadImage("images/next_IMG.png");
    // prevImg = loadImage("images/previous_image.png");

    pg1Img = loadImage("images/pg1.png");
    pg2Img = loadImage("images/pg2.png");
    pg3Img = loadImage("images/pg3.png");
    JumpImg = loadImage("images/JumpButton.png")

    winImg = loadImage("images/WINSCREEN.jpg");


    bg1Image = loadImage("images/bg1.png");
    bg2Image = loadImage("images/bg2.jpg");
    bg1imgDeSat = loadImage("images/bg1DeSaturated.png");
    bg2imgDeSat = loadImage("images/bg2DeSaturated.jpg");
    obstacleAnime = loadAnimation("images/Obstacles/Fire1.png", "images/Obstacles/Fire2.png", "images/Obstacles/Fire3.png", "images/Obstacles/Fire4.png");
    ;


}

function setup() {
    createCanvas(600, 400);
    ///gui = createGui();

    bg1 = createSprite(1000, 200, 1000, 400);
    
    bg1.addImage(bg1Image);
    bg1.scale = 1.9;
    
    
    //remove comments on below line - Velocity - Once the game development is finished.
    bg1.velocityX = -(6 + 3*score/100);
    //bg1.visible = false;

    //  bg2 = createSprite(1000,200,1000,400);
    //  bg2.addImage(bg2Image)
    // //  bg2.velocityX = -(6 + 3*score/100);
    //  bg2.visible = false;

     bg1DeSat = createSprite(300,200,1000,400);
     bg1DeSat.addImage(bg1imgDeSat);
     bg1DeSat.scale = 1.9;

     bg2DeSat = createSprite(300,200,1000,400);
     bg2DeSat.addImage(bg2imgDeSat);
     bg2DeSat.scale = 1.9;

     WinScreen = createSprite(300,200,500,400);
     WinScreen.addImage(winImg);
     WinScreen.scale = 0.83;
     WinScreen.visible = false;



    ground = createSprite(200, 320, 600, 20);
    ground.visible = false;

    koala = createSprite(50, 280, 20, 50);
    koala.addAnimation("running", koala_running);
    koala.scale = 0.4;
    koala.visible = true;

    // NextButton = createSprite(450, 340, 100, 50);
    // NextButton.addImage(nextImg);
    // NextButton.scale = 0.7;

    // NextButton2 = createSprite(200, 340, 100, 50);
    // NextButton2.addImage(nextImg);
    // NextButton2.scale = 0.7;
    // NextButton2.visible = false

    // PrevButton = createSprite(250,340,100,50);
    // PrevButton.addImage(prevImg);
    // PrevButton.scale = 0.7;
    // PrevButton.visible = false;

    PlayButton = createSprite(250, 250, 100, 50)
    PlayButton.addImage(playImg);
    PlayButton.scale = 0.7
    PlayButton.visible = false;

    pg1Button = createSprite(250,340,40,40);
    pg1Button.addImage(pg1Img);
    pg1Button.visible = false;

    pg2Button = createSprite(330,340,40,40);
    pg2Button.addImage(pg2Img);
    pg2Button.visible = false;

    pg3Button = createSprite(410,340,40,40);
    pg3Button.addImage(pg3Img);
    pg3Button.visible = false;

    JumpButton = createSprite(200,350,50,50);
    JumpButton.addImage(JumpImg);
    JumpButton.visible = false;
    JumpButton.scale = 1.1;

    obstaclesGroup = new Group();

    


    score = 0;

}

function draw() {
    background(83, 198, 25);
     //drawGui();
   let display = touches.length + ' touches';
   
    console.log(gameState);

    drawSprites();

    if (gameState === INFO) {
        //background(53,204,53);
        bg1.visible = false;
        bg1DeSat.visible = true;
        bg2DeSat.visible = false;
        pg1Button.visible = false;
        pg2Button.visible = true;
        pg3Button.visible = true;
        WinScreen.visible = false;
        JumpButton.visible = false;

        koala.visible = true;
        // NextButton.visible = true;
        // PrevButton.visible = false;
        PlayButton.visible = false;



        textSize(45);
        fill(255,255,255)
        text("Rescue Koala", 120,80)

        textSize(20);
        fill(255,255,255);
        text("Hi! I'm Koala!", 200, 170);
        text("I love my habitat, the Eucalptus forests in Australia.", 80, 210)

        // if (gameState === INFO && NextButton.visible === true && mousePressedOver(NextButton)) {
        //     gameState = INFO2;
        // }

        if (gameState === INFO && pg1Button.visible === true && mousePressedOver(pg1Button)) {
            gameState = INFO;
           
        }

        if (gameState === INFO && pg2Button.visible === true && mousePressedOver(pg2Button)) {
            gameState = INFO2;
           
        }

        if (gameState === INFO && pg3Button.visible === true && mousePressedOver(pg3Button)) {
            gameState = INFO3;
           
        }




    } else if (gameState === INFO2) {
        background(244, 141, 0);
        koala.visible = true;
        bg1.visible = false;
        bg1DeSat.visible = true;
        bg2DeSat.visible = false;
        WinScreen.visible = false;
        pg1Button.visible = true;
        pg2Button.visible = false;
        pg3Button.visible = true;
        // NextButton.visible = false;
        // NextButton2.visible = true;
        // PrevButton.visible = true;
        PlayButton.visible = false;
        JumpButton.visible = false;
        drawSprites();

        textSize(16.3);
        fill(255,255,255);
        text("The deadly, world-famous Australian bushfires occur in Australia's fire season.", 10, 90);
        text("Australia's fire season, is a particular period in the summer, with hot, dry weather.", 10, 120);
        text("Because of this weather, it becomes easy for blazes to start and", 10, 150);
        text("spread through dry brush.", 10, 180);
        text("Every Year, hundreds of koalas, just like me, die due to these fires.", 10, 210);

        // textSize(15);
        // fill(0, 0, 0);
        // text("Press Space key to go to the next page", 50, 350)
        // if (gameState === INFO2 && NextButton2.visible === true && mousePressedOver(NextButton2)) {
        //     gameState = INFO3;
        // }

        // if(gameState === INFO2 && PrevButton.visible === true && mousePressedOver(PrevButton)){
        //     gameState = INFO;
        // }

        if (gameState === INFO2 && pg1Button.visible === true && mousePressedOver(pg1Button)) {
            gameState = INFO;
            
        }

        if (gameState === INFO2 && pg2Button.visible === true && mousePressedOver(pg2Button)) {
            gameState = INFO2;
            
        }

        if (gameState === INFO2 && pg3Button.visible === true && mousePressedOver(pg3Button)) {
            gameState = INFO3;
          
        }

    } else if (gameState === INFO3) {
        koala.visible = true;
        bg1.visible = false;
        bg1DeSat.visible = true;
        bg2DeSat.visible = false;
        WinScreen.visible = false;
        JumpButton.visible = false;
        pg1Button.visible = true;
        pg2Button.visible = true;
        pg3Button.visible = false;
        // PrevButton.visible = true;
        // NextButton2.visible = false;
        PlayButton.visible = true;
        drawSprites();

        textSize(19);
        fill(255,255,255);
        text("Can you help me escape from the bushfires?", 15, 110);
        text("Avoid the fires by using the space bar.", 15, 150);
        text("You win, when you score 100 points.", 15, 190)
       

        // if(gameState === INFO3 && PrevButton.visible === true && mousePressedOver(PrevButton)){
        //     gameState = INFO2;
        // }

        if (gameState === INFO3 && PlayButton.visible === true && mousePressedOver(PlayButton)) {
            gameState = PLAY
            
        }

        if (gameState === INFO3 && pg1Button.visible === true && mousePressedOver(pg1Button)) {
            gameState = INFO;
            
        }

        if (gameState === INFO3 && pg2Button.visible === true && mousePressedOver(pg2Button)) {
            gameState = INFO2;
            
        }

        if (gameState === INFO3 && pg3Button.visible === true && mousePressedOver(pg3Button)) {
            gameState = INFO3;
            
        }








    } else if (gameState === PLAY) {
        background(255);
        bg1.visible = true;
        bg1DeSat.visible = false;
        bg2DeSat.visible = false;
        koala.visible = true;
        pg1Button.visible = false;
        pg2Button.visible = false;
        pg3Button.visible = false;
        obstaclesGroup.visible = true;
        PlayButton.visible = false;
        koala.visible = true;
        WinScreen.visible = false;
        JumpButton.visible = false;
        drawSprites();

        // obstaclesGroup.debug = true;

        //algorithm for score 
        score = score + Math.round(getFrameRate() / 63);

        // to produce illusion of moving objects.
        bg1.velocityX = -(6 + 3 * score / 100);

        // to make the koala jump when the space bar is pressed.
        if (keyDown("space") && koala.y >= 209 || gameState === PLAY && mousePressedOver(JumpButton) && koala.y >= 209) {
            koala.velocityY = -15;
            koala.changeAnimation("jumping", koala_jumping);
        }

       

        //gravity effect
        koala.velocityY = koala.velocityY + 0.8;

        // to make infinite background
        if (bg1.x < 0) {
            bg1.x = bg1.width / 2;
        }

        koala.collide(ground);
        spawnObstacles();

        // to make the player lose when the koala comes into contact with an obstacle.
        if (obstaclesGroup.isTouching(koala)) {
            gameState = END
        }


        // to make the player win when his score reaches 1 million.
        if (score >= 100) {
            gameState = WIN
        }

    } else if (gameState === END) {
        koala.visible = false;
        bg1DeSat.visible = false;
        bg2DeSat.visible = true;
        pg3Button.visible = true;
        WinScreen.visible = false;
        obstaclesGroup.visible = false;
        bg1.visible = false;
        JumpButton.visible = false;
        drawSprites();
     

        //background(252,7,7);

        textSize(30);
        fill(255,255,255);
        text("Game Over. The Koala Died.", 70,200);

        textSize(19);
        fill(255,255,255 );
        text("Try Again! There's more koalas wanting help!", 70,230);
       // text("Click or tap on the Turn to Page 3 button, to restart the game.", 70,270)

        //to stop all objects from moving
        // ground.velocityX = 0;
    
        // koala.velocityY = 0
         obstaclesGroup.destroyEach();

        // // to show a collided image of the koala, when he hits the obstacle.
        // koala.changeAnimation(koala_collided);

        // // infinite lifetime of objects, so that they are not destroyed.
        // obstaclesGroup.setLifetimeEach(-1);

        if (gameState === END && pg3Button.visible === true && mousePressedOver(pg3Button)) {
            gameState = INFO3;
            score = 0; 
            koala.visible = true;
            koala.x = 50;
            koala.y = 280;
            koala.collide(ground);
        }





     } else if (gameState === WIN) {
         bg1.visible = false;
         bg1DeSat.visible = false;
         bg2DeSat.visible = true;
         obstaclesGroup.visible = false;
         WinScreen.visible = true;
         koala.visible = true;
         JumpButton.visible = false;
         drawSprites();

         textSize(18)
         fill(255,255)
         text("You've saved me! Thank you so much!", 100,300);

     }

  
    text("Score: " + score, 500, 50);

    
}

function spawnObstacles() {
    // to spawn obstacles every 60 frames
    if (frameCount % 60 === 0) {
        obstacle = createSprite(570, 250, 20, 50);
        obstacle.velocityX = -(6 + 3 * score / 100);
    


        obstacle.addAnimation("fireburning",obstacleAnime)

        //add scale and lifetime to the obstacle
        obstacle.scale = 0.6;
        obstacle.lifetime = 300;

        // obstacle.debug = true;
        obstacle.setCollider("circle", 0,10,60);

        // add obstacles to ObstacleGroup
        obstaclesGroup.add(obstacle);
        obstaclesGroup.visible = false;

    }
}

 