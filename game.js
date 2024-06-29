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
  playSound(randomChosenColor);
}

// this function will generate random colors to handle its selection
function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * 4);
    return buttonColors[randomNumber];
}