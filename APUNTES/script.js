/*
//Asignar variables
let animales = ["perro" , "gato" , "conejo" , "pez", "aguila"]

console.log(animales)

//acceder  aun elemento

console.log(animales [2])
console.log(animales [3])

//numero de elementos que tiene la lista
console.log(animales.lenght)

//saber el tipo de un elemento en este caso es un objeto
console.log(typeof animales)

//cambiar perro por elefante
animales [0] = "Elefante"

console.log (animales)

//agregar nuevo animal , toma el ultimo valor ---- push

animales.push("Ratón")

console.log(animales)

//eliminar el ultimo animal de la lista ---- pop
animales.pop()
console.log(animales)

//agregar al inicio de la lista ---- unshift
animales.unshift("León") 
console.log(animales)

//buscar indice del elemento para saber en que posicion esta
let indiceDelGato = animales.indexOf("gato")
console.log(animales[indiceDelGato])

//determinar si un elemento esta en la lista

console.log(animales.includes("tortuga"))

animales.push("tortuga") //agregarla al final

console.log(animales.includes("tortuga"))

console.log(animales)  

// invertir lista
let animalesInvertido = animales.reverse ()
console.log(animalesInvertido);

//ordernar la lista
console.log(animales.sort())

//Eliminar en un indice especifico
animales.splice(0, 1)
console.log(animales)
*/



//let animales = ["perro" , "gato" , "conejo" , "pez", "aguila"]

//lista resultante que tenga elementos = ["aguila", "conejo" , "pez" , "leon"  ]

let animales = ["perro" , "gato" , "conejo" , "pez", "aguila"]

animales.splice(0,1) //eliminamos perro
console.log(encontrarGato(animales))
animales[0] = animales[3]
console.log(encontrarGato(animales))
animales.pop()
animales.push("leon")

console.log(animales)

//funciones
function encontrarGato(lista) {
    let result = lista.includes ("gato")
    return result
}

