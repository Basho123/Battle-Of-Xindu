////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////////////KLASI////////////////////////

class Muva {

  ////parameterFunctions:
  //    x position, 
  //    y position, 
  //    horizontal speed,
  //    red
  //    green
  //    blue
  //    x rotation
  //    texture variable
  
  
  constructor(x, y, speed = 0.2, red = 250, green = 250, blue = 250, rotation = 1, texture = butterflyTexture) {
    
    
    
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.z = 20;
    this.r = 5 * delitel;
    this.toDelete = false;
    this.rotation = rotation;
    this.texture = texture;
  }
  
  
  kill() {
    this.toDelete = true;
  }
  
  
  show() {
    
    push();
    translate(this.x, this.y, this.z - 20);
    noStroke();
    scale(0.3 * delitel);
    rotateX(1.5);
    rotateY(angle * 0.01);
    rotateZ(angle + this.rotation)
    texture(this.texture);
    model(butterflyModel);
    angle += sin(frameCount / 100) * 0.0005;
    pop();
 
  }


  ///////merac za distanca

  clicked(px, py) {

    let d = dist(px, py, this.x, this.y);
    if (d < this.x / 4 && d < this.y / 4) {
      prekidac = true;
    } else {
      prekidac = false
    }
  }


  /////pridvizuvanje
  move() {

    this.x = this.x + this.speed;
    if (this.x < -50 || this.x > width + 50) {
      this.speed = this.speed * -1;
    }

    if (this.speed >= 0) {
      this.z = 20;
    }
    if (this.speed < 0) {
      this.z = -20;
    }

  }




}




/////////////////////////////////////////////////



class Muva2 {
  constructor(a, b) {
    this.x = a;
    this.y = b;
    this.r = 5 * delitel;
    this.toDelete = false;
  }
  kill() {
    this.toDelete = true;
  }
  show(r, g, b) {
    //////boja i forma
    fill(r, g, b + sin(frameCount * 0.049) * 10, 200 + sin(frameCount * 0.049) * 30);
    quad(this.x + 0, this.y + 11 * delitel, this.x + 16 * delitel, this.y, this.x + 29 * delitel, this.y + 3 * delitel, this.x + 10 * delitel, this.y + 36 * delitel);

    fill(r, g, b + sin(frameCount * 0.049) * 10, 200 + sin(frameCount * 0.049) * 30);
    quad(this.x + 0, this.y + 11 * delitel, this.x - 16 * delitel, this.y, this.x - 29 * delitel, this.y + 3 * delitel, this.x - 10 * delitel, this.y + 36 * delitel);

    fill(255, 255, 0);
    rect(this.x - 2 * delitel, this.y, this.r, 30 * delitel);
  }


  ///////merac za distanca

  clicked(px, py) {

    let d = dist(px, py, this.x, this.y);
    if (d < this.x / 4 && d < this.y / 4) {
      prekidac = true;
    } else {
      prekidac = false
    }
  }


  /////pridvizuvanje
  move() {

    this.x = this.x + speedx2;
    if (this.x < -10 || this.x > width + 10) {
      speedx2 = speedx2 * -1;
    }

  }




}


///////////////////////////////////////////////////////////

class Muva3 {
  constructor(a, b) {
    this.x = a;
    this.y = b;
    this.r = 5 * delitel;
    this.toDelete = false;
  }
  show(r, g, b) {

    fill(r + sin(frameCount * 0.049) * 30, g + sin(frameCount * 0.049) * 30, b);
    quad(this.x + 0, this.y + 11 * delitel, this.x + 16 * delitel, this.y, this.x + 29 * delitel, this.y + 3 * delitel, this.x + 10 * delitel, this.y + 36 * delitel);

    fill(r + sin(frameCount * 0.049) * 30, g + sin(frameCount * 0.049) * 30, b);
    quad(this.x + 0, this.y + 11 * delitel, this.x - 16 * delitel, this.y, this.x - 29 * delitel, this.y + 3 * delitel, this.x - 10 * delitel, this.y + 36 * delitel);

    fill(255, 0, 0);
    rect(this.x - 2 * delitel, this.y, this.r, 30 * delitel);
  }


  kill() {
    this.toDelete = true;
  }


  clicked(px, py) {

    let d = dist(px, py, this.x, this.y);
    if (d < this.x / 4 && d < this.y / 4) {
      prekidac = true;
    } else {
      prekidac = false
    }
  }
  move() {

    this.x = this.x + speedx3;
    if (this.x < -10 || this.x > width + 10) {
      speedx3 = speedx3 * -1;
    }

  }




}

/////////////////////////////////////////////////////


class BossMuva {
  ////parameterFunctions:
  //    x position, 
  //    y position, 
  //    z position,
  //    horizontal speed,
  //    vertical speed,
  //    red
  //    green
  //    blue
  //    x rotation
  //    texture

  constructor(x, y, z = 0, speedx = 0.2, speedy = 1, red = 250, green = 250, blue = 250, rotation = 0, texture = spiderTexture) {
    
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.speedx = speedx;
    this.speedy = speedy;
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = 25 * delitel;
    this.toDelete = false;
    this.rotation = rotation;
    this.texture = texture;
    
  }
  kill() {
    this.toDelete = true;
  }
  show() {
    push();
    //////boja i forma
    // pointLight(255*pukac.length, 50*pukac.length/4, 0, pukacLightx,-250, pukacLighty-height);
    // fill(this.red + sin(frameCount * 0.069) * 30, this.green, this.blue);
    translate(this.x, this.y, this.z - 20);
    noStroke();



    scale(2 * delitel);
    rotateX(1.5);
    rotateY(angle * 0.01);
    rotateZ(0)
    //ambientMaterial(this.red, this.green, this.blue);
    texture(this.texture);
    model(spiderModel);
    //box(130);
    angle += sin(frameCount / 100) * 0.0005;


    pop();

  }





  clicked(px, py) {

    let d = dist(px, py, this.x, this.y);
    if (d < this.x / 4 && d < this.y / 4) {
      prekidac = true;
    } else {
      prekidac = false
    }
  }
  move() {

    this.x = this.x + this.speedx;
    if (this.x <= 50 || this.x >= width - 50) {
      this.speedx = this.speedx * -1;
    }

    this.y = this.y + this.speedy;
    if (this.y > height / 4) {
      this.speedy = this.speedy * 0;

    }





  }




}

////////////////////////////////////////////////////

class Avionce {
 
  
  constructor(a, b) {
    this.x = avioncePosX;
    this.y = b;
    this.r = 20 * delitel;
    xAvionce = this.x;
    this.toDelete = false;
    this.toUpgrade = false;
  }


  show() {

    ////////oblik i interakcija so mouse///////
 
    push();
    //////boja i forma
    //fill(255);
    translate(mouseX, height-70);
    scale(0.5 * delitel);
    rotateX(2);
    //rotateY(angle);
    noStroke();
    texture(inox);
    specularMaterial(15);
    //rotateY(angle);
    //box(25,25);
    //
    model(airplaneModel);

    //angle = (angle) * sin(frameCount * 0.5)*1.1 

    pop();
    
//     if (keyIsDown(LEFT_ARROW)) {
//     this.x -= 5;
//   }

//   if (keyIsDown(RIGHT_ARROW)) {
//     this.x += 5;
//   }

//   if (keyIsDown(UP_ARROW)) {
//     this.y -= 5;
//   }

//   if (keyIsDown(DOWN_ARROW)) {
//     this.y += 5;
//   }
    
    

  }

  kill() {
    this.toDelete = true;
  }
  upgrade() {
    this.toUpgrade = true;
  }

}

class Pukac {
  constructor(x, y) {

    this.x = x;
    this.y = y;
    this.r = pukacRadius * delitel;
    this.length = 8 * delitel;
    this.width = 3 * delitel;
    this.toDelete = false;
    this.red = 255;
    this.green = 255;
    this.blue = 255;

  }
  show() {

    fill(this.red, this.green, this.blue);
    ////////////////////  standard shell  //////////
    if (upgraded => 0 && upgraded < 5) {

      push();
      translate(this.x+2, this.y-5,-10);
      noStroke();
      scale(0.15 * delitel);
      rotateX(0);
      rotateY(1.5);
      rotateZ(4.8);
      //fill(0);
      texture(bulletTexture1);
      // specularMaterial(0);
      model(bulletModel);
      //box(100);
      //angle2 = angle2 + 0.0001 * this.s;
      pop();


    }

    ///////////////////  DU shell    ////////

    if (upgraded >= 5 && upgraded < 10) {
      push();
      translate(this.x, this.y);
      noStroke();
      scale(0.2 * delitel);
      rotateX(0);
      rotateY(1.5);
      rotateZ(4.8);
      //fill(0);
      texture(bulletTexture2);
      // specularMaterial(0);
      model(bulletModel);
      //box(100);
      //angle2 = angle2 + 0.0001 * this.s;
      pop();
    }


    //////////////////  Plasma Blob ///////////
    if (upgraded >= 10) {
      
      pointLight(0, 20*pukac.length, 0, this.x,this.y,0 );
      push();
      translate(this.x, this.y);
      noStroke();
      scale(0.5*delitel);
      rotateX(0+plasmaAngle);
      rotateY(1.5+plasmaAngle);
      rotateZ(4.8+plasmaAngle);
      fill(0,200 + sin(frameCount*0.2) * 70, 0);
      //normalMaterial(0,200 + sin(frameCount*0.2) * 70, 0);
      ellipsoid(25, 30, 40, 100, 100);
    
      plasmaAngle += 0.1;
      
     
      pop();
      this.r = pukacRadius * 4 * delitel;
    
      
    }
  }

  kill() {
    this.toDelete = true;
  }




  hits(muvi) {
    let d = dist(this.x, this.y, muvi.x, muvi.y);
    if (d < this.r + muvi.r) {
      return true;
    } else {
      return false;

    }
  }




  move() {
    this.y = this.y - 5;
  }
}



// function vrne(z,f){

//   for (let a = 0; a <= width; a +=random(z+150)){
//     for (let b = 0; b<=height; b+=random(z+330)){
//       stroke(255);

//     line(a,b,a,b+random(30,100));

//       stroke(0);
//       if (z<0){
//       z = z *1;}

//     }



//   }


// }


class EnemyPukac {
  constructor(x, y) {

    this.x = x;
    this.y = y;
    this.r = 8 * delitel;
    this.toDelete = false;

  }
  show(muvi) {

    fill(255);
    rect(this.x, this.y, 3 * delitel, this.r * 2);
  }

  kill() {
    this.toDelete = true;
  }


  hits(avionce) {
    let d = dist(this.x, this.y, mouseX, height - 50);
    if (d < this.r + avionce.r) {
      return true;
    } else {
      return false;

    }
  }




  move() {
    this.y = this.y * 1.06;
  }
}


class Upgrade {
  constructor(x, y) {

    this.x = x;
    this.y = y;
    this.r = 10 * delitel;
    this.toDelete = false;

  }
  show(muvi) {

     push();
      translate(this.x, this.y);
      noStroke();
      scale(0.6 * delitel);
      rotateX(0);
      rotateY(1.5);
      rotateZ(4.8);
      //fill(0,200 + sin(frameCount*0.2) * 70, 0);
      ambientMaterial(200 + sin(frameCount*0.3) * 100,200 + sin(frameCount*0.2) * 100,200 + sin(frameCount*0.1) * 100);
      sphere(15);
      pop();
  }

  kill() {
    this.toDelete = true;
  }


  hits(avionce) {
    let d = dist(this.x, this.y, mouseX, height - 50);
    if (d < this.r + avionce.r) {
      return true;
    } else {
      return false;

    }
  }




  move() {
    this.y = this.y * 1.06;
  }
}


class Asteroid {


  constructor(x, y, z, r, s) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
    this.s = s;
   
  }

  show(tex = asteroidTexture) {

   
    push();
    
    this.tex = tex;
    
    translate(this.x, this.y, this.z);
    noStroke();
    scale(this.r * 1);
    rotateX(angle2 + this.s);
    rotateY(angle2 + this.s / 2);
    rotateZ(this.s);
    //fill(244);
    texture(this.tex);
    // specularMaterial(0);
    model(asteroidModel);
    //rect(100,100,100);
    angle2 = angle2 + 0.0001 * this.s;
    pop();


  }

  move() {
    this.y = this.y + asteroidSpeed;
    if (this.y > 5000) {
      this.y = -5000
    }
  }
}


class HealthBar{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  show(){
    push();
    translate(width/2,height / 30);
   // rectMode(CENTER);
    fill(255,255,255);
    box(200, 20,20);
    pop();
  }
  
    
  
    
    
  }
