const playerChoice = document.querySelector(".player-choice");
const pcChoice = document.querySelector(".pc-choice");
const playerScore = document.querySelector(".player-score");
const pcScore = document.querySelector(".pc-score");
const gameText = document.querySelector(".game-title");
const btnReset = document.querySelector(".btn");

const cards = document.querySelectorAll(".card");

let playerPoints = 0;
let pcPoints = 0;
let pcChoiceNum;
let pcChoiceName;

// Reset settings
const resetGame = () => {
  playerChoice.textContent = "";
  pcChoice.textContent = "";
  playerScore.textContent = "0";
  pcScore.textContent = "0";
  gameText.innerHTML = `
    <h1>Let's play a game...</h1>
    <h3>Pick your weapon!</h3>
  `;
  playerPoints = 0;
  pcPoints = 0;
  pcChoiceName = "";

  cards.forEach((card) => {
    card.classList.remove("noHover");
  });
};
resetGame();

const randomNumber = () => Math.floor(Math.random() * (3 - 1 + 1) + 1);

const randomChoice = function () {
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (randomNumber === 1) {
    pcChoice.textContent = "👊";
    pcChoiceName = "Rock";
  }
  if (randomNumber === 2) {
    pcChoice.textContent = "✋";
    pcChoiceName = "Paper";
  }
  if (randomNumber === 3) {
    pcChoice.textContent = "✌";
    pcChoiceName = "Scissors";
  }
  pcChoiceNum = randomNumber;
};

const noHover = () => {
  cards.forEach((card) => {
    card.classList.add("noHover");
  });
};

const game = function (card) {
  const playerChoiceNum = +card.dataset.num;
  const playerChoiceName = card.dataset.name;

  if (
    (playerChoiceNum === 1 && pcChoiceNum === 3) ||
    (playerChoiceNum === 2 && pcChoiceNum === 1) ||
    (playerChoiceNum === 3 && pcChoiceNum === 2)
  ) {
    gameText.innerHTML = `
    <h1>You win!</h1>
    <h3>${playerChoiceName} beats ${pcChoiceName}</h3>
    `;

    playerPoints += 1;
  } else if (
    (playerChoiceNum === 1 && pcChoiceNum === 2) ||
    (playerChoiceNum === 2 && pcChoiceNum === 3) ||
    (playerChoiceNum === 3 && pcChoiceNum === 1)
  ) {
    gameText.innerHTML = `
    <h1>You lost!</h1>
    <h3><span class="colored">${playerChoiceName} loses versus ${pcChoiceName}</h3>
    `;
    pcPoints += 1;
  } else {
    gameText.innerHTML = `
    <h1>Tie!</h1>
    <h3>Great minds think alike...</h3>
  `;
  }
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    randomChoice();
    gameText.textContent = "";
    game(card);

    playerChoice.textContent = card.textContent;
    playerScore.textContent = playerPoints;
    pcScore.textContent = pcPoints;

    if (playerPoints === 5) {
      gameText.innerHTML = `
      <h1>🎉Congratulatins! You are superior being!🎉</h1>
      <h3>Do you want to play again?</h3>
      <button class="btn">Yes!</button>
      `;
      noHover();
    }
    if (pcPoints === 5) {
      gameText.innerHTML = `
      <h1>😔Unfortunately... Stupid Ai...😔</h1>
      <h3>Do you want to play again?</h3>
      <button class="btn">Yes!</button>
      `;
      noHover();
    }
  });
});

document.addEventListener("click", (event) => {
  if (event.target.matches(".btn")) {
    resetGame();
  }
});
