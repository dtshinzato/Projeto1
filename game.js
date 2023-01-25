class Game {
  constructor() {
    this.selection = 10; // quantos personagens selecionaveis
  }

  genSelection(board) {
    // criação do tabuleiro
    let counter = 0; // Criei um contador para mudar a imagem
    for (let i = 0; i < this.selection; i++) {
      counter++; // lógica para o contador ir de 1 a 10
      const card = document.createElement("div"); // criação de divs relacionado a quantidade de personagens
      card.classList.add("card", "personagem"); // adicionar classe as divs (card e personagem)

      board.appendChild(card); // section do tabuleiro adota card criado na linha acima

      const img = document.createElement("img"); // criar uma img
      img.setAttribute("src", `./images/${counter}.jpg`); // e rotacionar para cada contador ser uma img
      card.setAttribute("dataimg", counter);
      card.appendChild(img); //atribuir cada div com uma imagem
      this.createOponent();
    }
  }

  createOponent() {
    oponente.setAttribute(
      "src",
      `./images/${Math.floor(Math.random() * (10 - 1 + 1)) + 1}.jpg`
    ); // Pegando um oponente aleatóriamente
  }

  // recompensa1(){
  //   const premio1 = document.createElement('button');
  //   premio1.classList.add('premio')
  //   premio1.innerHTML = "Mais vida!";

  // }
  // recompensa2(){
  //   const premio2 = document.createElement('button');
  //   premio2.classList.add('premio')
  //   premio2.innerHTML = "Mais dano!";
  // }

  // oponenteUp(){

  //}

  retornarAoInicio() {
    
    if (contador===0){
      const retornar = document.createElement("button");
      retornar.classList.add("btn-3d");
      retornar.innerHTML = "Voltar a seleção";
      retornarBtn.appendChild(retornar);
    }
    retornarBtn.style.display = "block";
    contador ++

  }

  partida() {
    const oponentHealth = document.getElementById("health-oponent");
    const playerHealth = document.getElementById("health-player");
    const jogoPrincipal = document.getElementById("mainGame");
    let gameOver = false;
    let win = false;

    let duracaoJogo = setInterval(() => {
      playerHealth.value =
        playerHealth.value - (Math.floor(Math.random() * 3) + 1);
      oponentHealth.value =
        oponentHealth.value - (Math.floor(Math.random() * 3) + 1);

      console.log(playerHealth.value);
      if (playerHealth.value <= 0 && !gameOver) {
        gameOver = true;
        // jogoPrincipal.style.display = "none";
        this.retornarAoInicio();
        clearInterval(duracaoJogo);
        playerHealth.value = 10;
        oponentHealth.value = 10;
        return window.alert("Game Over");
      } else if (oponentHealth.value <= 0 && !win) {
        win = true;
        clearInterval(duracaoJogo);
        playerHealth.value = 10;
        oponentHealth.value = 10;
        this.retornarAoInicio();
        return window.alert("Você ganhou!!!");

        // recompensa1()
        // recompensa2()
        // oponenteUp()
      }
    }, 4000);
  }
}
