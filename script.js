'use strict';

// Initial selections
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const check = document.querySelector('.check');
const tryAgain = document.querySelectorAll('.try-again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let currentScore = 20;
let highscore = 0;

const displayMessage = (msg) => {
   message.textContent = msg;
};

// Event listeners
check.addEventListener('click', () => {
   if (currentScore > 1) {
      if (guess.value === '') {
         // Input is empty
         displayMessage('Please choose a number.');
      } else if (Number(guess.value) === secretNumber) {
         // Player wins
         displayMessage('🥇 You won!');
         number.textContent = secretNumber;
         if (currentScore > highscore) {
            highscore = currentScore;
            document.querySelector('.highscore').textContent = highscore;
         }
         document.querySelector('body').style.backgroundColor = '#0aa93e';
      } else if (Number(guess.value) !== secretNumber) {
         // Guess is wrong
         displayMessage(
            Number(guess.value) > secretNumber ? 'Too high!' : 'Too low'
         );
         currentScore -= 1;
         score.textContent = currentScore;
      }
   } else {
      // Player loses
      message.textContent = 'You lost!';
      score.textContent = 0;
      number.textContent = '☹';
      document.querySelector('body').style.backgroundColor = '#a92828';
   }
});

tryAgain.forEach((btn) => {
   btn.addEventListener('click', () => {
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      currentScore = 20;
      score.textContent = currentScore;
      guess.value = '';
      number.textContent = '?';
      displayMessage('Start guessing...');
      document.querySelector('body').style.backgroundColor = '#333';
   });
});
