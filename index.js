const xClass = "x";
const circleClass = "circle";

const boxes = document.querySelectorAll(".box");
let circleTurn;

boxes.forEach((box) => {
  box.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const box = e.target;
  const currentTurn = circleTurn ? circleClass : xClass;

  placeMark(box, currentTurn);
  switchTurns();
}

function placeMark(box, currentTurn) {
  box.classList.add(currentTurn);
}

function switchTurns() {
  circleTurn = !circleTurn;
}
