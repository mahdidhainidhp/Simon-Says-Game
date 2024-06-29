const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

document.addEventListener('keypress', () => {
  if (!started) {
    document.querySelector("#level-title").textContent = `Level ${level}`;
    nextSequence();
    started = true;
  }
});

function nextSequence() { 
    // this function increments the level, updates the title, chooses a random color, adds it to the sequence, and animates the chosen button.  
  userClickedPattern = [];
  level++;
  document.querySelector("#level-title").textContent = `Level ${level}`;

  const randomChosenColor = getRandomColor();
  gamePattern.push(randomChosenColor);

  animateButton(randomChosenColor);
  soundOn(randomChosenColor);
}

// this function will generate random colors to handle its selection
function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * 4);
    return buttonColors[randomNumber];
}

// this function highlights the block
function animateButton(color) {
    const button = document.getElementById(color);
    button.style.opacity = 0.5;
    setTimeout(() => {
        button.style.opacity = 1;
    }, 500);
}

// Handle button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
  
function handleButtonClick(event) {
    const userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
  
    soundOn(userChosenColor);
    clickAnimation(userChosenColor);
}

// function to play the sound
function soundOn(audioName) {
    const sound = new Audio(`sounds/${audioName}.mp3`);
    sound.play();
}

// function to animate the block when clicked
function clickAnimation(currentColor) {
    const button = document.getElementById(currentColor);
    button.classList.add('pressed');
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 100);
}