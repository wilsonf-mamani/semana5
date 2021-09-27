function calcular_ganancia(){
    let q_litre = parseFloat(document.getElementById('q_litre').value);
    let p_galon = parseFloat(document.getElementById('p_galon').value);
    let n_galon = parseFloat(q_litre/3.785).toFixed(2);
    let ga = parseFloat(p_galon*n_galon).toFixed(2);
    
    document.getElementById('q_litre').value = ""
    document.getElementById('p_galon').value = ""
    

    window.alert(
        `Cantidad de Litros (L):            ${q_litre} Litros
    Precio del Galón (PG):          S/. ${p_galon} Nuevos Soles
    Cantidad de Galones (TG):   ${n_galon} Galones
    Ganancia Total(GA):             S/. ${ga} Nuevos Soles`)
}


