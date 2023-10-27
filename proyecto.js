// Función para abrir el modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';

  // Cierra el modal automáticamente después de 5 segundos
  setTimeout(function() {
      closeModal();
  }, 10000); //  10 segundos)
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Llama a la función para abrir el modal cuando se carga la página
window.onload = openModal;


//Validacion de Formulario
function validarFormulario() {
    var login = document.forms["loginForm"]["login"].value;
    var password = document.forms["loginForm"]["password"].value;
  
    if (login === "") {
      alert("El campo de login no puede estar vacío");
      return false;
    }
  
    if (!/^[a-zA-Z]+$/.test(login)) {
      alert("El login debe contener solo letras");
      return false;
    }
  
    if (password === "") {
      alert("El campo password no puede estar vacío");
      return false;
    }
  
    if (password.length < 8) {
      alert("El password debe tener al menos 8 caracteres");
      return false;
    }
  
    // Si todas las condiciones se cumplen, mostrar un mensaje de éxito
    alert("¡Inicio de sesión exitoso!");
    return true;
  }
  
