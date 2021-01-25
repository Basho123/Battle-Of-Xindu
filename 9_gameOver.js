function gameOver(){
       
  background(0);
   municija = -1;
    textSize(width / 9);
    fill(128 + sin(frameCount * 0.05) * 80, 128 + sin(frameCount * 0.05) * 80, 128 + sin(frameCount * 0.05) * 80);
    textAlign(CENTER)
    text('YOU HAVE WON!', width / 2, height / 2);
    textSize(width / 20);
    textAlign(CENTER)
    text('Press "Restart game" to restart', width / 2, height / 2 + 100);
  
  
}

