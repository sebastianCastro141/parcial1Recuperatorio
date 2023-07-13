var enviarBoton = document.getElementById("enviar");
var nombreInput = document.getElementById("nombre");
var apellidoInput = document.getElementById("apellido")
var emailInput = document.getElementById("email")
var contraseniaInput = document.getElementById("contrasenia")
var contraseniaRepInput = document.getElementById("contraseniaRep")

var lista = [nombreInput, apellidoInput, emailInput, contraseniaInput, contraseniaRepInput]
enviarBoton.addEventListener('click', validar)

function validarContrasenia(val1,val2){
    if (val1.value != val2.value){
        alert("Las contraseñas deben coincidir")
    }

}
function validar()
{
    if(nombreInput.value == null || nombreInput.value.length == 0 ){
        alert("Debe completar su nombre");
    }
    else if(apellidoInput.value == null || apellidoInput.value.length == 0 ) {
        alert("debe completar su apellido");
      }
    else if(emailInput.value == null || emailInput.value.length == 0 ) {
        alert("debe completar el email");
      }
    else if(contraseniaInput.value == null || contraseniaInput.value.length == 0 ) {
        alert("debe completar su contrasenia");
      }
    else if(contraseniaRepInput.value == null || contraseniaRepInput.value.length == 0 ) {
        alert("debe completar su contrasenia");
      }
    else validarContrasenia(contraseniaInput, contraseniaRepInput); 
}

/**boton leer mas */
var botonLeerMas = document.getElementById("leerMas");
var botonRegistrarse = document.getElementById("registrarse");



botonLeerMas.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
  setTimeout(()=> location.href="index.html",1000);
});

botonRegistrarse.addEventListener('click',function (event) {
    event.preventDefault(); //esto cancela el comportamiento del click
    setTimeout(()=> location.href="register.html",1000);
  });



