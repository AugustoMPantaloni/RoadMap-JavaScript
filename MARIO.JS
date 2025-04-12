let altura = 10

for(let f = 1; f <= altura; f++){
    let cont = "";

    for(let e = 1; e <= f - 1; e++){
        cont += " ";
    }

    for(let c = 1; c <= altura - f + 1; c++){
        cont += "#";
    }
    console.log(cont)
}   


/*

    + + + + + + +
    + 1 1 1 1 1 + 
    + 2 2 2 2 2 +
    + 3 3 3 3 3 +
    + 4 4 4 4 4 +
    + 5 5 5 5 5 +
    + + + + + + +

*/