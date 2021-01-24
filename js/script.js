let carrito = [];

class Pelicula{
    constructor(nombrePelicula, precioAlquiler, imagenPelicula){
        this.nombre = nombrePelicula;
        this.precio = precioAlquiler;
        this.imagen = imagenPelicula;
    }
}

let baseDeDatos = []

let peliculaUno = new Pelicula("La muerte no existe y el amor tampoco", 200, "../imagenes/Afiche LMNE.jpg");
let peliculaDos = new Pelicula("Araña", 200, "../imagenes/Afiche Arana.jpg");
let peliculaTres = new Pelicula("El cuidado de los otros", 100, "../imagenes/Afiche ECDLO.jpg");
let peliculaCuatro = new Pelicula("Los adoptantes", 100, "../imagenes/Afiche Los adoptantes.png");
let peliculaCinco = new Pelicula("Las buenas intenciones", 100, "../imagenes/Afiche LBI.jpg");
let peliculaSeis = new Pelicula("El motoarrebatador", 100, "../imagenes/Afiche El motoarrebatador.jpg");


baseDeDatos.push(peliculaUno);
baseDeDatos.push(peliculaDos);
baseDeDatos.push(peliculaTres);
baseDeDatos.push(peliculaCuatro);
baseDeDatos.push(peliculaCinco);
baseDeDatos.push(peliculaSeis);

console.log(baseDeDatos);
    
let aux = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
    aux += `
        <div class="col-sm-4 mb-4 mt-4">
            <div class="card h-100 text-center">
                <a href="#"><img class="card-img-top" src="${baseDeDatos[i].imagen}" alt=""></a>
                <div class="card-body">
                    <h3 class="card-title">
                        <a href="#">${baseDeDatos[i].nombre}</a>
                    </h3>
                    <h4>$${baseDeDatos[i].precio}</h4>
                </div>
                <div class="form-inline justify-content-center">
                    <label for="exampleFormControlSelect1" class="mr-sm-2">Días de alquiler</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <br>
                <div class="card-footer">
                    <button class="btn btn-outline-success my-2 my-sm-0" style="color: black;" onclick="agregarAlCarrito()">Alquilar</button>
                </div>
            </div>
        </div>
        `;
  }
    
document.getElementById("carrito").innerHTML = aux;