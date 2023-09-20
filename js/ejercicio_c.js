let numberOne = prompt("ejercicio N°3 \nIngrese el 1° numero:","");
while((numberOne === null) || (numberOne.trim() === "") || (isNaN(numberOne))) {
    numberOne = prompt("El valor ingresado no es numerico, Ingrese nuevamente el 1° numero","");
}

let numberTwo = prompt("Ingrese el 2° numero:","");
while((numberTwo === null) || (numberTwo.trim() === "") || (isNaN(numberTwo))) {
    numberTwo = prompt("El valor ingresado no es numerico, Ingrese nuevamente el 2° numero","");
}

let numberTrhee = prompt("Ingrese el 3° numero:","");
while((numberTrhee === null) || (numberTrhee.trim() === "") || (isNaN(numberTrhee))) {
    numberTrhee = prompt("El valor ingresado no es numerico, Ingrese nuevamente el 2° numero","");
}

console.log(`los numeros ingresados son ${numberOne} , ${numberTwo} y ${numberTrhee}`);
if (+numberOne > +numberTwo) {
    if (+numberOne > +numberTrhee){
        console.log("el 1° numero es el mayor");
    }else {
        if (+numberOne === +numberTrhee){
         console.log("Los numeros Mayores son el 1° y el 3°");
        }else{
            console.log("El 3° numero es el mayor");
        }
    }
}else{
    if(+numberOne === +numberTwo){
        if (+numberOne > +numberTrhee){
            console.log("Los numeros Mayores son el 1° y el 2°");
        }else {
            if(+numberOne === +numberTrhee){
                console.log("Los 3 numeros son iguales");
            }else{
                console.log("El 3° numero es el Mayor");
            }
        }
    }
    else{
        if (+numberTwo > +numberTrhee) {
            console.log("El 2° numero es el mayor");
        }
        else{
            if (+numberTwo === +numberTrhee){
                console.log("El 2° y el 3° numero son los mayores");
            }else{
                console.log("El 3° numero es el mayor");
            }
        }
    }
}