//genere un numero aleatorio entre el 1 y el 10

let intento = parseInt(prompt("Adivina el numero entre el 1 y el 10: "))

let numeroRandom = Math.floor(Math.random() * 10) + 1 //numero randomm del 10 al 1


// != --- Signfica "Distinto de" // == ---- Compara solo el valor, sin importar el tipo de dato.
while (intento !== numeroRandom) { 

    if ( intento > numeroRandom) {
    intento = parseInt(prompt("Muy mayor, intenta de nuevo"))
    } else {
    intento =  parseInt(prompt("Muy menor, intenta de nuevo"))
    } 
} 

alert("Lo lograste, adivinaste el número " + numeroRandom) //te manda el mensaje tipo prompt sin escribir nada