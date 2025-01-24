let nombre = ""
let apellido = ""


while((nombre === "") || (apellido === "")){
    nombre = prompt ("ingrese su nombre");
    apellido = prompt ("Ingrese su apellido")

    if ((nombre === "") || (apellido === "")){
        alert ("Tu nombre o apllido no son validos, prueba de nuevo.")
    }
}

let email = ""

while ( (!email.includes("@")) || (!email.includes(".")) ){
    email = prompt ("Ingrese su Email")

    if ( (!email.includes("@")) || (!email.includes(".")) ){
        alert("Su email no es valido, pruebe de nuevo.")
    }
}

console.log (`Nombre:${nombre}\nApellido:${apellido}\nEmail:${email}`)


