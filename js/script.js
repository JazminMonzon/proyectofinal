function precioAlquiler(){
    var precioPorDia = 200

    var dias = Number(prompt("¿Por cuántos días la querés alquilar?"));
    
    var resultado = precioPorDia * dias;
    
    alert("El alquiler te sale " + resultado + " pesos.");
}