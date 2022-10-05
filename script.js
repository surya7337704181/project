'use strict';
let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent=secreatNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO Number is Entered';
  } else if (guess === secreatNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secreatNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Big';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < secreatNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Less';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game';
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Keep Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').textContent = '?';
});
