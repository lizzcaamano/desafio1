'use strict';

let compra = {};

const calcularTotal = (cant)=>{
    let precio = 4000000;
    let total = cant * precio;
    return total;
}

const elegirColor = (color)=>{
    const mostColor = document.querySelector(".color");
    const img = document.querySelector("#img-cambio");
        mostColor.classList.remove("morado", "azul","grisclaro","grisoscuro","rojo","rosado");
        img.classList.remove("img-gris-o", "img-otros");
    switch (color){
        case "negro":
            img.src= "./img/lenovo-laptop-ideapad-gaming-3-gen-6-15-amd-gallery-1.webp";
            break;
        case "grisoscuro":
            mostColor.classList.add("grisoscuro");
            img.src= "./img/laptop_grisoscuro.webp";
            img.classList.add("img-gris-o");
            break;
            
        case "grisclaro":
            mostColor.classList.add("grisclaro");
            img.src= "./img/laptop_gris.png";
            img.classList.add("img-otros");
            break;
        case "azul":
            mostColor.classList.add("azul");
            img.src= "./img/laptop-azul.png";
            break;
        case "rosado":
            mostColor.classList.add("rosado");
            img.src= "./img/laptop-rosa.png";
            img.classList.add("img-otros");
            break;
        case "rojo":
            mostColor.classList.add("rojo");
            img.src= "./img/laptop-roja.png";
            img.classList.add("img-otros");
            break;
        case "morado":
            mostColor.classList.add("morado");
            img.src= "./img/laptop-morado.webp";
            img.classList.add("img-otros");
            break;
        default:
        img.src= "./img/lenovo-laptop-ideapad-gaming-3-gen-6-15-amd-gallery-1.webp";
        img.classList.add("img-negro");
        mostColor.classList.remove("morado");
        mostColor.classList.remove("azul");
        mostColor.classList.remove("grisclaro");
        mostColor.classList.remove("grisoscuro");
        mostColor.classList.remove("rojo");
        mostColor.classList.remove("rosado");
    }
}

//Objeto para guardar datos

const datos = (cant, total) =>{
        compra.canti = cant;
        compra.tot = total;
}



const mostrarCard = ()=>{
    //const fragment = document.createDocumentFragment();
    const mostCard = document.getElementById("card-body");
    const card = document.getElementById("card-body");
    
        //const clone = mostCard.cloneNode(true);
        //console.log(clone);
     
       const cantid = document.querySelector(".total-cantidad").innerHTML =`Cantidad: ${compra.canti}`;
       const tcolor = document.querySelector(".text-color").innerHTML ='Color:';
       const total = document.querySelector(".total").innerHTML =`Total: $${parseFloat(compra.tot)}`;
       //document.body.appendChild(cantid, tcolor,total);
    
        //fragment.appendChild(cantid);
    //card.appendChild(cantid, tcolor, total);
}

export{calcularTotal, elegirColor, datos, mostrarCard}
