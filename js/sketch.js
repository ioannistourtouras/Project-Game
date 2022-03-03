const startDisplay = document.querySelector('.game-intro')
let bg
const gameBoard = document.querySelector('#game-board')
let shipImg
let canvasWidth
let canvasHeight
let spaceship
let obstacles
let lasers
let missileImg
const gameOver = document.getElementById('game-over')
const gameOverElem = gameOver.querySelector('.gameover-text')
let scoreElem = document.getElementById('score-elem')


function preload() {
    bg = loadImage('../assets/gameBoard.jpg')
    shipImg = loadImage("../assets/Ship1.png")
    missileImg = loadImage("../assets/asteroid2.png")
}

function setup() {
    const canvas = createCanvas(800, 550)   
    canvas.parent('game-board');  
    noLoop() 
    
    spaceship = new Spaceship(800, 550)   
    obstacles = new AllOfObstacles()
    lasers = new AllOfLasers()
}

/* I want the single laser to move every frame (continuously) when it is shooted
so in the move() of singlelaser class I have only the value of y movement and I removed
the if keycode ...But in the func keyPressed in the sketches as indicated by p5, when 
w is pressed a new laser is put in the array, the move() is called for every laser and 
*/
function keyPressed() {
  if(keyCode === 87) {
    lasers.spawnLaser()
  }
}
function draw() {
    background(bg)
    spaceship.draw()
    //translate(windowWidth, windowHeight)
    spaceship.move()
    lasers.draw()
    lasers.move()
    
    lasers.crashesAsteroid()
    obstacles.update()
    if(spaceship.collidesWithObstacles()) {
      return toggleGameOver()
    }
}

function toggleGameOver() {
  noLoop()
  gameBoard.style.display = 'none'
  startDisplay.style.display = 'none' // we set it to none and have only one bg img and
  gameOver.style.display = 'flex' // they do not collide with each other
  gameOverElem.innerText = `Your final score is ${obstacles.score}`

  //pouplateStorage("score", `${obstacles.score}`)
  spaceship = new Spaceship(canvasWidth, canvasHeight)
  obstacles = new AllOfObstacles()
  console.log(obstacles.score)
  checkForHighScore(obstacles.score)
  showHighScores()
}

function collision(rect1, rect2) {
 // console.log("inside collision", rect1, rect2)
  return (  
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  )
}

window.onload = () => {

    gameBoard.style.display = 'none'
    gameOver.style.display = 'none'
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
    document.getElementById('restart-button').onclick = () => {
      setup();// in order to get drawn the ship, we need the function
      // setup, which creates an instance of the object ship, and then the draw fnc draws it.
      obstacles.score = 0;
      scoreElem.innerText = 0;
      startGame()
    }
    
    function startGame() {    
      startDisplay.style.display = 'none'
      gameOver.style.display = 'none'
      gameBoard.style.display = 'flex'      
      loop() // calls the function draw()
    }
};

function pouplateStorage(key, value) {
  localStorage.setItem('highScores', 300)
}


 let nameElem = document.getElementById('name')
 const listElem = document.createElement('li')
  

  const NO_OF_HIGH_SCORES = 10;
  const HIGH_SCORES = 'highScores'

  const highScoreString = localStorage.getItem(HIGH_SCORES)
  const highScores = JSON.parse(highScoreString) ?? []
  
  function checkForHighScore(score) {
  const highScores = JSON.parse(highScoreString) ?? [];
  const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;

  if (score > lowestScore) {
    saveHighScore(score, highScores)
    showHighScores()
  }
  }

  
  function saveHighScore(score, highScores) {

    const newScore = { score, nameElem }
    highScores.push(newScore)

    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(NO_OF_HIGH_SCORES)
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores))
  }

  highScores.map(score => `<li>${score.score} - ${score.nameElem}`)

  const highScoreList = document.getElementById('highScores')

  highScoreList.innerText = highScores.map(score => `<li>${score.score} - ${score.nameElem}`)

  function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementById(HIGH_SCORES);    
    highScoreList.innerHTML = highScores.map((score) => `<li>${score.score} - ${score.nameElem}`).join('');
  }












