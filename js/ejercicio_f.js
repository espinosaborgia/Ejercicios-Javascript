for(let c=1;c<=100;c++){
    if (+c%3===0){
        if(+c%5===0){
            console.log("FizzBuzz");
        }else{
            console.log("Fizz");
        }
    }else if(+c%5===0){
        if(+c%3===0){
            console.log("FizzBuzz");
        }else{
            console.log("Buzz");
        }
    }else {
        console.log(c);
    }
}

