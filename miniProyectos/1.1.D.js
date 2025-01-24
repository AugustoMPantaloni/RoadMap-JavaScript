listaProductos = []

function crearProducto (nombre, precio, categoria, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
}



function agregarProducto (){
    let nombreProducto = prompt ("Ingrese el nombre del producto:")
    while (nombreProducto == ""){
        nombreProducto = prompt ("ingrese un nombre  de producto valido")
    }
    let precioProducto = parseFloat(prompt ("Ingrese el precio:"))
    while ( (isNaN(precioProducto)) || (precioProducto <= 0) ){
        precioProducto = parseFloat(prompt ("lo ingresado no es un precio valido, ingrese nuevamente el precio:"))
    }
    let categoriaProducto = prompt ("ingrese la categoria:")
    while (categoriaProducto == ""){
        categoriaProducto = prompt ("ingrese una categoria valida:")
    }
    let stockProducto = prompt ("¿El producto esta en stock? (SI/NO)").toUpperCase();
    while (stockProducto !== "SI" && stockProducto !=="NO"){
        stockProducto = prompt ("Respuesta inválida. Ingrese 'SI' o 'NO' para indicar si el producto está en stock.").toUpperCase();
    }
    stockProducto = stockProducto === "SI";
    
    let productoNuevo = new crearProducto (nombreProducto, precioProducto, categoriaProducto, stockProducto);
    listaProductos.push(productoNuevo);
    alert("El producto ha sido agregado correctamente. Revise la consola para ver la lista de productos.");
    console.table (listaProductos)
}

agregarProducto ();