let number = prompt("Ejercicio N°4 \nIngrese un número:");
while((number === null) || (number.trim() === "") || (isNaN(number))) {
    number = prompt("El valor ingresado no es numerico \nIngrese nuevamente un numero:","");
}
while (+number>=0){
    console.log(number);
    number=+number-1;
}