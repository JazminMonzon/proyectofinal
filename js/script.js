// AJAX
var urlLocal;
var ajaxdata;
$(document).ready(function(e) {
    urlLocal = "/data.json";
    initData();
});

function initData() {
    ajaxdata = $.ajax({
        method: "GET",
        url: urlLocal
    }).done(function(data) {
        console.log(data);
    }).fail(function(error) {
        console.log(error);
    });
    } 

// CINEENCASA.HTML
let carrito = [];

class Pelicula{
    constructor(nombrePelicula, precioAlquiler, imagenPelicula, linkPelicula, idPelicula){
        this.nombre = nombrePelicula;
        this.precio = precioAlquiler;
        this.imagen = imagenPelicula;
        this.link = linkPelicula;
        this.id = idPelicula;
    }
}

let baseDeDatos = []

let peliculaUno = new Pelicula("La muerte no existe y el amor tampoco", 200, "../imagenes/Afiche LMNE.jpg", "#", 1);
let peliculaDos = new Pelicula("Araña", 200, "../imagenes/Afiche Arana.jpg", "#", 2);
let peliculaTres = new Pelicula("El cuidado de los otros", 100, "../imagenes/Afiche ECDLO.jpg", "#", 3);
let peliculaCuatro = new Pelicula("Los adoptantes", 100, "../imagenes/Afiche Los adoptantes.png", "#", 4);
let peliculaCinco = new Pelicula("Las buenas intenciones", 100, "../imagenes/Afiche LBI.jpg", "../views/lasbuenasintenciones.html", 5);
let peliculaSeis = new Pelicula("El motoarrebatador", 100, "../imagenes/Afiche El motoarrebatador.jpg", "../views/elmotoarrebatador.html", 6);


baseDeDatos.push(peliculaUno);
baseDeDatos.push(peliculaDos);
baseDeDatos.push(peliculaTres);
baseDeDatos.push(peliculaCuatro);
baseDeDatos.push(peliculaCinco);
baseDeDatos.push(peliculaSeis);

let aux = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
    aux += `
        <div class="col-sm-4 mb-4 mt-4">
            <div class="card h-100 text-center">
                <a href="${baseDeDatos[i].link}"><img class="card-img-top" src="${baseDeDatos[i].imagen}" alt=""></a>
                <div class="card-body">
                    <h3 class="card-title">
                        <a href="${baseDeDatos[i].link}" style="text-decoration: none">${baseDeDatos[i].nombre}</a>
                    </h3>
                    <h4>$${baseDeDatos[i].precio}</h4>
                </div>
                <div class="card-footer">
                    <button class="btn btn-outline-success my-2 my-sm-0" style="color: black;" onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[i])})'>Agregar al carrito</button>
                </div>
                <div class="card-footer">
                    <button class="btn btn-outline-success my-2 my-sm-0" style="color: black;" onclick='borrarUnProducto(${JSON.stringify(baseDeDatos[i])})'><i class="fa fa-trash"></i> </button>
                </div>
            </div>
        </div>
        `;
  }
    
$("#alquileres").html(aux);

if(localStorage.getItem("carrito") != null){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

function agregarAlCarrito(peli){
    carrito.push(peli);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    let aux = 0;
    let aux2 = "";
    for (let i = 0; i < carrito.length; i++) {
        aux += carrito[i].precio;
        aux2 += `${carrito[i].nombre} - Precio: $ ${(carrito[i].precio).toString()} <br>`;
    }
    $("#precio-total").html(`<div>Elegiste: <br>${aux2} Precio total: $ ${aux}</div>`);
    $("#precio-total").fadeOut(400)
    $("#precio-total").fadeIn()
    $("#precio-total").css("color", "green")
    $("#precio-total").css("fontSize", "20px")
    console.log(carrito);
}

function borrarUnProducto(){
    const  nuevoCarrito = [];
    for ( let i = 0; i<carrito.length; i++){
        if(i > 0){
            nuevoCarrito.push(carrito[i]);
        }      
        let aux = 0;
        let aux2 = "";
        for (let i = 0; i < carrito.length; i++) {
            aux += carrito[i].precio;
            aux2 += `${carrito[i].nombre} - Precio: $ ${(carrito[i].precio).toString()} <br>`;
        }
        if (nuevoCarrito.length > 0){
        document.getElementById("precio-total").innerHTML = `Elegiste: <br>
                                                            ${aux2} 
                                                            Precio total: $ ${aux}`; 
        }
        else {
        document.getElementById("precio-total").innerHTML = `No hay películas seleccionadas`; 
        }
        console.log(nuevoCarrito);
}

localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
carrito = nuevoCarrito;
}

function vaciarCarrito(){
    const  nuevoCarrito = [];
    document.getElementById("precio-total").innerHTML = `No hay películas seleccionadas`; 
    console.log(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    carrito = nuevoCarrito;
}

// CHECKOUT.HTML
let auxCheckout = ``;
let auxPrecioTotal = 0;
for (let i = 0; i < carrito.length; i++) {
    auxPrecioTotal += carrito[i].precio;
    auxCheckout += `
    <a href="${carrito[i].link}"><p><img class="card-img-top" style="width: 50%" src="${carrito[i].imagen}" alt="Película en carrito"></p></a>
    <h4><a href="${carrito[i].link}" style="text-decoration: none">${carrito[i].nombre}</a><span class="price">$${carrito[i].precio}</span></h4>
        `;
  }

document.getElementById("checkout").innerHTML = auxCheckout;

document.getElementById("carrito-length").innerHTML = `<b>${carrito.length}</b>`; 

document.getElementById("precio-total-checkout").innerHTML = `Total $${auxPrecioTotal}`; 