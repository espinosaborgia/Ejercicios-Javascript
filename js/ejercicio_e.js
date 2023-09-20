let canProd = prompt("ejercicio N°5 \nIngrese la cantidad de productos:","");
while((canProd === null) || (canProd.trim() === "") || (isNaN(canProd))) {
    canProd = prompt("El valor ingresado no es numerico \nIngrese nuevamente la cantidad de productos:","");
}
let c=0;
let suma=0;
for(c=1;c<=+canProd;c++){
    let desProd = prompt("Ingrese la descripcion del Producto:");
    while((desProd === null) || (desProd.trim() === "")) {
        desProd = prompt("La descripcion esta vacia \npor favor ingrese la descripcion del producto:","");
    }
    let preProd = prompt("Ingrese el precio del Producto");
    while((preProd === null) || (preProd.trim() === "") || (isNaN(preProd))) {
        preProd = prompt("El valor ingresado no es numerico \nIngrese nuevamente el precio del producto:","");
    }
    console.log(`${c} - ${desProd} : ${preProd}`);
    suma= +suma + +preProd; 
}
console.log(`El Importe total es de: ${suma}`);