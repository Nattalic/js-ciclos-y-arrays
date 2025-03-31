//Vocales

let frase = prompt("Ingrese una frase")
let contadorVocales = 0 //contar las vocales
let caracter = 0 //recorrer cadena

while (caracter < frase.length) {
    if (frase[caracter] === "a" || frase[caracter] === "e" || frase[caracter] === "i" || frase[caracter] === "o" ||frase[caracter] === "u" ) {

        contadorVocales++ //
    }

    caracter++//
}

console.log("la cantidad de vocales que hay en la frase son :" , contadorVocales)