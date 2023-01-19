class Game {
  constructor() {
    this.selection = 10;
  }

  genSelection(board) {
    for (let i = 0; i < this.selection; i++) {
      const card = document.createElement("div");
      card.classList.add("card", "personagem");

      board.appendChild(card);
    }
  }
}
