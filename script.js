const playerOneScore = document.querySelector(".player1-score");
const playerTwoScore = document.querySelector(".player2-score");
const totalNumber = document.querySelector(".total-number");
const input = document.querySelector(".input");
const playerOneButton = document.querySelector(".player1-button");
const playerTwoButton = document.querySelector(".player2-button");
const resetButton = document.querySelector(".reset");
let gameOver = false;
let winningScore = 5;

let p1Score = 0;
let p2Score = 0;

playerOneButton.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      playerOneScore.classList.add("winner");
    }
    playerOneScore.textContent = p1Score;
  }
});

playerTwoButton.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      playerTwoScore.classList.add("winner");
    }
    playerTwoScore.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function () {
  reset();
});

input.addEventListener("change", function () {
  totalNumber.textContent = input.value;
  winningScore = Number(input.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  playerOneScore.textContent = "0";
  playerTwoScore.textContent = "0";
  playerOneScore.classList.remove("winner");
  playerTwoScore.classList.remove("winner");
  gameOver = false;
}
