let menuVisible=false;

//Función que muestra u oculta el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //Ocultar el menú una vez que se seleccione una opción
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills=window.innerHeight-skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoenequipo");
        habilidades[7].classList.add("toleranciaalafrustracion");
        habilidades[8].classList.add("resolverproblemas");
        habilidades[9].classList.add("creatividad");
    }
}

//Detecta el scroll para aplicar la animación de la barra de habilidades
window.onscroll=function(){
    efectoHabilidades();
}

function descargarCV(){
    var link=document.createElement("a");
    link.href="Mayken_cv.pdf";
    link.download="Mayken_cv.pdf";
    link.click();
}

// Obtener los elementos del formulario
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('telefono');
const correoInput = document.getElementById('correo');
const temaInput = document.getElementById('tema');
const mensajeInput = document.getElementById('mensaje');

// Obtener los elementos de mensajes de error
const errorNombre = document.getElementById('error-nombre');
const errorTelefono = document.getElementById('error-telefono');
const errorCorreo = document.getElementById('error-correo');
const errorTema = document.getElementById('error-tema');
const errorMensaje = document.getElementById('error-mensaje');

// Agregar eventos de validación a los campos del formulario
nombreInput.addEventListener('blur', validarNombre);
telefonoInput.addEventListener('blur', validarTelefono);
correoInput.addEventListener('blur', validarCorreo);
temaInput.addEventListener('blur', validarTema);

// Función de validación del nombre
function validarNombre() {
  const nombre = nombreInput.value.trim();

  if (!nombre.match(/^[a-zA-Z\s]+$/)) {
    errorNombre.textContent = 'El nombre solo debe contener caracteres del alfabeto';
  } else {
    errorNombre.textContent = '';
  }
}

// Función de validación del número telefónico
function validarTelefono() {
  const telefono = telefonoInput.value.trim();

  if (!telefono.match(/^\d+$/)) {
    errorTelefono.textContent = 'El número telefónico solo debe contener dígitos';
  } else {
    errorTelefono.textContent = '';
  }
}

// Función de validación del correo electrónico
function validarCorreo() {
  const correo = correoInput.value.trim();

  if (!correo.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
    errorCorreo.textContent = 'El correo electrónico no es válido';
  } else {
    errorCorreo.textContent = '';
  }
}

// Función de validación del tema
function validarTema() {
  const tema = temaInput.value.trim();

  if (tema === '') {
    errorTema.textContent = 'Debe ingresar un tema';
  } else {
    errorTema.textContent = '';
  }
}

// Función para enviar el formulario
function enviarFormulario() {
  // Realizar aquí las acciones necesarias al enviar el formulario
  // ...

  // Mostrar el mensaje de éxito
  alert('Datos guardados correctamente');

  // Borrar los campos del formulario
  nombreInput.value = '';
  telefonoInput.value = '';
  correoInput.value = '';
  temaInput.value = '';
  mensajeInput.value = '';
}

// Agregar evento al botón de enviar
const enviarButton = document.getElementById('enviar');
enviarButton.addEventListener('click', function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  validarNombre();
  validarTelefono();
  validarCorreo();
  validarTema();

  // Verificar si no hay errores
  if (errorNombre.textContent === '' && errorTelefono.textContent === '' && errorCorreo.textContent === '' && errorTema.textContent === '') {
    enviarFormulario();
  }
});
