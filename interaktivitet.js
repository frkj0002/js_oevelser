console.log("sidenVises");

const snaps = document.querySelector("#snaps");
const beer = document.querySelector("#beer");
const cola = document.querySelector("#cola");
const faxe = document.querySelector("#faxe");

snaps.addEventListener("click", funktionDerKaldesVedKlik);
beer.addEventListener("click", funktionDerKaldesVedKlik);
cola.addEventListener("click", funktionDerKaldesVedKlik);
faxe.addEventListener("click", funktionDerKaldesVedKlik);

function funktionDerKaldesVedKlik() {
  console.log("Du har klikket på knappen");
  if (this === snaps || this === beer) {
    console.log("Indeholder alkohol");
  } else {
    console.log("Alkoholfri");
  }
}
