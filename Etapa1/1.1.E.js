let añoNacimientoUsuario =  prompt ("Ingese su año de nacimiento:");
while ( (isNaN(añoNacimientoUsuario)) || ( añoNacimientoUsuario.trim() === "") ){
    añoNacimientoUsuario =  prompt ("Ingese un año de nacimiento valido")
};

añoNacimientoUsuario = parseInt(añoNacimientoUsuario);

let fechaActual = new Date ();
añoActual = fechaActual.getFullYear();

function calcularEdadUsuario ( añoActual, añoNacimientoUsuario) {
    return añoActual - añoNacimientoUsuario;
}

let edadUsuario = calcularEdadUsuario (añoActual, añoNacimientoUsuario) 

if (edadUsuario < 18) {
    alert (`Tu edad es ${edadUsuario} y eres menor de edad.`)
} else {
    alert (`Tu edad es ${edadUsuario} y eres mayor de edad.`)
}