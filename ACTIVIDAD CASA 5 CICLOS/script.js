//adivinar numero

let intento = parseInt(prompt("Adivina el numero entre el 1 y el 50: "))
const numeroRandom = Math.floor(Math.random() * 50) + 1 


do {
    if ( intento > numeroRandom) {
        intento = parseInt(prompt("Muy mayor, intenta de nuevo"))
    } else {
        intento = parseInt(prompt("Muy menor, intenta de nuevo"))
    }
} while (intento !== numeroRandom)

alert("Lo lograste, adivinaste el número " + numeroRandom) //te manda el mensaje tipo prompt sin escribir nada