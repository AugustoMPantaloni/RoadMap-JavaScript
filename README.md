--Porfavor visualiza este README desde tu editor de codigo, se vera mas ordenado.

--Recuerda que para poder visualizar tu tarea necesitas ajustar la ruta del script de index.html.

--El nombre de cada tarea indica: la carpeta indica la etapa, el tema (primer numero) y el ejercico (letra) EJ: 2.A (Tema 2, Ejercicio A).

--Puedes ver la resolucion a cada ejercicio en la respectiva carpeta de cada etapa, pero intenta resolverlo por ti mismo primero. Usa un limite de tiempo para resolver cada ejercicio por ejemplo 1 hora.

                                                                            Plan de Estudio JavaScript

---

                                Etapa 1: Fundamentos

1. Variables y Tipos de Datos
**Objetivo:** Comprender las bases de las variables y los tipos de datos en JavaScript.

#### Teoría:
- Variables: `var`, `let`, `const`.
- Tipos de datos: primitivos (`string`, `number`, `boolean`, `undefined`, `null`) y de referencia (`object`, `array`, `function`).

#### Ejercicios:
- **A.** Declarar variables usando `let` y `const`.
- **B.** Identificar el tipo de dato de diferentes valores usando `typeof`.
- **C.** Crear y modificar un objeto simple.
- **D.** Crear y manipular un array.

2. Operadores y Expresiones
**Objetivo:** Dominar los operadores matemáticos, de comparación y lógicos.

#### Teoría:
- Operadores aritméticos: `+`, `-`, `*`, `/`, `%`.
- Operadores de comparación: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`.
- Operadores lógicos: `&&`, `||`, `!`.

#### Ejercicios:
- **A.** Crear una calculadora básica que realice sumas, restas, multiplicaciones y divisiones.
- **B.** Verificar si un número es par o impar.
- **C.** Comparar dos variables y determinar si son iguales en valor y tipo.

3. Estructuras de Control
**Objetivo:** Aprender a tomar decisiones y repetir acciones en el código.

#### Teoría:
- Condicionales: `if`, `else`, `else if`, `switch`.
- Bucles: `for`, `while`, `do...while`.

#### Ejercicios:
- **A.** Crear un programa que verifique si un usuario es mayor de edad.
- **B.** Hacer un contador que imprima los números del 1 al 10.
- **C.** Crear un menú utilizando `switch` para seleccionar entre diferentes opciones.

4. Funciones
**Objetivo:** Estructurar el código utilizando funciones reutilizables.

#### Teoría:
- Declaración de funciones.
- Parámetros y valores de retorno.
- Funciones flecha.

#### Ejercicios:
- **A.** Crear una función que sume dos números.
- **B.** Hacer una función que calcule el factorial de un número.
- **C.** Diseñar una función que convierta grados Celsius a Fahrenheit.

---

                                Etapa 2: Trabajo con Estructuras de Datos

5. Arrays y Métodos Básicos
**Objetivo:** Manipular listas de datos.

#### Teoría:
- Creación de arrays.
- Métodos: `push`, `pop`, `shift`, `unshift`, `forEach`, `map`, `filter`.

#### Ejercicios:
- **A.** Crear un array de números y sumar todos sus elementos.
- **B.** Filtrar un array para obtener solo los números mayores a 10.
- **C.** Usar `map` para transformar un array de grados Celsius a Fahrenheit.

6. Manejo de Cadenas (Strings)
**Objetivo:** Trabajar con texto y realizar operaciones comunes.

#### Teoría:
- Propiedades y métodos: `length`, `toUpperCase`, `toLowerCase`, `split`, `slice`, `includes`.

#### Ejercicios:
- **A.** Contar la cantidad de caracteres en una cadena.
- **B.** Verificar si una palabra está contenida en una oración.
- **C.** Dividir una cadena en palabras y contar cuántas hay.

7. Objetos Básicos
**Objetivo:** Comprender la estructura y uso de objetos.

#### Teoría:
- Creación de objetos.
- Acceso y modificación de propiedades.
- Métodos dentro de objetos.

#### Ejercicios:
- **A.** Crear un objeto que represente un auto con propiedades como marca, modelo y año.
- **B.** Agregar un método al objeto que imprima una descripción del auto.
- **C.** Crear un sistema de inventario utilizando un array de objetos.

---

                                Mini-Proyectos

1. Sistema de Gestión Bancaria
**Descripción:** Crear un sistema que permita a un usuario:
- Consultar su saldo.
- Depositar dinero.
- Retirar dinero.

**Conceptos Aplicados:** Objetos, funciones, condicionales.

2. Juego de Adivinanza
**Descripción:** Crear un juego donde el usuario adivine un número aleatorio.

**Conceptos Aplicados:** Bucles, condicionales, funciones.

3. Inventario de Productos
**Descripción:** Diseñar un sistema que administre productos con funcionalidades como:
- Agregar, eliminar y listar productos.
- Filtrar productos por categoría o precio.

**Conceptos Aplicados:** Arrays, objetos, funciones.

---

                                Etapa 3: Interacción con el Usuario y Programación Asíncrona
En esta etapa, te enfocarías en cómo interactuar con el usuario a través del DOM, manejar eventos y trabajar con asincronía usando promesas y async/await. Esto es fundamental para crear aplicaciones dinámicas en JavaScript.

8. Manipulación del DOM
**Objetivo:** Aprender a modificar y actualizar elementos en una página web usando JavaScript.

### Teoría:
- ¿Qué es el DOM?
- Selección de elementos: getElementById, querySelector, querySelectorAll.
- Modificación de contenido: .textContent, .innerHTML, .value.
- Modificación de estilos: .style, classList.add/remove/toggle.

### Ejercicios:
- **A.** Cambiar el contenido de un <p> con JavaScript.
- **B.** Alternar clases CSS para cambiar colores con un botón.
- **C.** Crear una lista de tareas donde se puedan agregar y eliminar elementos dinámicamente.

9. Manejo de Eventos
**Objetivo:** Aprender a capturar la interacción del usuario con eventos en JavaScript.

### Teoría:
- Eventos del DOM: click, input, keydown, submit.
- Métodos: addEventListener, removeEventListener.
- Prevención de comportamiento por defecto con event.preventDefault().

### Ejercicios:
- **A.** Capturar el texto ingresado en un <input> y mostrarlo en pantalla en tiempo real.
- **B.** Crear un contador que aumente o disminuya con botones.
- **C.**Validar un formulario y mostrar mensajes de error si los datos no son correctos.

10. Programación Asíncrona y Fetch API
**Objetivo:** Aprender a trabajar con datos externos usando fetch y promesas.

### Teoría:
- Concepto de asincronía en JavaScript.
- Promesas: .then(), .catch(), .finally().
- async/await para manejar asincronía de manera más clara.
- Introducción a Fetch API para consumir datos de una API.

### Ejercicios:
- **A.**Hacer una petición a una API pública y mostrar los datos en pantalla.
- **B.** Simular una carga de datos con setTimeout y Promise.
- **C.** Crear un buscador de usuarios que obtenga información de una API y la muestre en pantalla.

                                Proyecto Final

Crear una aplicación interactiva que combine:
✅ Manipulación del DOM (mostrar información en pantalla).
✅ Eventos (capturar interacciones del usuario).
✅ Fetch API (traer datos desde una API real).

Por ejemplo:
📌 Un clima interactivo: El usuario ingresa su ciudad y se muestran los datos del clima usando una API.
📌 Un gestor de tareas con persistencia en LocalStorage.
📌 Un buscador de personajes de una API como Pokémon o Star Wars.

