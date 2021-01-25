
  function level2(){
  
 
    
 
 background(0);
 
     push();
    noStroke();
    texture(bg2);
    translate(0,0,windowWidth+windowHeight/2 *-14)
    plane(windowWidth*10,windowHeight*10);
    fill(255);
   
    pop();

kosPukacSpeed = 1;
  //console.log(enemyPukac.length);

  //////enemyCounterText/////
  textFont(font1);
  textSize(15);
  fill(255);
  textAlign(LEFT);
  text('enemies remaining: ' + (muvi2.length), 10, height - 2);


  //////upgradeText///// 

  if (upgraded >= 5 && upgraded < 10) {
    textSize(15);
    fill(255, 150, 0);
    textAlign(RIGHT);
    text('Depleted Uranium Shells', width - 10, height - 2);
  }

  if (upgraded >= 10 && upgraded < 100) {
    textSize(15);
    fill(100, 255, 100);
    textAlign(RIGHT);
    text('Plasma Cannon', width - 10, height - 2);
  }




  //////////granicnik za avionceto//////////
  if (mouseX > width - 30) {
    mouseX = width - 30
  };
  if (mouseX < 30) {
    mouseX = 30
  };


  if (municija === 0) {
    textAlign(CENTER)
    textSize(width / 8);
    fill(128 + sin(frameCount * 0.05) * 80, 0, 0);
    text('GAME OVER', width / 2, height / 2);
    textSize(width / 20);
   
    textAlign(CENTER)
    text('Press "Restart game" to restart', width / 2, height / 2 + 100);
  }



  



///////////ASTEROID POZADINA//////////
    
    for (let a = asteroid.length - 1; a >= 0; a--) {

   
  asteroid[a].show(asteroidTexture2);
  asteroid[a].move();
   
   
 }




  
  /////////////BOSS MUVA////////////////
  
  
  
if (muvi2.length === 0){
  for (let q = bossMuva2.length - 1; q >= 0; q--) {
    
    
    ////////////////     HEALTH BAR       ////////////////////////
     
      push();
    let hBar =  map (boss2Health, 0, boss2HealthBar, 0, width/3)
    translate(width/2,0,-100);
    noStroke();
    ambientMaterial(0,255,0)
    box(hBar, height/60,height/60);
    pop();
    
     push();
    translate(width/2,0,-100);
    strokeWeight(3);
    stroke(100,200);
    noFill();
    box(width/3, height/60,height/60);
    pop();
    
 ////////////////////////////////////////////////////////   
    

    bossMuva2[q].show();
    bossMuva2[q].move();
    
    if (bossMuva2[q].y < -1){
      textSize(width / 9);
    fill(128 + sin(frameCount * 0.05) * 80, 128 + sin(frameCount * 0.05) * 80, 128 +   sin(frameCount * 0.05) * 80);
    textAlign(CENTER)
    text('BOSS ENEMY \n INCOMING!', width / 2, height / 2);
      if (bossMuva2[q].y < -1){
        alarm.playMode('untilDone')
        alarm.play();
        alarm.setVolume(0.6);
          
      }
 
      
     
      
    }
  // textSize(15);
  // fill(255);
  // textAlign(CENTER);
  // text('Boss health: ' + (boss2Health), width/2, height - 20);

    for (let i = random(0, enemyPukacRate * 0.02); i < 1; i++) {
      let e = new EnemyPukac(bossMuva2[q].x, bossMuva2[q].y);
      enemyPukacKos.push(e);

    }

    for (let i = random(0, enemyPukacRate * 0.02); i < 1; i++) {
      let e = new EnemyPukac(bossMuva2[q].x, bossMuva2[q].y);
      enemyPukacKos2.push(e);

    }

    for (let i = random(0, enemyPukacRate * 0.05); i < 1; i++) {
      let e = new EnemyPukac(bossMuva2[q].x, bossMuva2[q].y);
      enemyPukac.push(e);

    }



  }

  }




  /////////////////PUKAC I DESTRUKCIJA//////////////////////////

  for (let d = 0; d < pukac.length; d++) {
    if (pukac[d].toDelete || pukac[d].y < 20) {
      pukac.splice(d, 1)
    }
  }


    
    
    
    
    
    
    
 ////////muvi show   
    
    for (let w = muvi2.length - 1; w >= 0; w--) {

    muvi2[w].show();
    muvi2[w].move();

    for (let i = random(0, enemyPukacRate * 1); i < 1; i++) {
      let e = new EnemyPukac(muvi2[w].x, muvi2[w].y);
      enemyPukacKos.push(e);

    }

    for (let i = random(0, enemyPukacRate * 1); i < 1; i++) {
      let e = new EnemyPukac(muvi2[w].x, muvi2[w].y);
      enemyPukacKos2.push(e);

    }

    for (let i = random(0, enemyPukacRate * 1); i < 1; i++) {
      let e = new EnemyPukac(muvi2[w].x, muvi2[w].y);
      enemyPukac.push(e);

    }





  }

    
    
    
    
    
    
    
    
    
    
    
    
    
  for (let i = pukac.length - 1; i >= 0; i--) {
    
   // pointLight(255, 50, 0, pukac[i].x,-250, pukac[i].y-height);
    pukac[i].show();
    pukac[i].move()
    pukac[i].y = pukac[i].y / 1.05;
    pukacLightx = pukac[i].x;
    pukacLighty = pukac[i].y;
    
   
    for (var g = 0; g < muvi2.length; g++) {
      if (pukac[i].hits(muvi2[g])) {

        muvi2[g].kill();
        if (upgraded >= 0 && upgraded < 5) {

          pukac[i].kill()
        }
        hitSound.play();
        hitSound.setVolume(0.5)
       //console.log("Red2 enemy destroyed!");
      }
    }

    for (var b = 0; b < bossMuva2.length; b++) {
      if (pukac[i].hits(bossMuva2[b])) {
        
        if(upgraded === 0 && upgraded <5){
        boss2Health = boss2Health - 5;
        }
        
          if(upgraded === 5 && upgraded <10){
        boss2Health = boss2Health - 10;
        }
        
         if(upgraded >= 10){
        boss2Health = boss2Health - 15;
        }
        if (boss2Health <= 1) {
          bossMuva2[b].kill();
        }
        

        
        if (upgraded >= 0 && upgraded < 100) {

          pukac[i].kill()
        }
        hitSound.play();
        hitSound.setVolume(0.5)
        if (pukac[i].hits(bossMuva2[b]) && boss2Health <= 0 ){
        //console.log("Boss Destroyed");
        }
      }
    }

    if (muvi2.length === 0) {
      muviubieni2 = true;

    }


  }




  for (let d = 0; d < bossMuva2.length; d++) {
    if (bossMuva2[d].toDelete) {
      bossMuva2.splice(d, 1)
    }
  }


  for (let d = 0; d < muvi2.length; d++) {
    if (muvi2[d].toDelete) {
      muvi2.splice(d, 1)
    }
  }

  //////////////////UPGRADE SPAWN//////////////


  for (let i = random(0, upgradeRate); i < 1; i++) {
    let u = new Upgrade(random(1, width), random(50, height / 4));
    upgrade.push(u);
  }


  ///////////////////AVIONCE I NEGOVOTO UNISTUVANJE I UPGRADE////////////


  for (let r = 0; r < avionce.length; r++) {
    avionce[r].show()

  }

  ///////enemyPukac///////


  for (let e = enemyPukac.length - 1; e >= 0; e--) {

    enemyPukac[e].show(1, 1);
    enemyPukac[e].move()
    enemyPukac[e].y = enemyPukac[e].y / 1.05;
    for (let r = 0; r < avionce.length; r++) {
      if (enemyPukac[e].hits(avionce[r])) {

        enemyPukac[e].kill();
        avionce[r].kill();
        // console.log("Your aircraft is destroyed");
        municija = -1;

      }
    }
  }

  ///////enemyPukacPodAgol///////

  for (let k = enemyPukacKos.length - 1; k >= 0; k--) {

    enemyPukacKos[k].show(1, 1);
    enemyPukacKos[k].move()
    enemyPukacKos[k].x = enemyPukacKos[k].x + 1.2;
    enemyPukacKos[k].y = enemyPukacKos[k].y / 1.05;
    for (let r = 0; r < avionce.length; r++) {
      if (enemyPukacKos[k].hits(avionce[r])) {

        enemyPukacKos[k].kill();
        avionce[r].kill();
        //console.log("Your aircraft is destroyed");
        municija = -1;

      }
    }
  }

  for (let k2 = enemyPukacKos2.length - 1; k2 >= 0; k2--) {

    enemyPukacKos2[k2].show(1, 1);
    enemyPukacKos2[k2].move()
    enemyPukacKos2[k2].x = enemyPukacKos2[k2].x - 1.2;
    enemyPukacKos2[k2].y = enemyPukacKos2[k2].y / 1.05;
    for (let r = 0; r < avionce.length; r++) {
      if (enemyPukacKos2[k2].hits(avionce[r])) {

        enemyPukacKos2[k2].kill();
        avionce[r].kill();
        //console.log("Your aircraft is destroyed");
        municija = -1;

      }
    }
  }


  /////////upgrade//////////

  for (let u = upgrade.length - 1; u >= 0; u--) {

    upgrade[u].show(1, 1);
    upgrade[u].move()
    upgrade[u].y = upgrade[u].y / 1.055;
    for (let r = 0; r < avionce.length; r++) {
      if (upgrade[u].hits(avionce[r])) {

        upgrade[u].kill();
        avionce[r].upgrade();
        //console.log("Weapon upgraded");
        upgradeSound.play();
        upgradeSound.setVolume(0.8)
        for (let i = 0; i < avionce.length; i++) {
          if (avionce[i].toUpgrade) {
            upgraded += 5;
            break;


          }
        }


      }
    }
  }



  for (let i = 0; i < avionce.length; i++) {
    if (avionce[i].toDelete) {
      avionce.splice(i, 1)
      municija = 0;

    }
  }



  
   for (let i = 0; i < enemyPukacKos.length; i++) {
    if (enemyPukacKos[i].toDelete || enemyPukacKos[i].y > height - 20) {
      enemyPukacKos.splice(i, 1)
    }
  }  
    
    
  for (let i = 0; i < enemyPukacKos2.length; i++) {
    if (enemyPukacKos2[i].toDelete || enemyPukacKos2[i].y > height - 20) {
      enemyPukacKos2.splice(i, 1)
    }
  }    

  for (let i = 0; i < enemyPukac.length; i++) {
    if (enemyPukac[i].toDelete || enemyPukac[i].y > height - 20) {
      enemyPukac.splice(i, 1)
    }
  }

  for (let i = 0; i < upgrade.length; i++) {
    if (upgrade[i].toDelete || upgrade[i].y > height - 20) {
      upgrade.splice(i, 1)
    }
  }

    
    //////////////////////    background      //////////
    
    

  
 
    //////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
  }