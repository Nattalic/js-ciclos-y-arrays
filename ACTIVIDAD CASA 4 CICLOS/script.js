// menu de opciones

let opcion = ""

while (opcion !== "3") { // con tal de que sea diferente a tres el menu permanecera
    opcion = prompt("1. Saludooo  " + " 2. Mensaje cute  " + " 3. Salidaa  ")

    if (opcion === "1") {
        console.log("Que tengas un bonito día :)")
    } else if (opcion === "2") {
        console.log("⋅˚₊‧ ୨୧ ‧₊˚ ⋅uwu⋅˚₊‧ ୨୧ ‧₊˚ ⋅")
    } else if (opcion === "3") {
        console.log("Saliendo del menú... te extrañaremos!")
    } else {
        console.log("Opcion no válida, intenta de nuevo")
    }
}