let estudiantes = ["juan","samuel","laura","maria","pablo"]

console.log(estudiantes)

estudiantes.splice(3,0 ,"jorge") //Agregar un elemento en un Índice Específico
//el 3 lo agrega en la posicion 3
//si ponemos 3,1 borraremos a maria 
//si ponemos 3,0 no borramos nada
//si ponemos 3,3 borraremos a maria y a pablo

console.log(estudiantes)
