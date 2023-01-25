const board = document.getElementById("board");
const header = document.getElementById("header"); // cabeçalho
const start = document.getElementById("start"); // botão Start
const personagem = document.getElementsByClassName("personagem"); //
const health = document.getElementById("health");
const confirmBtn = document.getElementById("confirmBtn");
const oponente = document.getElementById("oponente");
const jogador = document.getElementById("jogador");
const jogoPrincipal = document.getElementById("mainGame");
const retornarBtn = document.getElementById("retornarBtn");
let contador = 0

// let selecao = document.querySelectorAll('card');

start.addEventListener("click", () => {
  // Esconder cabeçalho e aparecer seleção de personagens
  header.classList.add("hidden");
  const game = new Game();
  game.genSelection(board);

  let selecionado;

  for (let i = 0; i < personagem.length; i++) {
    personagem[i].addEventListener("click", (event) => {
      selecionado = event.currentTarget;
      for (let j = 0; j < personagem.length; j++) {
        personagem[j].classList.remove("personagemSelecionado");
      }
      selecionado.classList.add("personagemSelecionado");
    });
  }

  let confirmar = document.createElement("button");
  confirmar.classList.add("btn-3d");
  confirmar.innerHTML = "Confirm your character";
  confirmBtn.appendChild(confirmar); // no fim adicionar o botão ao final do tabuleiro

  confirmar.addEventListener("click", () => {
    if (!selecionado) {
      return;
    }

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

retornarBtn.addEventListener("click",()=>{
  jogoPrincipal.style.display = "none";
  board.style.display = "flex";
  confirmBtn.style.display = "block";
  retornarBtn.style.display = "none";
})
// const personagemJogador = document.createElement("div");
// personagemJogador.classList.add("personagemJogador");
// personagemJogador.setAttribute("src",`./images/${selecionado.getAttribute("dataimg")}.jpg`
// );
// confirmBtn.appendChild(personagemJogador);
