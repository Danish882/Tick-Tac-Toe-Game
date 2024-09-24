let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#restart");
let newBtn = document.querySelector("#New");
let container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enaBtns();
  container.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.classList.add("O");
      turnO = false;
    } else {
      box.innerText = "X";
      box.classList.add("X");
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      drawGame();
    }
  });
});
const enaBtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let patterns of winPattern) {
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  container.classList.remove("hide");
  disBtns();
};
const drawGame = () => {
  msg.innerText = "Game is Draw";
  container.classList.remove("hide");
  disBtns();
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
