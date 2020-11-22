class circle{
  constructor(x, y, radius, minamizer){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minamizer = minamizer;
    this.gone = false;
    this.clicked = false;
    this.dead = false
  }

  shrink(){
    if ((this.radius - this.minamizer) > 0){
      this.radius = this.radius - this.minamizer
    } else {this.dead = true;}
  }

  show(){
    if (this.clicked == true){
      this.gone = true;
    }
    if (this.gone == false){
      ellipse(this.x, this.y, this.radius)
    }
  }
}
