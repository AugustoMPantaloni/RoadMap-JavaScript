/* Ejercicio4
for(let i = 2; i < 22; i = i + 2 ){
    console.log(i)
}
*/

/* Ejercicio 5
let total = 0
for(let i = 1; i < 6; i++){
    total += i
}
console.log(total)
*/

/*  Ejercicio 3
for (let i = 1; i < 55; i++){
    if(i % 5 === 0){
        console.log(i)
    }
}
*/

/* Ejercicio 6
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
*/

/* Ejercicio 7
let nombre = "Augusto"
for(let i = 0; i < nombre.length; i++){
    console.log(nombre[i]);
}
*/

/* Ejercicio 8
let palabra = "abecedario" 
let vocales = ["a", "e", "i", "o", "u"]
for (let i = 0; i < palabra.length; i++){
    if(vocales.includes(palabra[i])){
        console.log(palabra[i])
    }
}
*/

/* Ejercicio 9
let palabra = "murcielago"
let vocales = ["a", "e", "i", "o", "u"]
let totalVocales = 0
for (let i = 0;  i < palabra.length; i++){
    if(vocales.includes(palabra[i])){
        console.log(palabra[i]);
        totalVocales ++
    }
}
console.log(totalVocales)
*/

/* Ejercicio 10
let numero = 4
for(let i = 0; i <= 10; i++){
    let resultado = numero * i
    console.log( `${numero} x ${i} = ${resultado}`)
}
*/

/* Ejercicio 11
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 2 === 0){
        console.log(i)
    }
}
*/

/* Ejercicio 12
for( let n = 2; n <= 5; n++){
    for (let i = 1; i <= 10; i++){
        let resultado = n * i;
        console.log(`${n} x ${i} = ${resultado}`)
    }
}

// O podemos resolverlo de la siguiente forma

let numero = [2, 3, 4, 5]
for(let n = 0; n <= numero.length; n++ ){
    console.log(`Tabla de multiplicar de: ${numero[n]}`)
    for ( let i = 0; i <= 10; i++){
        let resultado = numero[n] * i;
        console.log(`${numeros[n]} x ${i} = ${resultado}`)
    }
}
*/