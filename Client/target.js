class circle{
  constructor(x, y, radius, minamizer){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minamizer = minamizer;
    this.gone = false;
    this.clicked = false;
  }

  shrink(){
    if ((this.radius - this.minamizer) > 0){
      this.radius = this.radius - this.minamizer
    } else {this.gone = true;}
  }

  show(){
    ellipse(this.x, this.y, this.radius)
  }
}
