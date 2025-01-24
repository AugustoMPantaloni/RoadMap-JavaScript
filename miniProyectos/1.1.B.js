let numero = ""

while ( (isNaN(numero)) || (numero.length !==10) ){
    numero = prompt ("Ingrese su numero de telefono");
    if(isNaN(numero)){
        alert("Su numero de telefono no es un numero.")
    } else if ((numero.length !==10)){
        alert ("Su numero de telefono no tiene los suficientes carcteres o tiene caracteres de mas.")
    }
}

console.log(`Su numero de telefono es ${numero}`)