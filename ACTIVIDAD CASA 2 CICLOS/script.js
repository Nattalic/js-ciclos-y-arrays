//Suma de digitos

let numero = prompt("Ingrese un numero positivo")
let suma = 0
let i = 0

while (i < numero.length) { //length----- cuántos caracteres tiene esa cadena
    suma += parseInt(numero[i])
    i++
}

console.log("la suma de digitos es: " , suma)