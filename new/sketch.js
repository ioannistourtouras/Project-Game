const startDisplay = document.querySelector('.game-intro')
let bg
const gameBoard = document.querySelector('#game-board')
let shipImg
let canvasWidth
let canvasHeight
let spaceship
let obstacles
let missileImg
const gameOver = document.getElementById('game-over')

function preload() {
    bg = loadImage('../assets/gameBoard.jpg')
    shipImg = loadImage("../assets/Ship1.png")
    missileImg = loadImage("../assets/missile1.png")
}

function setup() {
    const canvas = createCanvas(500, 600)
   // canvas.style('display', 'block')
    canvas.parent('game-board');  
    noLoop() 
    console.log(bg)
    spaceship = new Spaceship(500, 600)
    obstacles = new Obstacles()
}

/*function keyPressed() {
    if (keyCode === UP_ARROW) {
        
    }
}*/
/*function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
           this.x += 10;
  } else if (keyCode === LEFT_ARROW ) {
           this.x -= 10
  }
}*/

function draw() {
    background(bg)
    spaceship.draw()
    //translate(windowWidth, windowHeight)
    spaceship.move()
    obstacles.update()
    if(spaceship.collidesWithObstacles()) {
      return toggleGameOver()
    }
}

function toggleGameOver() {
  noLoop()
  gameBoard.style.display = 'none'
  startDisplay.style.display = 'flex'
  gameOver.style.display = 'flex'
  gameOver.innerText = `Your final score is ${obstacle.score}`

  spaceship = new Spaceship(canvasWidth, canvasHeight)
  obstacles = new Obstacles()
}

function collision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  )
}

window.onload = () => {

    gameBoard.style.display = 'none'
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
    
    function startGame() {    
      startDisplay.style.display = 'none'
      gameOver.style.display = 'none'
      gameBoard.style.display = 'block'
      loop()
    }
  };