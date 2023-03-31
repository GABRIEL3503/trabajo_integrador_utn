// barra de navegacion con celular
function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// habitaciones

fetch("./database.json")
  .then(response => response.json())
  .then(data => {
    for (const producto of data) {
      habitaciones_container.innerHTML += `
          <div class="tarjeta-habitacion">
            <h2>${producto.name}</h2>
            <img class="imagen" src="${producto.img}" alt="">
            <p>${producto.caracteristicas}</p>
            <h3>$${producto.price}</h3>
        </div>
        `
    }
  })

// nosotros

const URL_API = "https://randomuser.me/api/?results=5"

fetch(URL_API)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    for (const personaje of data.results) {
      console.log(personaje)
      nosotros_contenedor.innerHTML += `
      <div class="nosotros_tarjeta">
        <h3>Nombre: ${personaje.name.first}</h3>
        <h3>Apellido: ${personaje.name.last}</h3>
        <h4>Telefono:${personaje.cell}</h4>
        <h4>Email: ${personaje.email}</h4> 
        <h4>Edad: ${personaje.dob.age}</h4> 
          <img class="foto_perfil" src="${personaje.picture.large}" alt="">
        
       </div>`

    }
  })

