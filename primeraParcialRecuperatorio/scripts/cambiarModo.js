/***modo */

var botonCambiarModo = document.getElementById("botonCambiarModo");
var imagenBoton = document.getElementById("imagenDeBoton");
var modo = false;
// etiquetas a cambiar
var main = document.getElementById("main")
var header = document.getElementById("header")
var footer = document.getElementById("footer")
// letras a cambiar
var h2 = document.querySelectorAll("h2")
var contenedor = document.querySelectorAll(".contenedor")
var h3 = document.querySelectorAll("h3")
var span= document.querySelectorAll("span")

botonCambiarModo.addEventListener('click',function (event) {
    event.preventDefault(); //esto cancela el comportamiento del clicksetTimeout(()=> location.href="index.html",500);
    modo = !modo;
    if(modo == true){
        imagenBoton.setAttribute("src", "./imagenes/iconos/cambiar (1).png");
        cambiarEstilos("dia");
    }
    else{
        imagenBoton.setAttribute("src", "./imagenes/iconos/cambiar.png");
        cambiarEstilos("noche");
    }
    
  });
function cambiarEstilos(modo){
    modificar(h2);
    modificar(h3);
    modificar(span);
    if (modo == "dia"){
        main.classList.remove("main")
        main.classList.add("main-noche")
        header.classList.remove("header")
        header.classList.add("header-noche")
        footer.classList.remove("footer")
        footer.classList.add("footer-noche")
    }
    else{
        main.classList.remove("main-noche")
        main.classList.add("main")
        header.classList.remove("header-noche")
        header.classList.add("header")
        footer.classList.remove("footer-noche")
        footer.classList.add("footer")

    }
}

function modificar(lista){
    for(var i = 0; i < lista.length; i++){
        lista[i].classList.toggle("noche")
      }
}