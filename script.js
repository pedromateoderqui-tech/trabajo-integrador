var texto = document.getElementById("mas_historia");
var boton = document.getElementById("btn-ver-mas");

function alternarHistoria() {
  if (texto.classList.contains("oculto")) {
    texto.classList.remove("oculto");
    boton.textContent = "Ver menos";
  } else {
    texto.classList.add("oculto");
    boton.textContent = "Ver más";
  }
}

boton.addEventListener("click", alternarHistoria);