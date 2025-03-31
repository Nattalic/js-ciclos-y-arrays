//Contar numeros positivos

let numero
let contadorPositivos= 0

do {
    numero = parseInt(prompt("Ingrese un numero positivo, si quiere detenerse, ponga un numero negativo"))

    if ( numero >= 0 ) { //contamos un numero positivo desde el 0
        contadorPositivos++
    }

} while (numero >= 0)

    console.log("Ingresaste", contadorPositivos, "números positivos antes de detenerte");

