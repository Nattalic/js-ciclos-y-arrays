//factorial

let numero = parseInt(prompt("Ingrese un numero para calcular su factorial: "));
let factorial = 1; // 0! es 1

for (let i=1 ; i <= numero; i++) { // <= ----- asegura que el for llegue hasta el numero que se puso
    factorial *= i

}

console.log("el factorial de", numero , "es: " , factorial)