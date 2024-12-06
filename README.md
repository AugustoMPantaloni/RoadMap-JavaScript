--Porfavor visualiza este README desde tu editor de codigo, se vera mas ordenado.

--Recuerda que para poder visualizar tu tarea necesitas ajustar la ruta del script de index.html.

--El nombre de cada tarea indica: la etapa (primer numero), el tema (segundo numero) y el ejercico (letra) EJ: 2.1.A (Etapa 2, Tema 1, Ejercicio A).

--Puedes ver la resolucion a cada ejercicio en la respectiva carpeta de cada etapa, pero intenta resolverlo por ti mismo primero. Usa un limite de tiempo para resolver cada ejercicio por ejemplo 1 hora.


Plan de acción para empezar desde los fundamentos

                                                                    Etapa 1: Fundamentos de JavaScript
En esta etapa repasaremos los conceptos básicos con un enfoque en profundidad.

1. Variables y tipos de datos
Objetivo: Dominar las diferencias entre var, let y const y trabajar con los tipos de datos.

Teoría: Revisaremos tipos primitivos (string, number, boolean, etc.) y valores por referencia (array, object).
    -A:
        Crear un programa que registre información de un usuario (nombre, edad, email) y la muestre formateada. Implementar validaciones para cada dato ingresado.
    -B: 
        Validar Número de Teléfono. Pide al usuario que ingrese un número de teléfono válido. Un número válido debe:
        Tener exactamente 10 dígitos.
        Incluir solo números.
        Si el número no es válido, muestra un mensaje de error y repite la solicitud.
    -C:
        Crea un programa que simule un sistema de gestión de cuentas bancarias.
        Declara las siguientes variables con diferentes tipos de datos:
        nombreCliente: El nombre del cliente (tipo string).
        saldoCuenta: El saldo de la cuenta bancaria (tipo number).
        esCuentaActiva: Un valor booleano (true o false) que indique si la cuenta está activa.
        transacciones: Un array de objetos, cada objeto representa una transacción con las propiedades fecha (tipo string) y monto (tipo number).
        Utiliza var, let y const de manera adecuada.
        Si la cuenta está activa, realiza una transacción (restando o sumando un monto al saldo) y agrega la transacción al array transacciones.
        Si la cuenta no está activa, muestra un mensaje de error.
        Haz que el programa imprima:
        El nombre del cliente.
        El saldo actual.
        Las transacciones realizadas.
    -D: 
        Inventario de Productos
        Crea un programa que registre información de un producto:
        Nombre del producto (string).
        Precio (number).
        Categoría (string).
        En stock (booleano, indica si el producto está disponible).
        Luego, imprime esta información en formato de tabla usando console.table().
    -E: 
        Calculadora de Edad
        Pide al usuario su año de nacimiento.
        Calcula su edad basándote en el año actual.
        Muestra un mensaje que indique si la persona es mayor de edad o no.
    -F: 
        Gestión de Tareas
        Declara un array vacío llamado tareas.
        Crea un programa que permita agregar nuevas tareas (string) al array.
        Agrega un contador para mostrar cuántas tareas hay en total.
        Imprime las tareas en un formato de lista.

2. Operadores y expresiones
Objetivo: Comprender operadores aritméticos, lógicos y ternarios.

Teoría: Explicaremos cómo funcionan los operadores y las prioridades entre ellos.
    -A:
Crear una calculadora básica con suma, resta, multiplicación y división.
Reto: Agregar soporte para operaciones más avanzadas como exponentes o raíces.

3. Estructuras de control
Objetivo: Repasar condicionales y bucles.

Teoría: Diferencia entre if/else, switch, y los tipos de bucles (for, while, do...while).
    -A:
Crear un programa que recorra un array de números e identifique cuáles son pares.
Reto: Crear un juego tipo "adivina el número" usando un bucle y condicionales.
