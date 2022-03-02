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
      if (keyIsDown(LEFT_ARROW) && this.x >= 10) {
        this.x -= 10
      } else if (keyIsDown(RIGHT_ARROW) && this.x <= width - (this.w + 10)) {
        this.x += 10
      }
    }
    
    collidesWithObstacles() {
     // console.log(obstacles, spaceship)
      
      return !!obstacles.array.find(obstacle => collision(obstacle, this))
      
    }
} 

class SingleObstacle extends Player {
  constructor() {
    const w = 80
    const h = 80
    const x = random(0, 501)
    const y = 0 
    super(x, y ,w, h)    
  }

  draw() {
    /*translate(width/2, height/2)
    rotate(PI)*/    
    image(missileImg, this.x, this.y, this.w, this.h)
  }  
  
}


class AllOfObstacles {
  constructor() {
    this.score = 0
    this.array = []      
  }

  draw() {
    /*translate(width/2, height/2)
    rotate(PI)*/    
    this.array.map(element => element.draw())
  }

  addObstacle() {
    this.array.push(new SingleObstacle())
  }

  update() {
    
    const every120Frames = frameCount % (60 * 2) === 0
    
    
    if(this.array.length < 4 && every120Frames) {
      //console.log(every120Frames)
      this.addObstacle()
    }

    this.array.forEach((obstacle, index) => {
      obstacle.y += 4
      if(obstacle.y >= height) {
        this.score += 100
        scoreElem.innerText = this.score
        this.array.splice(index, 1)
        this.addObstacle()
      }
      obstacle.draw()
    })
    textSize(30)
    text(`Score: ${this.score}`, canvasWidth / 2, canvasHeight / 2)
  }
}

class Singlelaser {
  constructor() {
    console.log(spaceship)
    this.w = 4
    this.h = 60
    this.x = spaceship.x + spaceship.w / 2 - this.w / 2
    this.y = spaceship.y - this.h
    this.speed = 10
    //console.log(this.x1);
    //console.log(this.y1);

    //this.array = [] 
  }

  draw() {
    let colorOfLaser = color(240, 24, 5)
    fill(colorOfLaser)
    rect(this.x, this.y, this.w, this.h) 
 }

  move() {
         // console.log('keyIsDown')
      this.y -= this.speed
    }
  }

  


class AllOfLasers {
  constructor() {
    this.array = [] 
  }

  draw() {
    this.array.forEach(laser => laser.draw())     
    
 }

 move() {
   this.array.forEach(laser => laser.move())
 }

  spawnLaser() {
  
      this.array.push(new Singlelaser())
    
        
  }

  crashesAsteroid() {
     for(let i = 0; i < obstacles.array.length; i++) {
      // console.log('')
       for(let j = 0; j < this.array.length; j++) {
         //console.log(collision(obstacles.array[i], this.array[j]))
         console.log(obstacles.array[i], this.array[j])
         if(!!collision(obstacles.array[i], this.array[j])) {

          console.log('kgj')
           obstacles.score += 100
           scoreElem.innerText = obstacles.score
           obstacles.array.splice(i, 1)
           this.array.splice(j, 1)
         }
       }
     }
  }

}