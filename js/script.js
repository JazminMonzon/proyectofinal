class Pelicula{
    constructor( nombrePelicula, precioAlquiler ){
        this.nombre = nombrePelicula;
        this.precio = precioAlquiler;
    }
}

let peliculaUno = new Pelicula("La muerte no existe y el amor tampoco", 200);
let peliculaDos = new Pelicula("Araña", 200);
let peliculaTres = new Pelicula("El cuidado de los otros", 100);
let peliculaCuatro = new Pelicula("Los adoptantes", 100);


function mostrarPrecioUno(){
    var dias = prompt("Por cuántos días querés alquilar " + peliculaUno.nombre + "?");
    alert("Precio total: " + peliculaUno.precio*dias + " pesos");
    }

function mostrarPrecioDos(){
    var dias = prompt("Por cuántos días querés alquilar " + peliculaDos.nombre + "?");
    alert("Precio total: " + peliculaDos.precio*dias + " pesos");
    }

function mostrarPrecioTres(){
    var dias = prompt("Por cuántos días querés alquilar " + peliculaTres.nombre + "?");
    alert("Precio total: " + peliculaTres.precio*dias + " pesos");
    }

function mostrarPrecioCuatro(){
    var dias = prompt("Por cuántos días querés alquilar " + peliculaCuatro.nombre + "?");
    alert("Precio total: " + peliculaCuatro.precio*dias + " pesos");
    }