let numero1 = prompt("Escriba el primer numero a sumar:")
let numero2 = prompt("Escriba el segundo numero a sumar:")

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);


function sumar (numero1, numero2) {
    return (
        alert(` el resultado es: ${numero1 + numero2}`)
    )
}

sumar(numero1, numero2);