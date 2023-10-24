const productos = [
    { id:1, categoria: "MTB", producto: "llanta", precio: 8000 },
    { id:2, categoria: "CARRERA", producto: "manubrio", precio: 1400 },
    { id:3, categoria: "PASEO", producto: "contrapedal", precio: 3600 }
];

function agregarProducto(categoria, producto, precio){
    let nuevoId = productos.length + 1
    nuevoProducto = {id: nuevoId, categoria, producto,precio}
    productos.push(nuevoProducto)
}



let opciones = Number(prompt("Ingrese el numero de la opción que desea realizar\n1- Agregar un producto.\n2-Borrar un producto.\n3- Buscar un producto."))

if (opciones === 1){
    let categoria = prompt("Ingrese la categoria correspondiente al producto");
    let producto = prompt("Ingrese el nombre del producto");
    let precio = Number(prompt("Ingrese el precio del producto"));
   
    agregarProducto(categoria, producto, precio);

    let mensaje = "";
productos.forEach((item) => {
    mensaje += `
    Categoria: ${item.categoria}
    Producto: ${item.producto}
    Precio: $${item.precio}
    `;
});
alert(mensaje)

}
//Pedido de datos al usuario para hacer el filtro, mediante prompt.
let categoria = prompt("Ingrese la categoria del producto buscado");
let producto = prompt("Ingrese el nombre del producto buscado");
let precio = Number(prompt("Ingrese el valor maximo que desea pagar por su producto"));

//Modifico las entradas para evitar que no coincidan con los valores.
categoria = categoria.toUpperCase();
producto = producto.toLowerCase();

//Filtro segun los datos ingresados por el usuario.
let prodFiltrados = productos.filter(
    (item) =>
        item.categoria === categoria &&
        item.producto === producto &&
        item.precio <= precio    
);


//Creo un mensaje para mostrarle al usuario los datos obtenidos segun sus preferencias.
let mensaje = "";
prodFiltrados.forEach((item) => {
    mensaje += `
    Categoria: ${item.categoria}
    Producto: ${item.producto}
    Precio: $${item.precio}
    `;
});
alert(mensaje)
