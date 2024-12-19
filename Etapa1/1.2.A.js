// no se realizo el reto.

let numero1, numero2, operacion;  // Variables globales

function solicitarNumeros (){
    numero1 = parseFloat(prompt("ingrese el primer numero para la operacion:"));
    numero2 = parseFloat(prompt("ingrese el segundo numero para la operacion:"));
    while ( (isNaN(numero1)) || (isNaN(numero2)) ) {
        alert("Lo ingresado no es un numero o esta vacio, pruebe de nuevo.")
        numero1 = parseFloat(prompt("ingrese el primer numero para la operacion:"));
        numero2 = parseFloat(prompt("ingrese el segundo numero para la operacion:"));
        }
}

function solicitarOperacion (){
    operacion = prompt("seleccione una operacion: +, -, *, /")
    while ((operacion === "" || (operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/"))){
        alert ("Lo ingresado no es una operacion valida, pruebe de nuevo.")
        operacion = prompt("seleccione una operacion: +, -, *, /")
    }
}

function calculadora (numero1, numero2, operacion) {
    switch (operacion){
        case "+":
            alert("puede ver el resultado en consola")
            console.log(`El resultado de su operacion de sumar ${numero1} y ${numero2} es: ${numero1 + numero2}`);
            break;
        case "-":
            alert("puede ver el resultado en consola")
            console.log (`El resultado de su operacion de restar ${numero1} y ${numero2} es: ${numero1 - numero2}`);
            break;
        case "*":
            alert("puede ver el resultado en consola")
            console.log (`El resultado de su operacion de multiplicar ${numero1} y ${numero2} es: ${numero1 * numero2}`)
            break;
        case "/":
            alert("puede ver el resultado en consola")
            console.log (`El resultado de su operacion de divir ${numero1} y ${numero2} es: ${numero1 / numero2}`)
        break;
        default:
            console.log("No selecciono una operacion valida")
    }
}

solicitarNumeros();
solicitarOperacion();
calculadora (numero1, numero2, operacion);