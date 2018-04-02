const scores = [0,0];
const roundScore = 0;
const activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
  const dice = Math.floor(Math.random() * 6 ) + 1;

  const diceDisplay = document.querySelector('.dice');
  diceDisplay.src = 'img/dice-' + dice + '.png';

  if (dice !== 1) {
    roundScore += dice;
  } else {
    console.log(dice);
  }
});

//document.getElementById('current-0').textContent = dice;

