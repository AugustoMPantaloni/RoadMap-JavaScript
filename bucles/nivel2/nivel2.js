/* Ejercicio 1
for(let fila = 1; fila<=3; fila++){
    let contenido = ""
    for(let columna = 1; columna <= 4; columna++){
        contenido += "*"
    }
    console.log(contenido)
}
*/

/* Ejercicio 2
for(let filas = 1; filas <= 4; filas++){
    let contenido = ""
    for(let columnas = 1; columnas <= 5; columnas++){
        contenido += filas 
    }
    console.log(contenido)
}
*/

/* Ejercicio 3
for (let filas = 1; filas <= 4; filas++){
    let contenido = "";
    for(let columnas = 1; columnas <= 5; columnas ++){
        contenido += columnas 
    }
    console.log(contenido)
}
*/

/* Ejercicio 4
for (let f = 1; f <= 5; f++){
    let contenido = ""
    for(let c = 1; c <= f; c++ ){
        contenido += f
    }
    console.log(contenido)
}
*/

/* Ejercicio 5
for(let f = 1; f <= 4; f++){
    let contenido = "";
    for(let c = 1; c <= f; c++){
        contenido += c
    }
    console.log(contenido)
}
*/

/* Ejercicio 6
for(let f = 1; f <= 4; f++){
    let contenido = ""
    for( let c = 1; c <= 5; c++){
        if( (f+c) % 2 === 0){
            contenido += f
        } else{
            contenido += "-"
        }
    }
    console.log(contenido)
}
*/

/*Ejercicio 7
for(let f= 1; f <= 5; f++){
    let cont = ""
    for(let c = 1; c <= 5; c++){
        if((f + c) % 2 === 0){
            cont += c
        }else{
            cont += "*"
        }
        if(c < 5){
            cont += " "
        }
    }
    console.log(cont)
}
*/

/* Ejercicio 8
for(let f = 1; f <= 5; f++){
    let cont = "";
    for(let c = 1; c <= 5; c++){
        if( (f+c) % 2 === 0 ){
            cont += f * c
        }else{
            cont += "-"
        }
        if(c < 5){
            cont += " "
        }
    }
    console.log(cont)
}
*/

/* Ejercicio 9
for(let f = 1; f <= 5; f++){
    let cont =""
    for(let c = 1; c <= 5; c++){
        if( f === c ){
            cont += "1"
        }else{
            cont += "0"
        }
        if( c < 5){
            cont += " "
        }
    }
    console.log(cont.trim())
}
*/

/* Ejercicio 10
for( let f = 1; f <= 5; f++){
    let cont = "";
    for(let c = 1; c <= 5; c++){
        if( (f + c) === 6 ){
            cont += "1";
        } else {
            cont += "0";
        }
        if(c < 5){
            cont += " ";
        }
    }
    console.log(cont)
}
*/

/* Ejercicio 11
for( let f = 1; f <= 5; f++){
    let cont = "";
    for(let c = 1; c <= 5; c++){
        if(f === c || (f+c) === 6){
            cont += "1";
        }else{
            cont += "0";
        }
        if(c < 5){
            cont += " ";
        }
    }
    console.log(cont)
}
*/

/* Ejercicio 12
for( let f = 1; f <= 7; f++){
    let cont = "";
    for( let c = 1; c <= 7; c++){
        if(f === 4 && c === 4){
            cont += "X";
        } else if(f === c || (f + c) === 8){
            cont += "/";
        } else{
            cont += ".";
        }
        if(c < 8){
            cont += " "
        }
    }
    console.log(cont)
}
*/



