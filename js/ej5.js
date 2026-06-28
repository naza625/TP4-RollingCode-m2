function analizarCadena(texto) {

    if (texto == texto.toUpperCase()) {
        return "La cadena está formada solo por MAYÚSCULAS.";
    }
    else if (texto == texto.toLowerCase()) {
        return "La cadena está formada solo por MINÚSCULAS.";
    }
    else {
        return "La cadena está formada por una MEZCLA de mayúsculas y minúsculas.";
    }

}

let cadena = prompt("Ingrese una cadena de texto:");

document.write(analizarCadena(cadena));