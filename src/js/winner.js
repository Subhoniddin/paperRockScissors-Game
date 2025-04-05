import { resultElement, scoreElement } from "./htmlElaments";

export function determineWinner(playerChoice, computerChoice, score) {
   
    const winningConditions = {
      paper: ['rock', 'puppy'],
      rock: ['scissors', 'lizard'],
      scissors: ['paper', 'lizard'],
      lizard: ['paper', 'puppy'],
      puppy: ['rock', 'scissors']
    };
    resultElement.innerText = "...";
    setTimeout(() => {
        if (playerChoice === computerChoice) {
            resultElement.innerText = "DURRANG 😀";
            return;
          }
        
        if (winningConditions[playerChoice]?.includes(computerChoice)) {
            score++;
            resultElement.innerText = "YOU WIN";
          } else {
            if (score > 0) {
              score--;
            }
            resultElement.innerText = "YOU LOSE";
          }
          scoreElement.textContent = score;
    }, 1500)
  }
  