let tareas = []

function nuevaTarea () {
    let ingresoTareaNueva = prompt ("ingrese una nueva tarea:");
    tareas.push(ingresoTareaNueva);
    alert("En consola podra ver su lista de tareas.")
}

nuevaTarea();
console.log(tareas)


