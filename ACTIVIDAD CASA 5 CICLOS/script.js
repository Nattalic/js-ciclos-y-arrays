//adivinar numero

let intento
const numeroRandom = 20

do {
    intento = parseInt(prompt("Adivina el numero entre el 1 y el 50: "))

    if ( intento > numeroRandom) {
        console.log("Muy mayor, intenta de nuevo")
    } else  if (intento < numeroRandom) {
        console.log("Muy menor, intenta de nuevo")
    } else {
        console.log("Lo lograste, adivinaste el numero")
    }
} while (intento !== numeroRandom)

