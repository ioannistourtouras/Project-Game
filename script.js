const startDisplay = document.querySelector('.game-intro')
let bg
const gameBoard = document.querySelector('#game-board')
let shipImg = loadImage("assets/Ship1.png")


function setup() {
    // The background image must be the same size as the parameters
    // into the createCanvas() method. In this program, the size of
    // the image is 720x400 pixels.
    bg = loadImage('assets/gameBoard.jpg');
    const canvas = createCanvas(1000, 900)
    canvas.parent('game-board');
    
    console.log(bg)
  }

  function draw() {
      background(bg)
  }

 class Player {
     constructor(x, y, width, height) {
         this.x = x
         this.y = y
         this.width = width
         this.height = height
     }
 }

 class Spaceship extends Player {
     constructor(img) {
     super(x, y, width, height)
     this.img = shipImg
     }
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