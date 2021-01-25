///////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////////////MOUSE CLICK//////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////


function mousePressed() {
if (difficulty == 0 || difficulty == 2 || difficulty == 4 || difficulty == 6){
if (newGame == 1){
  ////ako stisnes na muva da ja snema

  //   for (let i = muvi.length - 1; i >= 0; i--) {
  //     muvi[i].clicked(mouseX, mouseY);
  //     if (prekidac === true) {
  //       muvi.splice(i, 1)
  //     }
  //   }


  //   for (let i = muvi2.length - 1; i >= 0; i--) {
  //     muvi2[i].clicked(mouseX, mouseY);
  //     if (prekidac === true) {
  //       muvi2.splice(i, 1)
  //     }
  //   }

  //   for (let i = muvi3.length - 1; i >= 0; i--) {
  //     muvi3[i].clicked(mouseX, mouseY);
  //     if (prekidac === true) {
  //       muvi3.splice(i, 1)
  //     }
  //   }




  if (municija > 0 && upgraded >= 10) {

    pukanjeSound3.play();
    pukanjeSound3.setVolume(1);

  }





  if (municija > 0 && upgraded >= 5 && upgraded < 10) {

    pukanjeSound2.play();
    pukanjeSound2.setVolume(0.9);

  }

  if (municija > 0 && upgraded >= 0 && upgraded < 5) {

    pukanjeSound.play();
    pukanjeSound.setVolume(1);
  }






  if (mouseX > width - 30) {
    mouseX = width - 30
  }
  if (mouseX < 30) {
    mouseX = 30
  }

  for (let i = 0; i < municija; i++) {
    
    let k = new Pukac(mouseX - 2, height - 60);
    pukac.push(k);
    
    // if(kursumPrekidac === true){
    //   pukac.shift();
    // }
  }

}
}
}