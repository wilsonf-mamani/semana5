// function setname(name){
//     if (name.length < 2) throw console.error("Nombre muy corto");
//     if (name.length > 10) throw console.error("Nombre muy largo");
//     console.log("nombre correcto", name);    
// }

// let nombre = prompt("Ingrese nombre");
// setname(nombre)


function setName(name){
    let result;
    try {
        if (name.length < 2) throw "short";
        if (name.length > 10) throw "large";
        result = `el nombre ${name} es correcto`
    } catch (error){
        if (error == "short"){
            console.log("el nombre es corto")
        } else if (error == "large"){
            console.log("el nombre es largo")
        }
    } finally {
        console.log("aqui es finally")
    }
    console.log("mensaje:", result)    
    
}
let nombre = prompt("Ingrese nombre")
setName(nombre)