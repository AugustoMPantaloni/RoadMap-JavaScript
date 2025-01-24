const fechaActual = new Date ()
const nombreCliente = "Augusto Pantaloni"
let saldoCuenta = 5000
let esCuentaActiva = true
let transaccionesEnviadas = [
    {fecha:"12/8/24", saldo:1000},
    {fecha:"13/8/24", saldo:2500},
]
let montoAtransferir =""

// Función para formatear la fecha
function formatearFecha(fecha) {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear().toString().slice(-2); 
    return `${dia}/${mes}/${anio}`;
}

function enviarTransaccion () {
    if (esCuentaActiva === true){
        while ( (montoAtransferir === "") || (isNaN(montoAtransferir)) ){
            montoAtransferir = prompt ("ingrese monto a transferir:");
            montoAtransferir = parseFloat(montoAtransferir)
            if ( (montoAtransferir === "") || (isNaN(montoAtransferir)) ){
                alert("Lo ingresado no es un monto valido.")
            } else if (montoAtransferir > saldoCuenta){
                alert ("No cuentas con el saldo necesario para realizar la transaccion.")
                montoAtransferir = "";
            } else {
                saldoCuenta -= montoAtransferir;
                let fechaFormateada = formatearFecha(fechaActual);
                let nuevaTransaccionEnviada = {fecha: fechaFormateada, saldo: montoAtransferir}
                transaccionesEnviadas.push(nuevaTransaccionEnviada);
                const jsonTransaccionesEnviadas = JSON.stringify(transaccionesEnviadas)
                console.log(`Cliente:${nombreCliente}\nSaldo actual:${saldoCuenta}\nTransacciones realizadas:${jsonTransaccionesEnviadas}`)
                alert("Transferencia exitosa.");
            } 
        }
    } else {
        alert ("Su cuenta no esta activa")
    }
}

enviarTransaccion()
