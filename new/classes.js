class Player {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

}

class Spaceship extends Player {
    constructor(canvasWidth, canvasHeight) {
    const w = 80
    const h = 80
    const x = canvasWidth/2 - w/2
    const y = canvasHeight - h
    super(x, y, w, h)
    //this.img = img
    }

    draw() {
        image(shipImg, this.x, this.y, this.w, this.h)
    }

    move() {      
      if (keyIsDown(LEFT_ARROW)) {
        this.y -= 10
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.y += 10
      }
    }  
} 

class Obstacles  extends Player {
  constructor() {
    const w = 30
    const h = 120
    const x = random(0, 501)
    const y = 0 
    super(x, y ,w, h)
    this.score = 0
    this.array = []
    
  }

  draw() {
    image(missileImg, this.x, this.y - h, this.w, this.h)
  }

  addObstacle() {
    this.array.push(new Obstacles())
  }

  update() {
    const every120Frames = frameCount % (60 * 2) === 0
    if(every120Frames) {
      this.addObstacle()
    }

    this.array.forEach((obstacle, index) => {
      this.y += 10
      if(obstacle.y + obstacle.h >= height) {
        this.score += 100
        this.array.splice(index, 1, this.addObstacle())
      }
      obstacle.draw()
    })
    textSize(30)
    text(`Score: ${this.score}`, canvasWidth / 2, canvasHeight / 2)
  }
}