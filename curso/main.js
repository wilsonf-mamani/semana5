let sebastian = {
    name: "sebastian",
    age: 33,
    getName: function () {
        console.log(this)
    }
}

console.log(sebastian.name, sebastian.age)