let tareas = []

function nuevaTarea () {
    while (true){
    let ingresoTareaNueva = prompt ("ingrese una nueva tarea, escriba `salir` si no necesita agregar mas tareas:");

    if (ingresoTareaNueva.toLocaleLowerCase() === "salir"){
        break;
    }

    tareas.push(ingresoTareaNueva);

    alert("En consola podra ver su lista de tareas.");
    console.log(tareas)
    tareas.forEach (tarea => console.log (tarea));
    console.log(`total de tareas: ${tareas.length}`)
}
}
nuevaTarea();



