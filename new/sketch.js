const startDisplay = document.querySelector('.game-intro')
let bg
const gameBoard = document.querySelector('#game-board')
let shipImg
let canvasWidth
let canvasHeight
let spaceship
let obstacles
let missileImg

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

}

window.onload = () => {

    gameBoard.style.display = 'none'
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
    
    function startGame() {    
      startDisplay.style.display = 'none'
      gameBoard.style.display = 'block'
    }
  };