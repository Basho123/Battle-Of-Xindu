function splashScreen(a){
background(0);
  
    textSize(width / 15);
    fill(128 + sin(frameCount * 0.05) * 80, 128 + sin(frameCount * 0.05) * 80, 128 + sin(frameCount * 0.05) * 80);
    textAlign(CENTER)
    text('You have finished \n level ' + a + '!', width / 2, height / 4);
    textSize(width / 20);
    textAlign(CENTER)
    text('Prepare for next level', width / 2, height -100 );
  
  
    time = time + 3;
  
   /////////////////PUKAC I DESTRUKCIJA//////////////////////////

  for (let d = 0; d < pukac.length; d++) {
    if (pukac[d].toDelete || pukac[d].y < 20) {
      pukac.splice(d, 1)
    }
  }


  for (let i = pukac.length - 1; i >= 0; i--) {
    pukac[i].show();
    pukac[i].move()
    pukac[i].y = pukac[i].y / 1.05;
    for (var j = 0; j < muvi3.length; j++) {
      if (pukac[i].hits(muvi3[j])) {

        muvi3[j].kill();
        if (upgraded >= 0 && upgraded < 5) {
          pukac[i].kill()
        }
        hitSound.play();
        hitSound.setVolume(0.5)
        console.log("Yellow enemy destroyed!");
      }
    }

    for (var z = 0; z < muvi2.length; z++) {
      if (pukac[i].hits(muvi2[z])) {

        muvi2[z].kill();
        if (upgraded >= 0 && upgraded < 5) {

          pukac[i].kill()
        }
        hitSound.play();
        hitSound.setVolume(0.5)
        console.log("Blue enemy destroyed!");
      }
    }
    for (var g = 0; g < muvi.length; g++) {
      if (pukac[i].hits(muvi[g])) {

        muvi[g].kill();
        if (upgraded >= 0 && upgraded < 5) {

          pukac[i].kill()
        }
        hitSound.play();
        hitSound.setVolume(0.5)
        console.log("Red enemy destroyed!");
      }
    }

    for (var b = 0; b < bossMuva.length; b++) {
      if (pukac[i].hits(bossMuva[b])) {
        
        if(upgraded === 0 && upgraded <5){
        bossHealth = bossHealth - 5;
        }
        
          if(upgraded === 5 && upgraded <10){
        bossHealth = bossHealth - 10;
        }
        
         if(upgraded >= 10){
        bossHealth = bossHealth - 15;
        }
        if (bossHealth <= 1) {
          bossMuva[b].kill();
        }
        

        
        if (upgraded >= 0 && upgraded < 50) {

          pukac[i].kill()
        }
        hitSound.play();
        hitSound.setVolume(0.5)
        if (pukac[i].hits(bossMuva[b]) && bossHealth <= 0 ){
        console.log("Boss Destroyed");
        }
      }
    }

    if (muvi.length === 0 && muvi2.length === 0 && muvi3.length === 0 && bossMuva.length === 0) {
      muviubieni = true;

    }


  }




  for (let d = 0; d < bossMuva.length; d++) {
    if (bossMuva[d].toDelete) {
      bossMuva.splice(d, 1)
    }
  }

  for (let d = 0; d < muvi3.length; d++) {
    if (muvi3[d].toDelete) {
      muvi3.splice(d, 1)
    }
  }

  for (let d = 0; d < muvi2.length; d++) {
    if (muvi2[d].toDelete) {
      muvi2.splice(d, 1)
    }
  }

  for (let d = 0; d < muvi.length; d++) {
    if (muvi[d].toDelete) {
      muvi.splice(d, 1)
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
        console.log("Your aircraft is destroyed");
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
        console.log("Your aircraft is destroyed");
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
        console.log("Your aircraft is destroyed");
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
        console.log("Weapon upgraded");
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