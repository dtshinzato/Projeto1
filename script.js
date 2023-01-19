const board = document.getElementById("board");
const header = document.getElementById("header");
const start = document.getElementById("start");
const personagem = document.getElementsByClassName("personagem");

start.addEventListener("click", () => {
  header.classList.add("hidden");
  const game = new Game();
  game.genSelection(board);
});

personagem.addEventListener("click", () => {
  const confirmCharacter = document.createElement("button");
  confirmCharacter.classList.add("confirmButton", "btn-3d");
  board.appendChild(confirmCharacter);
});
