let sebastien = {
    name : "sebastien",
    lastname: "yabiku",
    age : 33,
    getname : function(){
        console.log(this)
    }
}

console.log(sebastien.age)

let laptop = {
    marca : "lenovo",
    procedencia: "usa",
    fabricacion : 2000,
    getData : function(){
        console.log(this)
    }
}

laptop.getData()

let variable = "lastname";
console.log(sebastien[variable])


