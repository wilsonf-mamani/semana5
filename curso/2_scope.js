let nombre = 'wilson'

{//scope local se puede imprimir variables globales
    let nombre2 = 'wilson2'
    console.log(nombre2, nombre)

}
// scope global no accede variables locales
// console.log(nombre2)