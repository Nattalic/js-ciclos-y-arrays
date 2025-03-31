// Ejemplo de bucle while
/*
let contador = 0

console.log("Bucle while:");
while (contador < 5) { // Mientras la condición sea verdadera, el bucle se ejecuta, si es falsa no aparecera
    console.log("Contador:", contador) 
    contador++ // Incrementa el contador en 1 en cada iteración
}




// Ejemplo de bucle do-while ---- Ejecuta el bloque al menos una vez antes de verificar la condición 
// No importa que la condicion sea falsa igual la ejecuta

let numero = 0 

console.log("Bucle do-while:")
do {
    console.log("Número:", numero) 
    numero++; // Incrementa la variable en 1 en cada iteración
} while (numero < 5) // La condición se evalúa después de ejecutar el bloque





// Ciclo For ----  Se usa cuando sabemos cuántas veces debe repetirse el código.

for (i=0; i < 10; i++) { // i--- iteracion
    console.log("Iteración for número", i) //el console log va adentro del for
}
*/

//Ciclo for of

let nombres = ["carlos","pepe","ana","luisa"]

for (const nombre of nombres) {
    console.log ("Nombre: " + nombre)
}

console.log("Estoy Fuera!")
