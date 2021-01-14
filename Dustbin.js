class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbin2 = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("binImage/dustbingreen.png")
      World.add(world, this.dustbin2);
    }
    display(){
      var pos =this.dustbin2.position;
      
      imageMode(CENTER);
     
      image(this.image,pos.x,pos.y, this.width, this.height);
      
    }
  };