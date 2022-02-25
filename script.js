const startDisplay = document.querySelector('.game-intro')
let bg
const gameBoard = document.querySelector('#game-board')



function preload() {
    bg = loadImage('assets/gameBoard.jpg')
    shipImg = loadImage("assets/Ship1.png")
}

function setup() {
    const canvas = createCanvas(800, 900)
    canvas.parent('game-board');    
    console.log(bg)
  }

function draw() {
      background(bg)

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
     constructor(shipImg) {
     const w = 80
     const h = 80
     const x = width/2 - w/2
     const y = height - h
     super(x, y, width, height)
     this.img = shipImg
     }

     draw() {
         image(this.img, this.x, this.y, this.w, this.h)
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