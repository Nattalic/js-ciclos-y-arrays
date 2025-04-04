// menu de opciones

let opcion = ""


do {
    opcion = prompt("1. Saludooo  " + " 2. Mensaje cute  " + " 3. Salidaa  ")

    if (opcion === "1") {
        alert("Que tengas un bonito día :)")
    } else if (opcion === "2") {
        alert("⋅˚₊‧ ୨୧ ‧₊˚ ⋅uwu⋅˚₊‧ ୨୧ ‧₊˚ ⋅")
    } else if (opcion === "3") {
        alert("Saliendo del menú... te extrañaremos!")
    } else {
        alert("Opcion no válida, intenta de nuevo")
    }
} while (opcion !== "3")  // con tal de que sea diferente a tres el menu permanecera