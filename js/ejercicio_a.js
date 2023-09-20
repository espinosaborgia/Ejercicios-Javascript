let nombreUsuario = prompt("Ejercicio N°1 \nIngrese un nombre de usuario:","");
while((nombreUsuario === null) || (nombreUsuario.trim() === "")) {
    nombreUsuario = prompt("El nombre de usuario esta vacio, por favor ingrese uno valido","");
}

console.log(`Hola ${nombreUsuario}`);