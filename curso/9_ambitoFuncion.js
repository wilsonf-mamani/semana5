function uno(){
    console.log("uno")
}

function dos(){
    console.log("dos");
    function tres(){
        console.log("tres");
        uno();
    }
    tres();
}

dos();
