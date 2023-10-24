const productos = [
    { categoria: "MTB", producto: "llanta", precio: 8000 },
    { categoria: "CARRERA", producto: "manubrio", precio: 1400 },
    { categoria: "PASEO", producto: "contrapedal", precio: 3600 },
    { categoria: "MTB", producto: "cubierta", precio: 4500 },
    { categoria: "CARRERA", producto: "cadena", precio: 650 },
    { categoria: "PASEO", producto: "pedales", precio: 3100 },
    { categoria: "MTB", producto: "disco de freno", precio: 5500 },
    { categoria: "CARRERA", producto: "shifter", precio: 6750 },
    { categoria: "PASEO", producto: "pedalines", precio: 2730 }
];


let opciones = Number(prompt("Ingrese el numero de la opción que desea realizar\n"))

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
