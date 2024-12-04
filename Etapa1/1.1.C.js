// Este ejercicio no esta terminado, si estas aca podes volver a resolverlo de 0 o completarlo.

const nombreCliente = "Augusto Pantaloni"
let saldoCuenta = 5000
let esCuentaActiva = true
let transaccionesEnviadas = [
    {fecha:"12/8/24", saldo:1000},
    {fecha:"13/8/24", saldo:2500},
]
let montoAtransferir =""

function enviarTransaccion () {
    if (esCuentaActiva === true){
        while ( (montoAtransferir === "") || (isNaN(montoAtransferir)) ){
            montoAtransferir = prompt ("ingrese monto a transferir:");
            montoAtransferir = parseFloat(montoAtransferir)
            if ( (montoAtransferir === "") || (isNaN(montoAtransferir)) ){
                alert("Lo ingresado no es un monto valido.")
            } else if (montoAtransferir > saldoCuenta){
                alert ("No cuentas con el saldo necesario para realizar la transaccion.")
            } else {
                alert("Transferencia exitosa.");
            }
        }
    } else {
        alert ("Su cuenta no esta activa")
    }
}

enviarTransaccion()