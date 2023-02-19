'use strict';

import {calcularTotal, elegirColor, datos, mostrarCard} from './construir.js';

const btnCalcular = document.querySelector("#btnCalcular");
const select = document.querySelector("#selectColor");

select.onclick = function(){
    const elegido = document.querySelector("#selectColor").value;
    elegirColor(elegido);
    console.info(elegido);
}

btnCalcular.onclick = function(){
    const cantidad = parseFloat(document.querySelector("#cantidad").value);
    let total = calcularTotal(cantidad);
    datos(cantidad, total);
    mostrarCard();
}