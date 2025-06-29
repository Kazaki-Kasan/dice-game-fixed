// Roll dice
let Dice1 = Math.floor(Math.random() * 6) + 1;
let Dice2 = Math.floor(Math.random() * 6) + 1;

// Determine outcome
let outcomeText;
if (Dice1 > Dice2) {
  outcomeText = "Dice 1 is greater than Dice 2";
} else if (Dice1 < Dice2) {
  outcomeText = "Dice 2 is greater than Dice 1";
} else {
  outcomeText = "Both dice are equal";
}

// Update HTML
document.getElementById('dice1').textContent = `Dice 1: ${Dice1}`;
document.getElementById('dice2').textContent = `Dice 2: ${Dice2}`;
document.getElementById('outcome').textContent = outcomeText;

// Add images
const diceImages = [
  './dice-six-faces-one.svg',
  './dice-six-faces-two.svg',
  './dice-six-faces-three.svg',
  './dice-six-faces-four.svg',
  './dice-six-faces-five.svg',
  './dice-six-faces-six.svg'
];

const diceImagesContainer = document.getElementById('dice-images');

const dice1Image = document.createElement('img');
dice1Image.src = diceImages[Dice1 - 1];
dice1Image.alt = `Dice 1: ${Dice1}`;
diceImagesContainer.appendChild(dice1Image);

const dice2Image = document.createElement('img');
dice2Image.src = diceImages[Dice2 - 1];
dice2Image.alt = `Dice 2: ${Dice2}`;
diceImagesContainer.appendChild(dice2Image);

// Add button listener
document.getElementById('rollButton').addEventListener('click', () => {
  location.reload();
});
