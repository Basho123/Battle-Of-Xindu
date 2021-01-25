//////////////SETUP/////////////

function preloaded(loaded) {

  backgroundMusic = loaded;
  backgroundMusic.play();
  backgroundMusic.setVolume(0.5);
}



function setup() {







  let cnv = createCanvas(windowWidth, windowHeight - 30, WEBGL);

  /////////    PRELOAD    ///////////////



  backgroundMusic = loadSound("sounds/deepblue-song.mp3", preloaded);










  //////////////////////////////




  enemyPukacRate = (windowHeight);
  delitel = (height + width) / 1800;
  if (delitel > 1) {
    delitel = 1
  }


  //////  asteroidi  /////////


  for (let i = 0; i < width + 10000; i = i + asteroidCount / delitel) {
    let a = new Asteroid(i - 5000, random(-5000, 5000), random(-100, -5000), random(0.4, 1), random(-20, 20));
    asteroid.push(a);
  }
  
  
    if (windowWidth > windowHeight){
      astedoidCount = 1000;
    
  }



  ///  prvRedMuvi

  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m = new Muva(i, height / 20, 0.2, 0, 0, 0, random(-3, 3));
    muvi.push(m);
  }

  ///  vtorRedMuvi

  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m = new Muva(i, height / 8.5, -0.5, 55, 150, 250, random(-3, 3));
    muvi.push(m);
  }

  ///tretRedMuvi  


  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m = new Muva(i, height / 4.7, 0.7, 155, 250, 50, random(-3, 3));
    muvi.push(m);
  }

  ///CetvrtRedMuvi  
  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m = new Muva(i, height / 3.5, -0.7, 255, 150, 50, random(-3, 3));
    muvi.push(m);
  }





  for (let i = width / 2; i < width; i = i + width) {
    let b = new BossMuva(i, height - height * 2, 0, 2, 2);

    bossMuva.push(b);

  }



  //////////////LEVEL 2///////////////////


  ///  prvRedMuvi

  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m2 = new Muva(i, height / 20, 1, 0, 0, 0, random(-3, 3));
    muvi2.push(m2);
  }

  ///  vtorRedMuvi

  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m2 = new Muva(i, height / 8.5, -1, 0, 0, 0, random(-3, 3));
    muvi2.push(m2);
  }

  ///    tretRedMuvi  


  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m2 = new Muva(i, height / 4.7, 0.7, 155, 250, 50, random(-3, 3), butterflyTexture2);
    muvi2.push(m2);
  }

  ///    CetvrtRedMuvi  
  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m2 = new Muva(i, height / 3.5, -0.7, 255, 150, 50, random(-3, 3), butterflyTexture2);
    muvi2.push(m2);
  }

  /////    pettiRedMuvi
  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m2 = new Muva(i, height / 2.7, 0.7, 255, 150, 50, random(-3, 3), butterflyTexture2);
    muvi2.push(m2);
  }
  //////////////////  BOSS


  for (let i = width / 2; i < width; i = i + width) {
    let b2 = new BossMuva(i, height - height * 2, 0, 3, 1.5, 0, 255, random(0, 255),0,spiderTexture2);

    bossMuva2.push(b2);

  }

  //////////////////////////////LEVEL 3////////////////////////



  ///  prvRedMuvi

  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m3 = new Muva(i, height / 20, 1, 0, 0, 0, random(-3, 3), butterflyTexture2);
    muvi3.push(m3);
  }

  ///  vtorRedMuvi

  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m3 = new Muva(i, height / 8.5, -1, 0, 0, 0, random(-3, 3), butterflyTexture2);
    muvi3.push(m3);
  }

  ///    tretRedMuvi  


  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m3 = new Muva(i, height / 4.7, 0.7, 155, 250, 50, random(-3, 3), butterflyTexture3);
    muvi3.push(m3);
  }

  ///    CetvrtRedMuvi  
  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m3 = new Muva(i, height / random(2.8, 3.5), -1.5, 255, 150, 50, random(-3, 3), butterflyTexture3);
    muvi3.push(m3);
  }

  /////    pettiRedMuvi
  for (let i = 0; i < width; i = i + 70 * delitel) {
    let m3 = new Muva(i, height / random(2, 2.5), 1.5, 255, 150, 50, random(-3, 3), butterflyTexture3);
    muvi3.push(m3);
  }



  for (let i = width / 2; i < width; i = i + width) {
    let b3 = new BossMuva(i, height - height * 2, 0, 4, 2, 255, 255, 0,0,spiderTexture3);

    bossMuva3.push(b3);

  }

  for (let i = width / 2; i < width; i = i + width) {
    let b3 = new BossMuva(i, height - height * 2, -30, -3, 2, 0, random(0, 255), 255,0,spiderTexture);

    bossMuva3.push(b3);

  }











  ///avionce


  for (let
      i = 0; i < 1; i = i + 1) {
    let a = new Avionce(1, height - 50);
    avionce.push(a);
  }





}