function mouseWheel(event)
{
  
  cameraDist += event.delta;
  
}


function draw() {
if (municija >= 1){
     noCursor();}
  if (municija < 1){
     cursor();}
// if (newGame == 0){
   
//   background(245);
//   push();
//   button = createButton('New Game');
//   button.size(100);
//   button.position(width/2, height/2);
//   button.mousePressed(nGame);
// }

// function nGame() {
//   newGame = 1;
//  pop();
// }
  
 
  
  

 
if (newGame == 1){
//console.log(muvi3.length)
  let cam1 = map(mouseX, 0, width, width,-width, true);
  camera(width/2+cam1/200, height/2, (height / 2.0) / tan(PI * 30.0 / 180.0), width/2, height/2, 0, 0, 1, 0)

ambientLight(155);
  //let vector = createVector(pukacLightx,0,pukacLighty);
  
  pointLight(10*pukac.length, 2*pukac.length/4, 0, pukacLightx,0,0 );
  //pointLight(100, 100, 100, width/2, height,250);
  pointLight(255,240, 230, width/2 ,height/20,100);
  
  
 
  //crna pozadina
  //  translate(-width/2,-height/2,0)
  if (bossHealth < 2) {
    difficulty = 1


    if (time > 500) {
      difficulty = 2

    }

    if (boss2Health < 2) {
      difficulty = 3
    }

    if (time > 1000) {
      difficulty = 4
    }

  }

  if (boss3Health < 2) {
    difficulty = 5
  }




  //////////////////////////////////////////////

  // 
  // console.log(difficulty);



  if (difficulty === 4) {
    level3()
  }


  if (difficulty === 3) {
    splashScreen(2);
  }

  if (difficulty === 2) {
    level2();
  }




  if (difficulty === 1) {
    splashScreen(1);



  }

  if (difficulty === 0) {
    level1();
  }



  //time = millis()/1000;


  if (difficulty === 5) {

    gameOver();
  }


}

}