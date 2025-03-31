//contador regresivo
/*

let contador = 10

while(contador != 1) {  //while: Se usa cuando no sabemos exactamente cuántas veces se repetirá //pregunta y acciona 

    contador -=1

    console.log(contador)

    if (contador == 1) {
        console.log("Terminé")
    }
}

*/

// do while
//acciona y pregunta
let contador = 10

do {
    contador -=1
    console.log(contador)

    if (contador == 1) {
        console.log("Terminé")
    }
} while(contador != 1)