let shapeshifter1;
let direction = true;

function setup() {
  createCanvas(400, 400);
  
  shapeshifter1 = new Shapeshifter();
  shapeshifter1.faceR();
}

function draw() {
  background(220);

  shapeshifter1.faceF();
  
  if (keyIsPressed == true){
   if (keyCode == RIGHT_ARROW){
      shapeshifter1.faceR();
      shapeshifter1.x++;
   } else if (keyCode == LEFT_ARROW){
      shapeshifter1.faceL();
      shapeshifter1.x--; 
   }
    
  }
}

class Shapeshifter{
  constructor(){
    this.x = 200;
    this.y = 200;
  }
  
  faceF(){
    fill(255);
    ellipse(this.x, this.y, 50, 50);
    fill(0);
    ellipse(this.x - 10, this.y - 5, 5, 5);
    ellipse(this.x + 10, this.y - 5, 5, 5);
    arc(this.x, this.y + 8, 10, 10, TWO_PI, PI);
  }
  
  faceL(){
    fill(255);
    ellipse(this.x, this.y, 50, 50);
    fill(0);
    ellipse(this.x - 15, this.y - 5, 5, 5);
    ellipse(this.x + 5, this.y - 5, 5, 5);
    arc(this.x - 5, this.y + 8, 10, 10, TWO_PI, PI);
  }
  
  faceR(){
    fill(255);
    ellipse(this.x, this.y, 50, 50);
    fill(0);
    ellipse(this.x - 5, this.y - 5, 5, 5);
    ellipse(this.x + 15, this.y - 5, 5, 5);
    arc(this.x + 5, this.y + 8, 10, 10, TWO_PI, PI);
  }
  
}