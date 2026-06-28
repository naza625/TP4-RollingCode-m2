function parImpar(numero) {

    if (numero % 2 == 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }

}
let num = parseInt(prompt("Ingrese un número entero:"));

document.write(parImpar(num));