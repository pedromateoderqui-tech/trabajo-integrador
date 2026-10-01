// ===== Contador de monedas (sección Juegos) =====
var monedas = 0;

function sumarMoneda() {
  monedas = monedas + 1;
  document.getElementById("contador-monedas").textContent = monedas;
}

function reiniciarMonedas() {
  monedas = 0;
  document.getElementById("contador-monedas").textContent = monedas;
}

document.getElementById("btn-moneda").addEventListener("click", sumarMoneda);
document.getElementById("btn-reiniciar").addEventListener("click", reiniciarMonedas);


// ===== Validación del formulario de contacto =====
function validarFormulario(evento) {
  // Frena el envío del formulario para poder revisar los datos primero
  evento.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  var hayErrores = false;

  // Primero borramos los mensajes anteriores
  document.getElementById("error-nombre").textContent = "";
  document.getElementById("error-email").textContent = "";
  document.getElementById("error-mensaje").textContent = "";
  document.getElementById("mensaje-exito").textContent = "";

  // Validar nombre
  if (nombre.trim() === "") {
    document.getElementById("error-nombre").textContent = "El nombre es obligatorio.";
    hayErrores = true;
  }

  // Validar email (tiene que tener @ y un punto)
  if (email.trim() === "") {
    document.getElementById("error-email").textContent = "El email es obligatorio.";
    hayErrores = true;
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("error-email").textContent = "Ingresá un email válido (ej: nombre@correo.com).";
    hayErrores = true;
  }

  // Validar mensaje
  if (mensaje.trim() === "") {
    document.getElementById("error-mensaje").textContent = "El mensaje es obligatorio.";
    hayErrores = true;
  }

  // Si no hubo errores, mostramos el mensaje de éxito
  if (hayErrores === false) {
    document.getElementById("mensaje-exito").textContent = "¡Mensaje enviado! Gracias por escribirnos.";
    document.getElementById("form-contacto").reset();
  }
}

document.getElementById("form-contacto").addEventListener("submit", validarFormulario)