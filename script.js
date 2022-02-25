const startDisplay = document.querySelector('.game-intro')
let bg


function setup() {
    // The background image must be the same size as the parameters
    // into the createCanvas() method. In this program, the size of
    // the image is 720x400 pixels.
    bg = loadImage('assets/gameBoard.jpg');
    const canvas = createCanvas(300, 200)
    canvas.parent('game-board');
    
    console.log(bg)
  }

  function draw() {
      background(bg)
  }








  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {    
      startDisplay.style.display = 'none'
    }
  };