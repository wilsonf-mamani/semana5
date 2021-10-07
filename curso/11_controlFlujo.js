// let edad = prompt("ingresar edad")
// console.log(edad)

// if (edad < 18){
//     console.log("bienvenido")
// }   else if (edad == 39){
//     console.log("felicitaciones")
// }


let fruta = prompt("ingresar fruta");
switch (fruta) {
    case "uva":
        console.log("tu fruta es uv:", fruta);
        break;
    case "platano":
        console.log("tu fruta es pl:", fruta);
        break;
    case "piña":
        console.log("tu fruta es pñ:", fruta);
        break;
    default:
        console.log("no hay esta fruta");    
}