const playerChoice = document.querySelector(".player-choice");
const pcChoice = document.querySelector(".pc-choice");
const playerScore = document.querySelector(".player-score");
const pcScore = document.querySelector(".pc-score");

const cards = document.querySelectorAll(".card");

let playerPoints = 0;
let pcPoints = 0;
let pcChoiceNum;

// Reset settings
const resetGame = () => {
  playerChoice.textContent = "";
  pcChoice.textContent = "";
  playerScore.textContent = "0";
  pcScore.textContent = "0";
  playerPoints = 0;
  pcPoints = 0;
};
resetGame();

const randomNumber = () => Math.floor(Math.random() * (3 - 1 + 1) + 1);

const randomChoice = function () {
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (randomNumber === 1) pcChoice.textContent = "👊";
  if (randomNumber === 2) pcChoice.textContent = "✋";
  if (randomNumber === 3) pcChoice.textContent = "✌";
  pcChoiceNum = randomNumber;
};

const game = function (card) {
  const playerChoiceNum = +card.dataset.num;

  if (
    (playerChoiceNum === 1 && pcChoiceNum === 3) ||
    (playerChoiceNum === 2 && pcChoiceNum === 1) ||
    (playerChoiceNum === 3 && pcChoiceNum === 2)
  ) {
    playerPoints += 1;
  } else if (
    (playerChoiceNum === 1 && pcChoiceNum === 2) ||
    (playerChoiceNum === 2 && pcChoiceNum === 3) ||
    (playerChoiceNum === 3 && pcChoiceNum === 1)
  ) {
    pcPoints += 1;
  } else return;
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    randomChoice();
    game(card);

    playerScore.textContent = playerPoints;
    pcScore.textContent = pcPoints;

    if (playerPoints === 5) {
      console.log("You win!");
      resetGame();
    }
    if (pcPoints === 5) {
      console.log("You lost!");
      resetGame();
    }
  });
});
