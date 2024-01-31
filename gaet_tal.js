console.log("sidenVises");

let randomNumber = Math.round(Math.random() * 11);
let guesses = 0;

const resultat = document.querySelector("#resultat");

function checkGuess() {
  let userguess = parseInt(document.querySelector("#tal").value);
  if (userguess === randomNumber) {
    guesses++;
    resultat.textContent = "Tillykke! " + randomNumber + " er rigtigt. Du brugte " + guesses + " forsøg. Prøv igen med et nyt tal :)";
    startForfra();
  } else if (userguess < randomNumber) {
    guesses++;
    resultat.textContent = "Øv! " + userguess + " var for lavt. Prøv igen.";
  } else {
    guesses++;
    resultat.textContent = "Øv! " + userguess + " var for højt. Prøv igen.";
  }
}
function startForfra() {
  randomNumber;
  guesses = 0;
}
