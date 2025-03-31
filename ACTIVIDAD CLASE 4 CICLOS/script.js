//promedio de notas

let totalnota= 0

for (let i=0; i <=5; i++) {
    let nota = parseInt(prompt("Ingrese la nota " + i))
    totalnota += nota
}

let promedio = totalnota/5
console.log("Promedio es: " + promedio)