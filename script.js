const board = document.getElementById("board");
const header = document.getElementById("header"); // cabeçalho
const start = document.getElementById("start"); // botão Start
const personagem = document.getElementsByClassName("personagem"); //
const health = document.getElementById("health");
const confirmBtn = document.getElementById("confirmBtn");

start.addEventListener("click", () => {
  // Esconder cabeçalho e aparecer seleção de personagens
  header.classList.add("hidden");
  const game = new Game();
  game.genSelection(board);

  for (let i = 0; i < personagem.length; i++) {
    personagem[i].addEventListener("click", () => {
      const confirmar = document.createElement("button");
      confirmar.classList.add("btn-3d");
      confirmar.innerHTML = "Confirm your character";
      confirmBtn.appendChild(confirmar); // no fim adicionar o botão ao final do tabuleiro

      confirmar.addEventListener("click", () => {
        let jogoPrincipal = document.getElementById("mainGame");
        jogoPrincipal.style.display = "flex";
        const personagemSelecionado =
          document.getElementsByClassName("container jogador");
      });
    });
  }
});

// personagem.addEventListener("click", () => {
//   console.log(oi);
//   const confirmar = document.createElement("button");
//   confirmar.classList.add("btn-3d");
//   confirmar.innerHTML = "Confirm your character";
// });

// health.value -= 10;

// Math.random()*10
// if
