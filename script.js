const board = document.getElementById("board");
const header = document.getElementById("header"); // cabeçalho
const start = document.getElementById("start"); // botão Start
const personagem = document.getElementsByClassName("personagem"); //
const health = document.getElementById("health");

start.addEventListener("click", () => {
  // Esconder cabeçalho e aparecer seleção de personagens
  header.classList.add("hidden");
  const game = new Game();
  game.genSelection(board);
});

personagem.addEventListener("click", () => {
  // escolher personagem e adicionar as casses de botão para estilizar
  const confirmCharacter = document.createElement("button");
  confirmCharacter.classList.add("confirmButton", "btn-3d");
  board.appendChild(confirmCharacter); // no fim adicionar o botão ao final do tabuleiro
});

// health.value -= 10;
