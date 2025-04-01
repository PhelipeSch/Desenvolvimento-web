var frutas = ["maça", "uva"];
frutas.push("banana");
frutas.shift();
frutas.unshift("Abacaxi");

frutas.forEach(function (item, index, array){
    console.log(index,item)
})

frutas.splice(1,1);
console.log(frutas);
