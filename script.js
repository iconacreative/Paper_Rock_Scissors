var humanScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

function playRock() {
  play("rock");
}

function playPaper() {
  play("paper");
}

function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  computerPlay = getComputerPlay();

// why is this function created. If human plays, then computer responds?

document.getElementById('status').innerHTML = "<p>You played " + humanPlay + ". The computer played " + computerPlay + ".</p>";

if(humanPlay == 'rock') {
  if(computerPlay == 'rock') {
    document.getElementById('status').innerHTML += "<p>You tied.</p>";
  } else if(computerPlay == 'paper') {
    document.getElementById('status').innerHTML += "<p>You lose.</p>";
    computerScore++;
  } else if(computerPlay == 'scissors') {
    document.getElementById('status').innerHTML += "<p>You win.</p>";
    humanScore++;
  }
} else if(humanPlay == 'paper') {
      if(computerPlay == 'rock') {
    document.getElementById('status').innerHTML += "<p>You win.</p>";
    humanScore++;
  } else if(computerPlay == 'paper') {
    document.getElementById('status').innerHTML += "<p>You tied.</p>";
  } else if(computerPlay == 'scissors') {
    document.getElementById('status').innerHTML += "<p>You lose.</p>";
    computerScore++;
  }
} else if(humanPlay == 'scissors') {
      if(computerPlay == 'paper') {
    document.getElementById('status').innerHTML += "<p>You win.</p>";
    humanScore++;
  } else if(computerPlay == 'scissors') {
    document.getElementById('status').innerHTML += "<p>You tied.</p>";
  } else if(computerPlay == 'rock') {
    document.getElementById('status').innerHTML += "<p>You lose.</p>";
    computerScore++;
  }
}

  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;

}