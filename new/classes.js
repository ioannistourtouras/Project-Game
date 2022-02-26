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
      if (keyCode === UP_ARROW) {
        this.y -= 10
      } else if (keyCode === DOWN_ARROW) {
        this.y += 10
      }
    }
} 