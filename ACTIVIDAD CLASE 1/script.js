let compras = ["leche","pan","huevos"]

console.log("Lista inicial de compras: " + compras)

compras.push("frutas") //se agrega frutas
compras.splice(1,1) //el primer numero es la posicion del elemento //el segundo numero es la cantida de elementos que se eliminan//se elimina el pan 

console.log("Lista inicial de compras: " + compras)