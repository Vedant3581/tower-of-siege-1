class Box extends BaseClass  {
    constructor(x, y, width, height,BodyA){
      super(x,xy,width,height,BodyA);
      this.image = loadImage("sprites/wood1.png");
    }
    fly(){
      BodyA=null;
    }
    display(){
      push();
      translate(50, 0);
      strokeWeight(10);
      fill(204, 153, 0);
      tint(5,this.visiblity);
      ellipse(0, 50, 33, 33);
      pop();
    }
}