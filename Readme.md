# Space Battle
[Link Deploy](http://github.com)


## Description
Space Battle is an action game, where the player controls the spaceship and tries to avoid asteroids to gain score. To avoid them you should use the left and right arrows, because if an asteroid meets the spaceship, the spaceship is destroyed and the space-journey ends.


## MVP
* The spaceship moves along the baseline, right and left
* Asteroids come from the top of the screen
* A collision between an asteroid and the spaceship destroys the spaceship


## Backlog
Backlog elements.


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

- Obstacles () {
    this.x
    this.y
    this.w
    this.h
    this.score
    this.array
}

- draw() {}
- addObstacle() {}
- update() {}


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
- sketch - updateCanvas
- sketch - drawCanvas
- classes - ship draw
- classes - ship move
- classes - ship collidesWithObstacles
- classes - obstacle draw
- classes - addObstacle
- classes - update
- sketch - checkCollision
- sketch - GameOver
- sketch - addEventListener

## Additional Links


### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)




# Kraken Brigade

## Description

Kraken-Brigade is a game where the player has to move ships horizontally and shoot up incoming tentacles that appear from the top of the screen and move to the bottom. The game ends when four tentacles get stacked in front of the fort wall. After that, a score is calculated based on tentacle destroyed and the amount of time the game lasted.

## MVP (DOM - CANVAS)

- game has three ship that moves horizontally
- ship shoots cannonballs up
- tentacles appear randomly from the top of the screen
- four tentacles stacking will end the game
- cannonballs destroy tentacles
- reload time for shooting cannonballs
- Increasing dificulty

## Backlog

- add scoreboard
- Ability to start the game on increased dificulty lvl

## Data Structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addTentacle () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# ship.js 

- Ship () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- shoot () {}
- checkScreenCollision () {}

# tentacle.js 

- Tentacle () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionBotton () {}

# cannonball.js 

- Cannonball () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionTop () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- tentacle - draw
- tentacle - move
- game - addTentacle
- ship - draw
- ship - move
- ship - shoot
- game - addShip
- cannonball - draw
- cannonball - move
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/jorgeberrizbeitia/kraken-brigade)
[Link Deploy](https://jorgeberrizbeitia.github.io/kraken-brigade/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)