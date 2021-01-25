////Yet another recreation of a classic arcade game//////////
////lot of stuff in the code is written in Macedonian language, because of distinguishing things in my head, since this is my first project, i plan on using only english in future////////

////////////////////////VARIJABLI///////////////




let upgrade = [];

///////pukaci/////////

let newGame = 1;

let time = 0;
let difficulty = 0;
let butPos = 0.5;
let enemyPukacRate;
let upgradeRate = 4000;
let enemyPukacKos = [];
let enemyPukacKos2 = [];
let enemyPukac = [];
let pukac = [];
let asteroid = [];

let pukacRadius = 12;
let upgraded = 0;

let kosPukacSpeed;
let muvi = [];
let muvi2 = [];
let muvi3 = [];
let bossMuva = [];


let muvi4 = [];
let muvi5 = [];
let muvi6 = [];
let bossMuva2 = [];

let muvi7 = [];
let muvi8 = [];
let muvi9 = [];
let bossMuva3 = [];




let bossSize = 5;
let bossHealth = 600;
let bossHealthBar = 600;

let boss2Size = 5;
let boss2Health = 1000;
let boss2HealthBar = 1000;

let boss3Size = 5;
let boss3Health = 1800;
let boss3HealthBar = 1800;


let speedy = 2;
let speedy2 = 2;
let speedy3 = 2;

let avionce = [];
let avioncePosX = 0
let avioncePosY = 0;
let avioncePosZ = 0;




let prekidac = false;
let prekidac2 = false;
let kursumPrekidac = false;
let speedx = 0.2;
let speedx2 = -0.2;
let speedx3 = 0.3;
let asteroidSpeed = 3;


let speedKursum = -1;
let kHor;
let kVer;
let kDist;
let muva1x;
let muva1y;
let xAvionce;
let municija = 1;

let muviubieni = false;
let muviubieni2 = false;
let muviubieni3 = false;

let alarm;


let hitSound;
let backgroundMusic;
let pukanjeSound;
let pukanjeSound2;
let pukanjeSound3;
let upgradeSound;
let textZaUpgrade = [];
let asteroidCount = 250;

let delitel;
let font1;

let angle = 0;
let angle2 = 0;
let plasmaAngle = 0;

let airplaneModel;
let muvaModel;
let asteroidModel;
let butterflyModel;
let spiderModel;
let bulletModel;

let inox;
let asteroidTexture;
let asteroidTexture2;
let asteroidTexture3;
let butterflyTexture;
let butterflyTexture2;
let butterflyTexture3;
let spiderTexture;
let spiderTexture2;
let spiderTexture3;
let bulletTexture1;
let bulletTexture2;

let pukacLightx = 0;
let pukacLighty = 0;

let cameraDist = 0;

let bg1;
let bg2;
let bg3;




function preload() {

  
  ////////    fonts    /////////
  font1 = loadFont('fonts/Arial.ttf');
  
  
  /////////    models    ///////////////
  butterflyModel = loadModel('models/butterfly.obj', true);
  airplaneModel = loadModel('models/airplane.obj', true);
  muvaModel = loadModel('models/muva.obj', true);
  asteroidModel = loadModel('models/asteroid2.obj', true);
  spiderModel = loadModel('models/spider.obj', true);
  bulletModel = loadModel('models/bullet.obj', true);
  
  
  /////////    textures    //////////
  
  inox = loadImage('textures/inox.jpg')
  asteroidTexture = loadImage('textures/asteroid2.jpg');
  asteroidTexture2 = loadImage('textures/asteroid3.jpg');
  asteroidTexture3 = loadImage('textures/asteroid4.jpg');
  butterflyTexture = loadImage('textures/butterfly.png');
  butterflyTexture2 = loadImage('textures/butterfly2.png');
  butterflyTexture3 = loadImage('textures/butterfly3.png');
  spiderTexture = loadImage ('textures/spider.jpg');
  spiderTexture2 = loadImage ('textures/spider4.jpg');
  spiderTexture3 = loadImage ('textures/spider5.jpg');
  bulletTexture1 = loadImage ('textures/brass.jpg');
  bulletTexture2 = loadImage ('textures/copper.jpg');
  
  ////////    sounds    //////////////
  
  hitSound = loadSound("sounds/hit1.mp3");
  pukanjeSound = loadSound("sounds/gun1.mp3");
  pukanjeSound2 = loadSound("sounds/gun2.mp3");
  pukanjeSound3 = loadSound("sounds/gun3.mp3");
  upgradeSound = loadSound("sounds/reload.mp3");
  alarm = loadSound("sounds/bossAlarm.mp3");
  
  
  ///////////    backgrounds /////////////////
  

bg1 = loadImage('background/space2.png');
bg2 = loadImage('background/stars.jpg');
bg3 = loadImage('background/space3.png');



  

}




