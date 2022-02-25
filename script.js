const startDisplay = document.querySelector('.game-intro')
let bg
const gameBoard = document.querySelector('#game-board')
let shipImg



// it stores only the image. it needs some time to load the image.
// so we need preload
function preload() {
    bg = loadImage('assets/gameBoard.jpg')
    shipImg = loadImage("assets/Ship1.png")
}

function setup() {
    const canvas = createCanvas(500, 600)
    canvas.parent('game-board');    
    console.log(bg)
  }

  class Player {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }

}

  class Spaceship extends Player {
    constructor( canvasWidth, canvasHeight) {
    const w = 80
    const h = 80
    const x = canvasWidth/2 - w/2
    const y = canvasHeight - h
    super(x, y, w, h)
    // this.img = img
    }

    draw() {
        image(shipImg, this.x, this.y, this.w, this.h)
    }


} 

  let spaceship = new Spaceship( 500, 600)
  //
    function draw() {
      background(bg)
      spaceship.draw()

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