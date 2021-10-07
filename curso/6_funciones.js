// funcion declarativa, se procesan primero
function suma(a,b){
    return a + b;
}

console.log(suma(3,232.16))


// funcion de expresion, se procesan segun el orden en el documento
let restar = function(a,b){
    return a - b;
}


console.log(restar(34,6));


// arrow function
const multiplicar = (a,b) => a * b;
console.log(multiplicar(3,5))


const multiplicar2 = (a,b) => {
    return a * b;
}
console.log(multiplicar2(3,5))
