# Space Battle
[Link Deploy](https://github.com/ioannistourtouras/Project-Game)


## Description
Space Battle is an action game, where the player controls the spaceship and tries to avoid asteroids to gain score. To avoid them you should use the left and right arrows, because if an asteroid meets the spaceship, the spaceship is destroyed and the space-journey ends.


## MVP
* The spaceship moves along the baseline, right and left
* Asteroids come from the top of the screen
* The spaceship should try to avoid the asteroid or shoot them with the laser
* A collision between an asteroid and the spaceship destroys the spaceship


## Backlog


## Data structure

# sketch.js

- preload()
- setup()
- draw()
- startGame()
- collision()
- toggleGameOver()

# classes.js

- Player () {
    this.x 
    this.y
    this.w
    this.h
}

- Spaceship () {
    this.x
    this.y
    this.w
    this.h
}

- draw () {}
- move () {}
- collidesWithObstacles() {}

- SingleObstacle () {
    this.x
    this.y
    this.w
    this.h
}

- draw() {}

- AllOfObstacles () {
    this.score
    this.array
}

- draw() {}
- addObstacle() {}
- update() {}

- Singlelaser () {
    this.w
    this.h
    this.x
    this.y
    this.speed
}

- draw() {}
- move() {}

- AllOfLasers () {
    this.array
}

- draw() {}
- move() {}
- spawnLaser() {}
- crashesAsteroid() {}


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Task

- sketch - buildDom
- sketch - buildSplashScreen
- sketch - addEventListener
- sketch - buildGameScreen
- sketch - buildGameOverScreen
- sketch - startLoop
- sketch - buildCanvas
- sketch - keyPressed
- sketch - drawCanvas
- classes - ship draw
- classes - ship move
- classes - ship collidesWithObstacles
- classes - obstacle draw
- classes - addObstacle
- classes - update
- classes - laser draw
- classes - laser move
- classes - spawnLaser
- classes - crashesAsteroid
- sketch - checkCollision
- sketch - GameOver
- sketch - addEventListener

## Additional Links


### Trello
[Link url](https://trello.com)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/ioannistourtouras/Project-Game)

### Slides
[Link Slides.com](http://slides.com)



