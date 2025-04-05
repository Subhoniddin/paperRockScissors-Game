import {choicesElement, playingZone, userChoiceDiv, userChoiceImg, computerChoiceDiv, computerChoiceImg, resultElement, scoreElement, playAgainBtn, advancedBtn, rulesBtn, modal, closeModal, rulesImage, choiceItems} from './htmlElaments'

import { advance } from './advanced';
import { determineWinner } from './winner';

let isAdvancedMode = false;
let score = 0;

const basicChoices = ['paper', 'rock', 'scissors'];
const advancedChoices = ['paper', 'rock', 'lizard', 'puppy', 'scissors'];

const imagePaths = {
  paper: './src/images/paper.svg',
  rock: './src/images/rock.svg',
  lizard: './src/images/lizard.png',
  puppy: './src/images/puppy.png',
  scissors: './src/images/scissors.svg',
  loading: './src/images/load.png',
};

// Qoidalar rasmi
const rulesImages = {
  basic: './src/images/rule-basic.png',
  advanced: './src/images/rules5.png',
};

// Kompyuter tanlovini olish
function getComputerChoice() {
  const choices = isAdvancedMode ? advancedChoices : basicChoices;
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// O‘yin maydonini ko‘rsatish
function showPlayingZone(playerChoice, computerChoice) {
  choicesElement.classList.add('hidden');
  playingZone.classList.remove('hidden');

  userChoiceImg.src = imagePaths[playerChoice];
 
  computerChoiceImg.src = imagePaths.loading;

  setTimeout(() => {
    computerChoiceImg.src = imagePaths[computerChoice];
  }, 1200);
}

// "Advanced" tugmasi
advance(isAdvancedMode)

// Rules
rulesBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  rulesImage.src = ''
  rulesImage.src = isAdvancedMode ? rulesImages.advanced : rulesImages.basic;
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

choiceItems.forEach(item => {
  item.addEventListener('click', () => {
    const playerChoice = item.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice, score);
    showPlayingZone(playerChoice, computerChoice);
  });
});

// Play Again
playAgainBtn.addEventListener('click', () => {
  playingZone.classList.add('hidden');
  choicesElement.classList.remove('hidden');
});