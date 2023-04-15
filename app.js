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
        <h5>Telefono:${personaje.cell}</h5>
        <h5>Email: ${personaje.email}</h5> 
        <h5>Edad: ${personaje.dob.age}</h5> 
          <img class="foto_perfil" src="${personaje.picture.large}" alt="">
        
       </div>`

    }
  })

  // formulario
const usuarios = []

const formularioRegistro = document.querySelector(".formulario")

const contenedorHTML = document.querySelector("#contenedorUsuarios")

const renderizarUsuarios = () => {
  contenedorHTML.innerHTML = ""
  for(const usuario of usuarios){
    contenedorHTML.innerHTML += `
      <div class = card-usuario>
        <h3>Reservación para:</h3>
        <p>Nombre: <strong>${usuario.nombre}</strong></p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Telefono:</strong> ${usuario.telefono}</p>
        <p><strong>Fecha de llegada:</strong> ${usuario.llegada}</p>
        <p><strong>Fecha de salida:</strong> ${usuario.salida}</p>
        <p><strong>Habitación:</strong> ${usuario.habitacion}</p>
        <p><strong>Comentario:</strong> ${usuario.mensaje}</p>
      </div>
    `
  }
}

formularioRegistro.addEventListener("submit", (event) => {
  event.preventDefault()
  usuarios.push({
    nombre: formularioRegistro.nombre.value,
    email: formularioRegistro.email.value,
    telefono: formularioRegistro.telefono.value,
    llegada: formularioRegistro.llegada.value,
    salida: formularioRegistro.salida.value,
    habitacion: formularioRegistro.habitacion.value,
    mensaje: formularioRegistro.mensaje.value,
  })
  formularioRegistro.reset()
  renderizarUsuarios()
})


