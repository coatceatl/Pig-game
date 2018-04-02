let scores = [0,0];
let roundScore = 0;
let activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
  const dice = Math.floor(Math.random() * 6 ) + 1;

  const diceDisplay = document.querySelector('.dice');
  diceDisplay.style.display = 'block';
  diceDisplay.src = 'img/dice-' + dice + '.png';

  if (dice !== 1) {
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;

    if(activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

  if(activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

});

