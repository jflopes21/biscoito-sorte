//Variáveis
const btnCookie = document.querySelector("#btnCookie");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneMessage = document.querySelector(".fortune-message p");
let numberPhrase = Math.round(Math.random() * 10);
const phrases = [
  "Mais vale um passáro na mão do que dois voando.",
  "Se a vida te der limões faça uma limonada.",
  "É uma vida na vida.",
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Siga os bons e aprenda com eles.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  "O conhecimento é a única virtude e a ignorância é o único vício.",
  "A maior barreira para o sucesso é o medo do fracasso.",
  "Aprenda com seus erros, eles te farão mais forte."
];

// Eventos
btnCookie.addEventListener("click", showFortuneMessage);
btnAgain.addEventListener("click", showAgain);
document.addEventListener("keydown", pressEnter);

//Funções
function showFortuneMessage() {
  fortuneMessage.innerText = phrases[numberPhrase];
  toggleScreen();
}

function showAgain() {
  numberPhrase = Math.round(Math.random() * 10);
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    showAgain();
  }
}

