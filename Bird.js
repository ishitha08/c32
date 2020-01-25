class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.tragetory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
    var pos =[this.body.position.x,this.body.position.y];
     this.tragetory.push(pos);
    }
     for(var i = 0;i<this.tragetory.length;i++){
       image(this.smokeImage,this.tragetory[i][0],this.tragetory[i][1]);
     }
  }
}
