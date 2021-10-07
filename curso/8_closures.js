// function sumaBase(x){
//     return function(y){
//         return x + y;
//     }
// }

// const sumabase5 = sumaBase(5);

// console.log(sumabase5(4));
// console.log(sumabase5(20));


function count(){
    let count = 0;

    return function(){
        return count = count +1;
    }
}

let count1 = count();

console.log(count1())
console.log(count1())
console.log(count1())