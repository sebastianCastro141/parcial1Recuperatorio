var sectionGrid = document.querySelector(".gridImagenesDeEvento");
var lista = [1,2,3,4,5,6];

var sectionPersonas = document.querySelector(".gridPersonas")
var personas = [
    {id: 0, nombre: "Lorena Retail", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg", parrafo : "jhsakjdksajdnkasjdkasjdhasidhsaojdasujhdnaosiuhdaso"},
    {id: 1, nombre: "Alvaro Gil", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg", parrafo: "jhsakjdksajdnkasjdkasjdhasidhsaojdasujhdnaosiuhdaso"},
    {id: 3, nombre: "Ramon Sanchez", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg", parrafo: "jhsakjdksajdnkasjdkasjdhasidhsaojdasujhdnaosiuhdaso"},
    {id: 4, nombre: "Lujan ALvarez", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg", parrafo: "jhsakjdksajdnkasjdkasjdhasidhsaojdasujhdnaosiuhdaso"},
    {id: 5, nombre: "Banjamin Roca", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg", parrafo: "jhsakjdksajdnkasjdkasjdhasidhsaojdasujhdnaosiuhdaso"},
    {id: 6, nombre: "Ramiro Rey", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Monkey_D_Luffy.jpg", parrafo: "jhsakjdksajdnkasjdkasjdhasidhsaojdasujhdnaosiuhdaso"}
  ]
const {id, nombre,img, parrafo} = personas
//Creo la section de imagenes de imagenes
lista.map( d => sectionGrid.insertAdjacentHTML("beforeend", `<div class="img${d.toString()}"></div>`));
console.log(sectionGrid);

// Creo la section de cards

personas.map(p => sectionPersonas.insertAdjacentHTML(
    "beforeend",
    /*`<div class="card"  >
      <img class="card-img" src="${p.img}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">${p.parrafo}</p>
        <a href="#" class="btn btn-primary">${p.nombre}</a>
      </div>       
    </div> `*/
    `<div class="carta">
      <img class="" src="${p.img}" alt="Card image cap">
      <div class="cuerpo">
        <h5>${p.nombre}</h5>
        <p>${p.parrafo}</p>
        <a href="#" class="btn btn-primary">${p.nombre}</a>
      </div>
    </div>`
    ))
console.log(sectionPersonas)


/**boton leer mas */
var botonLeerMas = document.getElementById("leerMas");
var botonRegistrarse = document.getElementById("registrarse");
var botonRegistrarse2 = document.getElementById("registrarse2");



botonLeerMas.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
  setTimeout(()=> location.href="index.html",1000);
});

botonRegistrarse.addEventListener('click',function (event) {
    event.preventDefault(); //esto cancela el comportamiento del click
    setTimeout(()=> location.href="register.html",1000);
  });
botonRegistrarse2.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
  setTimeout(()=> location.href="register.html",1000);
});

