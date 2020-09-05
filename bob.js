class Bob {
    constructor (x, y){
        var options = {
            isStatic : true, 
        }
    this.body = Bodies.circle(x, y, 40, options)
    this.radius = 40
    this.image = loadImage("paper.png")
    World.add(world, this.body)
      }
      display(){
          push()
          translate(this.body.position.x, this.body.position.y)
          rotate(this.body.angle)
          fill("purple")
          ellipseMode(RADIUS)
          ellipse(0, 0, this.radius)
          pop()
      }


}