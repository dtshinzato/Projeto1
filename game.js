class Game {
  constructor() {
    this.selection = 10; // quantos personagens selecionaveis
  }

  genSelection(board) {
    // criação do tabuleiro
    for (let i = 0; i < this.selection; i++) {
      const card = document.createElement("div"); // criação de divs relacionado a quantidade de personagens
      card.classList.add("card", "personagem"); // adicionar classe as divs (card e personagem)

      board.appendChild(card); // section do tabuleiro adota card criado na linha acima
    }
  }
}
