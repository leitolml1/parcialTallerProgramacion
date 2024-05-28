let carruselImagenes = document.getElementById("CarruselImagenes");
let imagenes = carruselImagenes.querySelectorAll(".imagenProducto");
let index = 0;



let botonesCaracteristicas = document.getElementsByClassName("botonDV");
let botonesLista = Array.from(botonesCaracteristicas);


let divCaracteristicas = document.getElementsByClassName("divUno");
let divLista = Array.from(divCaracteristicas);

let divImagen= document.getElementById("div_imagen")

let imagen=divImagen.getElementsByTagName("img")[0]


let textoCaracteristicas=["El ANTA KAI 1 refleja su estilo de juego gracioso y elegante, como un artista en la cancha. Cada elemento de diseño codifica una parte del viaje de Kyrie, permitiéndote convertirte en uno con su estilo y desempeño característicos.","Asegúrate de estar apoyado en la cancha con un TPU que estabiliza el talón, una placa de carbono y una suela exterior resistente, lo que te permite enfrentarte a tus oponentes con una fuerza inquebrantable.","Con ANTA KAI 1, los cortes rápidos se realizan con facilidad, lo que refleja la propia agilidad de Kyrie para superar a sus oponentes. El diseño liviano del calzado te permite deslizarte por la cancha.","La intensa concentración de Kyrie y su capacidad para realizar jugadas decisivas se materializan en la estructura estable y de apoyo del ANTA KAI 1, lo que garantiza que permanezcas firme y listo para girar en cualquier momento.","Diseñadas para rebotes rápidos y arranques rápidos, las ANTA KAI 1 están equipadas con una suela reactiva que refleja la rápida aceleración y el movimiento fluido de Kyrie por la cancha."]
let galeriaImagenes=["img/imagen3.webp","img/imagen9.webp","img/imagen10.webp","img/imagen11.webp","img/imagen8.webp"]

let galeriaImagenesDos=["/img/productoImagen1.webp","/img/productoImagen2.webp","/img/productoImagen3.webp","/img/productoImagen4.webp","/img/productoImagen5.webp","/img/productoImagen6.webp"]

let botonesCambiarImagen_siguiente=document.getElementById("siguiente")
let botonesCambiarImagen_anterior=document.getElementById("anterior")
let divImagenCarrusel=document.getElementById("CarruselImagenes")
let imagenCarrusel=divImagenCarrusel.getElementsByTagName("img")[0]

let indice=0

botonesCambiarImagen_siguiente.addEventListener("click", function() {
    index += 1;

    if (index >= galeriaImagenesDos.length) {
        index = 0;
    }


    imagenCarrusel.src = galeriaImagenesDos[index];
});

botonesCambiarImagen_anterior.addEventListener("click", function() {

    index -= 1;


    if (index < 0) {
        index = galeriaImagenesDos.length - 1;
    }

    imagenCarrusel.src = galeriaImagenesDos[index];
});



botonesLista.forEach(function(boton, indice) {
    boton.addEventListener("click", function() {
        botonesLista.forEach(function(b) {
            b.style.color = "";
        });
        divLista.forEach(function(div) {
            div.textContent = "";
        });
        boton.style.color = "white";
        divLista[indice].textContent = textoCaracteristicas[indice]
        divLista[indice].style.color="rgb(225, 59, 161)"
        divLista[indice].style.fontWeight = 'bold';
        imagen.src=galeriaImagenes[indice]
    });

});
