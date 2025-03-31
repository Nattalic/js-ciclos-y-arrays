//calcular el cubo de numeros

let numeros = [1,2,3,4,5,6,7,8,9,10]
let cubo = 0

for (let numero of numeros) {
    cubo = numero ** 3 //elevado a la 3 (cubo)
    console.log("El cubo de ", numero, "es:", cubo);
}
