let numberOne = prompt("ejercicio N°2 \nIngrese el 1° numero:","");
while((numberOne === null) || (numberOne.trim() === "") || (isNaN(numberOne))) {
    numberOne = prompt("El valor ingresado no es numerico, Ingrese nuevamente el 1° numero","");
}

let numberTwo = prompt("Ingrese el 2° numero:","");
while((numberTwo === null) || (numberTwo.trim() === "") || (isNaN(numberTwo))) {
    numberTwo = prompt("El valor ingresado no es numerico, Ingrese nuevamente el 2° numero","");
}

console.log(`los numeros ingresados son ${numberOne} y ${numberTwo}`);
if (+numberOne > +numberTwo){
    console.log(`El 1° numero es el Mayor`);
}else if(+numberOne < +numberTwo){
        console.log(`El 2° numero es el Mayor`);
    }else { 
        console.log("Los numeros son iguales!")
}