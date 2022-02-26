const startDisplay = document.querySelector('.game-intro')
let bg
const gameBoard = document.querySelector('#game-board')
let shipImg

function preload() {
    bg = loadImage('../assets/gameBoard.jpg')
    shipImg = loadImage("../assets/Ship1.png")
}

function setup() {
    const canvas = createCanvas(500, 600)
   // canvas.style('display', 'block')
    canvas.parent('game-board');  
    noLoop() 
    console.log(bg)
    spaceship = new Spaceship(500, 600)
}

/*function keyPressed() {
    if (keyCode === UP_ARROW) {
        
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
      gameBoard.style.display = 'flex'
    }
  };