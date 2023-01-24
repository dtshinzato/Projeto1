const board = document.getElementById("board");
const header = document.getElementById("header"); // cabeçalho
const start = document.getElementById("start"); // botão Start
const personagem = document.getElementsByClassName("personagem"); //
const health = document.getElementById("health");
const confirmBtn = document.getElementById("confirmBtn");
const oponente = document.getElementById("oponente");
const jogador = document.getElementById("jogador");

start.addEventListener("click", () => {
  // Esconder cabeçalho e aparecer seleção de personagens
  header.classList.add("hidden");
  const game = new Game();
  game.genSelection(board);

  let selecionado;

  for (let i = 0; i < personagem.length; i++) {
    personagem[i].addEventListener("click", (event) => {
      selecionado = event.currentTarget;
    });
  }

  let confirmar = document.createElement("button");
  confirmar.classList.add("btn-3d");
  confirmar.innerHTML = "Confirm your character";
  confirmBtn.appendChild(confirmar); // no fim adicionar o botão ao final do tabuleiro

  confirmar.addEventListener("click", () => {
    console.log("click", selecionado.getAttribute("dataimg"));
    if (!selecionado) {
      return;
    }

    let jogoPrincipal = document.getElementById("mainGame");
    jogoPrincipal.style.display = "flex";
    board.style.display = "none";
    confirmBtn.style.display = "none";

    jogador.setAttribute(
      "src",
      `./images/${selecionado.getAttribute("dataimg")}.jpg`
    );
    game.partida();
  });
});
