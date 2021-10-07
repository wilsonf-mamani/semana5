function sumar(a,b){
    return a + b;
}

let suma = sumar

console.log(suma(2,5))

let suma2 = sumar(2323,2);
console.log(suma2)

console.log(sumar(suma(4,4),3))
