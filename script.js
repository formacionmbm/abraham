window.onload=() =>{


function toUpperCase(){

    let texto = document.getElementById("texto").value;

    document.getElementById("texto").value = texto.toUpperCase();

}

function toUpperCasePropioElemento(element){

    let texto = element.value;

    element.value = texto.toUpperCase();

}


let elemento = document.getElementById("texto");

elemento.addEventListener("keyup", (event) =>{

    event.target.value = event.target.value.toUpperCase();

});

}