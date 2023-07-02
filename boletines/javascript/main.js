//console.log("Hola desde un archivo externo de JavaScript");

//DOM
/*
let links= document.querySelectorAll("a");

links.forEach(function(link){
console.log(link);
})
*/
/*
let celdas= document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
       console.log(this);
    })
});
*/


//Obtener los elementos de la clase .close

let links= document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){

//Agregar un evento click a cada uno de ellos
link.addEventListener("click", function(evento){
    evento.preventDefault();
    let content= document.querySelector('.content');

    //Quitarle las clases de animacion que ya tiene
    content.classList.remove("faceInDown");
    content.classList.remove("animated");

    //Agregar clases para animar su salida
    content.classList.add("fadeOutUp");
    content.classList.add("animated");
    //setInterval
    setTimeout(function(){
    location.href= "/boletines";
    },600);

    return false;
   })

});

/*
let iconos= document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star-0");
    icono.classList.add("fa-star");

});
*/
