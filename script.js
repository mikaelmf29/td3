const carrossel = document.querySelector(".carrossel");
const imagens = carrossel.querySelectorAll("img");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

let indiceAtual = 0;

function mostrarSetaEsquerda() {
  setaEsquerda.style.display = "block";
}

function esconderSetaEsquerda() {
  setaEsquerda.style.display = "none";
}

function mostrarSetaDireita() {
  setaDireita.style.display = "block";
}

function esconderSetaDireita() {
  setaDireita.style.display = "none";
}

function trocarImagem(novaImagem) {
  imagens[indiceAtual].classList.remove("ativa");
  imagens[novaImagem].classList.add("ativa");
  indiceAtual = novaImagem;

  if (indiceAtual === 0) {
    esconderSetaEsquerda();
  } else {
    mostrarSetaEsquerda();
  }

  if (indiceAtual === imagens.length - 1) {
    esconderSetaDireita();
  } else {
    mostrarSetaDireita();
  }
}

setaEsquerda.addEventListener("click", () => {
  trocarImagem(indiceAtual - 1);
});

setaDireita.addEventListener("click", () => {
  trocarImagem(indiceAtual + 1);
});

// Exibe a primeira imagem por padrão
imagens[0].classList.add("ativa");

mostrarSetaDireita();
