//genere un numero aleatorio entre el 1 y el 10

let intento
const numeroRandom = 5 


// != --- Signfica "Distinto de" // == ---- Compara solo el valor, sin importar el tipo de dato.
while (intento !== numeroRandom) { 
    intento = parseInt(prompt("Adivina el numero entre el 1 y el 10: "))

    if ( intento > numeroRandom) {
        console.log("Muy mayor, intenta de nuevo")
    } else  if (intento < numeroRandom) {
        console.log("Muy menor, intenta de nuevo")
    } else {
        console.log("Lo lograste, adivinaste el numero")
    }
} 
