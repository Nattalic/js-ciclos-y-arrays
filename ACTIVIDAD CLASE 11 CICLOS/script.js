//Números de Fibonacci
let numero = parseInt(prompt("Ingrese el numero: "))
let Fibonacci = [0,1]

for (let i=2; i < numero; i++) {
    Fibonacci [i] = Fibonacci [i-1] + Fibonacci [i-2]
}

console.log("Los primeros numeros de: " +numero+" Son: " + Fibonacci.slice(0,numero))
