
// Screens
const LOADING = 0;
const MAIN_MENU = 1;
const PLAYLOAD = 2;
const PLAY = 3;
const HIGH_SCORE = 4;
const SETTINGS = 5;
let currentScreen = LOADING;
let currentButton;

//loading
let loadingCounter = 0;
let s = "BSU productions presents";
let newPoint = true;
let intro;
let wait = 0; 
let waitCount = false;

//pictures
let imgBackground;
let logo; 
let startNew;
let startNewH;
let highScores;
let highScoresH;
let settings;
let settingsH;
let shipImg;
let ShipRezised;
let shipBullet;
let enemy;
let life;
let gameoverImg;
let playAgain;
let yesH;
let yes;
let no;
let noH;
let main_menubtn;

//sounds
let shootingSound;
let destroyedSound;
let gameoverSound;
let introSound;
let vol = 1;
let mute = false;

// PLAYLOAD
let sinus = 0; 
let logoSpeed = 0;

//Sprites
let ship;
let moveX;
let enemies;
let bullets;

//constraints
let xConstrainMin;
let xConstrainMax;


// play
let wave = 1;
let score = 000; 
let allDead = true;
let opacityText = 300;
let shotsUsed = 0;
let enemiesDead = 0; 
let perfectScore = 100; 
let scoreForEnemies = 100;
let lifes = 3;
let gameover = false;
let first = true;

//highscores
let database; 
let name = "PLAYER 1";  
let scoreSaved = 0;
let percentageSaved = 0;
let highscoreArray = [];
let highscoreArraySorted = [];
let scoreArray =[]; 
let string = "";
let pressingVar = true;


function preload() {
  introSound = loadSound("sounds/montypythonsound.mp3");
  intro = createVideo('videoes/Clip.MP4');
  database = loadJSON("data.json");

}


function setup() {
  // put setup code here
  frameRate(60);
  createCanvas(windowWidth, windowHeight-5);
  currentButton = 0;
  currentButton = constrain(currentButton, 0, 2);
  bullets = new Group;
  enemies = new Group;
  xConstrainMax = width/ 1.5;
  xConstrainMin = width/4;
  
  noCursor();

  // images
  imgBackground = loadImage("images/backgroundpng.png");
  logo = loadImage("images/galagaPng.png");
  startNew = loadImage("images/startNewGame.png");
  startNewH = loadImage("images/startNewGameHighlighted.png");
  highScores = loadImage("images/highscores.png");
  highScoresH = loadImage("images/highscoresHighlighted.png");
  settings = loadImage("images/settings.png");
  settingsH = loadImage("images/settingsHighlighted.png");
  shipImg = loadImage("images/galagaShip.png");
  shipBullet = loadImage("images/galagaShot.png");
  enemy = loadImage("images/enemy.png");
  life = loadImage("images/life.png");
  gameoverImg = loadImage("images/gameoverLarge.jpg");
  playAgain = loadImage("images/playagain.png");
  yesH = loadImage("images/yesH.png");
  yes = loadImage("images/yes.png");
  noH = loadImage("images/noH.png");
  no = loadImage("images/no.png");
  main_menubtn = loadImage("images/main_menubtn.png");

  // sounds
  shootingSound = loadSound("sounds/laser_fastshot.wav");
  destroyedSound = loadSound("sounds/fighter_destroyed.wav");
  gameoverSound = loadSound("sounds/captured_ship_destroyed.wav");
  
  

  //videos
 
  intro.hide();

  ShipRezised = shipImg//.resize(20, 20);

  // spirtes
  moveX =width/2 -50;
  ship = createSprite(moveX, height - 100, 40,40);
  ship.addImage(ShipRezised);
  


}

function draw() {
  // put drawing code here
  

 switch (currentScreen) {
   case LOADING:
     drawLoadingScreen();
     break;
  case(MAIN_MENU):
    drawMainMenuScreen();
    break;
  case(PLAYLOAD):
    drawPlayLoadScreen();
    break;
  case (PLAY):
    drawPlayScreen();
    break;
  case(HIGH_SCORE):
  
    drawHighScoreScreen();
    break;
  case(SETTINGS):
    drawSettingsScreen();
    break;
   default:
     break;
 }
	
 
  		
  
}


function drawLoadingScreen(){
background(0,0,0);
image(imgBackground, 0, 0, width, height);
image(intro, 0, 0, width, height);
image(logo, width/2 -300, height/5, 500, 200);

if(first){
  if(!mute){introSound.play();}

intro.play();

first = false;
}

fill(50);
textSize(32);
loadingCounter = constrain(loadingCounter, 0, 100);
if((frameCount % 8 == 0 && loadingCounter <100) && !waitCount){loadingCounter++};

text("Loading " + loadingCounter +"%", width/2-140, height/2 + 50);

text(s, width/2-290 - loadingCounter/2, height/2 -220);
if((loadingCounter === 10 || loadingCounter === 40 || loadingCounter === 70)&& newPoint == true ){
  s += ".";
  newPoint = false;

}
if(loadingCounter === 11 || loadingCounter === 41 || loadingCounter === 71 ){
  newPoint = true;
  
}

if (loadingCounter == 100){
  
  waitCount = true;
  }
if(waitCount == true){
  wait++;
}
if (wait > 100){
  loadingCounter = 0;
  
  currentScreen = MAIN_MENU;
}
}

function drawMainMenuScreen(){
  vol -= 0.1;
  vol = constrain(vol, 0, 1);
  introSound.setVolume(0, 2, 0);
  background(0,0,0);
  image(imgBackground, 0, 0, width, height);
  image(logo, width/2 -300, height/15 -10, 500, 200);
  if(currentButton == 0){
    image(startNewH, width/2-150, height/3, 200,100);
    
    image(highScores, width/2-150, height/3 +110, 200,100);
    image(settings, width/2-150, height/3 + 220, 200,100);
  }
  else if(currentButton == 1){
    image(startNew, width/2-150, height/3, 200,100);
    
    image(highScoresH, width/2-150, height/3 +110, 200,100);
    image(settings, width/2-150, height/3 + 220, 200,100);
  }
  else if(currentButton == 2){
    image(startNew, width/2-150, height/3, 200,100);
    
    image(highScores, width/2-150, height/3 +110, 200,100);
    image(settingsH, width/2-150, height/3 + 220, 200,100);
  }
  

}
//|| keyCode == SPACE
function keyPressed(){
  if(currentScreen == MAIN_MENU){
    if(keyCode == ENTER ){
      changeHiglight(currentButton);
    }
    else if (keyCode == 0 || keyCode == 32){
      changeHiglight(currentButton);
    }
    else if(keyCode == UP_ARROW){
     
      currentButton--;
      
      currentButton = constrain(currentButton, 0,2);
    }
    else if (keyCode == DOWN_ARROW) {
      
      currentButton++;
      
      currentButton = constrain(currentButton, 0,2);
    }

  }
  if(currentScreen == PLAY){
    if(keyCode == 32){
      let shot = createSprite(moveX, height -100);
      shot.addImage(shipBullet);
      shot.addSpeed(4, 270);
      shot.scale = 1;
      bullets.add(shot);
      shotsUsed++;
      
      shootingSound.play();
      shootingSound.setVolume(0.2);

      score -= 10;
      score = constrain(score, 0, 9999999);
      
    }/*
    if(keyCode == RIGHT_ARROW){
      moveX++;
    }*/
  
  if(gameover ){
      if(keyCode == ENTER ){
        resettOrNah(currentButton);
      }
      if(keyCode == 0 || keyCode == 32){
        resettOrNah(currentButton);
      }
      if(keyCode == LEFT_ARROW){
     
        currentButton--;
      
        currentButton = constrain(currentButton, 0,1);
      }
      if (keyCode == RIGHT_ARROW) {
      
        currentButton++;
      
        currentButton = constrain(currentButton, 0,1);
      }

    }
  }
  else if(currentScreen == HIGH_SCORE){
    if( (keyCode == 32|| keyCode == ENTER) && !first){
      
      currentScreen = MAIN_MENU;
      first = true;
      pressingVar = true;
      
    }
  }


}

function changeHiglight(condition) {
  switch (condition) {
    case 0:
      currentScreen = PLAYLOAD;
      break;
    case 1:
      
      currentScreen = HIGH_SCORE;
      
      break;
    case 2:
      
        currentScreen = SETTINGS;

      break;
   
  }
}

function drawPlayLoadScreen() {
  background(0,0,0);
  image(imgBackground, 0, 0, width, height);  
  image(logo, width/2 -300, height/15 + (sin(sinus/20) * 30) - logoSpeed -10, 500, 200);
  image(startNewH, width/2-150, height/3  + (sin(sinus/20) * 30) - logoSpeed, 200,100);
    
  image(highScores, width/2-150, height/3 +110  + (sin(sinus/20) * 30) - logoSpeed, 200,100);
  image(settings, width/2-150, height/3 + 220  + (sin(sinus/20) * 30) - logoSpeed, 200,100);
  if(sinus < 60){
    sinus++;
    sinus = constrain(sinus, 0 , 60);
  }
  else{
    logoSpeed += 2 + loadingCounter/7;
    loadingCounter++;
  }
 
  if(loadingCounter > 100){
    currentScreen = PLAY;
  }
  

}

function drawPlayScreen(){
 
  background(0,0,0);
  image(imgBackground, 0, 0, width, height); 
  if(!gameover){ 
  ship.position.x =  moveX;
  stroke(255,255,255);
  line(width/4, 0, width/4, height);
  line(width/1.5, 0, width/1.5, height);
  createEnemies();
  drawSprites();
  checkBullets();
  writeText(score, allDead);
  enemiesArriving();
  drawLife(lifes);
  
  }
  else{
    gameOver()
  }

  if(keyIsDown(LEFT_ARROW)){
    moveX-=5;
    moveX = constrain(moveX, width/4 + 27, width/1.5 - 27);
    
  }
  if(keyIsDown(RIGHT_ARROW)){
    moveX+= 5;
    
    moveX = constrain(moveX, width/4 + 27, width/1.5 - 30);
  }


}

function drawHighScoreScreen(){
  
  background(0,0,0);
  image(imgBackground, 0, 0, width, height); 
  stroke(255, 0, 0, 300);
  fill(255, 0, 0, 300);
  textSize(100);
  image(main_menubtn, width/2 - 100, height- 100, 100, 100);
  text("HIGH SCORES", width/4, 100); 
  /*
  let highscoreArray = [];
  let highscoreArraySorted = [];
  let scoreArray =[]; */
  let string = "";
  
  if(pressingVar){
  for(let i = 0; i < database.highScores.length;i++){
    highscoreArray.push([database.highScores[i].score, database.highScores[i].name, database.highScores[i].percentage]);
    scoreArray.push(database.highScores[i].score);
  }
  if(scoreSaved > 0){
    highscoreArray.push([scoreSaved,name, percentageSaved ]);
    scoreArray.push(scoreSaved);
    print(scoreSaved, name, percentageSaved);
    print(highscoreArray);
    
  }
  scoreArray.sort(function(a,b){return b-a});
  for(let i= 0; i < scoreArray.length; i++){
    for(let j = 0; j < scoreArray.length; j++){
      if(scoreArray[i]== highscoreArray[j][0]){
        highscoreArraySorted.push(highscoreArray[j]);

      }
    }
  }
 
  first = false; 
  pressingVar = false;
}

for(let i = 0; i < highscoreArraySorted.length; i ++){
let fill1 = 255 - i*10;
fill(fill1, fill1, 0, 300);
stroke(255-i*10, 0, 0, 300);
textSize(40-i*2);

string = "" + highscoreArraySorted[i][1] + ": " + highscoreArraySorted[i][0] + ",  " + highscoreArraySorted[i][2] + "%";

if( 100 +(i+1)*90 < height -100){text(string, width/4, 100 +(i+1)*90);
}

}
  



}
function drawSettingsScreen(){
  background(0,0,0);
  image(imgBackground, 0, 0, width, height);  
}

function createEnemies(){
  let randNr = random(1 * wave, 5 * wave);
  let heightHere = -300;
  let multiplier = 70;
  let j = 0;
  if(allDead){
    for(let i = 0; i < randNr; i++){
      if(xConstrainMin + j*multiplier + 50 >= xConstrainMax){heightHere -= 100; j = 0}
      let enemyShip = createSprite(xConstrainMin + j*multiplier + 40, heightHere);
      enemyShip.addImage(enemy);
      enemyShip.scale = 0.2;
      enemies.add(enemyShip);
      j++;

    }
    wave++;
    allDead = false;
  }
}


function checkBullets() {
  let bullet1 = 0;
  for (let index = 0; index < bullets.size(); index++) {
    let bullet = bullets.get(index);
    if(bullet.position.y < 0){
      bullet.remove();
      
    }
    if(bullet.overlap(enemies)){
      bullet1 = bullet;
      
    }
    
  }
  for (let index = 0; index < enemies.size(); index++) {
    let enemyCheck = enemies.get(index);
    if(enemyCheck.overlap(bullets)){
      enemyCheck.remove();
      destroyedSound.play();
      destroyedSound.setVolume(0.2);
      if(bullet1 != 0){
      bullet1.remove();

    }
      
      enemiesDead++;
      if(!(enemiesDead == 0 && shotsUsed == 0)){perfectScore = (enemiesDead/shotsUsed) *100 ;}
  
  perfectScore = round(perfectScore);
  scoreForEnemies = 100 * perfectScore/100;
      score += scoreForEnemies;
      
    }
    
  }
  if(enemies.size() == 0){allDead = true}
 
}

function writeText(score, newWave) {
  fill(255,255,255);
  textSize(40);
  text("Your Score: ",xConstrainMax + 100, height/4- 50);
  text(score, xConstrainMax + 100, height/4);
  
  
  textSize(20);
  text("Hit percentage: " + perfectScore + " %", xConstrainMax + 100, height/4 + 50);

  let waveShown = wave -1;
  if(newWave){opacityText =300}
  fill(255,255,255, opacityText);
  stroke(255, 255, 255, opacityText);
  textSize(40);
  text("wave " + waveShown + ". Get ready...", (xConstrainMin + xConstrainMax)/3, height/2);
  opacityText--;
}

function enemiesArriving(){
  let stopSignal = 0;
  for(let i = 0; i < enemies.size(); i++){
    stopSignal = enemies.get(i); 
    stopSignal.position.y += 1;
    if (stopSignal.position.y >= height){
      stopSignal.remove();
      lifes--;
      if(lifes <= 0){
        gameover = true;
      }
      
    }
  }
}
function drawLife(lifes) {
  for(let i = 0; i < lifes; i++){
    image(life, xConstrainMax + 10 + i * 40, height/1.5, 40, 40);
    
  }
}
function gameOver(){
  for(let i = 0; i < enemies.size(); i++){
    let enemy1 = enemies.get(i);
    enemy1.remove();
    
  }

  image(gameoverImg, 0, 0, width, height);
  image(playAgain, width/2 - 150, height/1.5, 300, 100);
 
  if(first){
    
    gameoverSound.play();
    first = false;
    for(let i = 0; i < enemies.size(); i++){
      let enemy1 = enemies.get(i);
      enemy1.remove();
      
    }
  }
 
  if(currentButton == 1){
    image(yes, width/2 - 100, height/1.5 + 100, 70, 70);
    image(noH, width/2 , height/1.5 + 100, 70, 70);
  }
  else{
    image(yesH, width/2 - 100, height/1.5 + 100, 70, 70);
    image(no, width/2 , height/1.5 + 100, 70, 70);
  }
  
  
}
function resettOrNah(currentButton) {
 
  if(currentButton == 1){
   scoreSaved = score; 
   percentageSaved = scoreForEnemies;
   gameover = false;
   
    currentScreen = HIGH_SCORE;
    
  }
  else if (currentButton == 0){

    for(let i = 0; i < enemies.size(); i++){
      let enemy1 = enemies.get(i);
      enemy1.remove();
      
    }
    gameover = false;
    wave = 1;
    score = 000; 
    allDead = true;
    opacityText = 300;
    shotsUsed = 0;
    enemiesDead = 0; 
    perfectScore = 100; 
    scoreForEnemies = 100;
    lifes = 3;
    first = true;
    
    
    currentScreen = MAIN_MENU;
    currentScreen = PLAY;
    
  }
  
}