const productos = [
    { id: 1, categoria: "MTB", producto: "llanta", precio: 8000 },
    { id: 2, categoria: "CARRERA", producto: "manubrio", precio: 1400 },
    { id: 3, categoria: "PASEO", producto: "contrapedal", precio: 3600 }
];



function agregarProducto(categoria, producto, precio) {
    let nuevoId = productos.length + 1
    nuevoProducto = { id: nuevoId, categoria, producto, precio }
    productos.push(nuevoProducto)
}

function borrarProducto(id) {
    let prodBorrar = productos.find((item) => item.id === id);
    let posicion = productos.indexOf(prodBorrar)
    productos.splice(posicion, 1)
}

let opciones = Number(prompt("Ingrese el numero de la opción que desea realizar\n1- Agregar un producto.\n2-Borrar un producto.\n3- Salir."))

while (opciones !== 3) {
    if (opciones === 1) {
        let categoria = prompt("Ingrese la categoria correspondiente al producto");
        let producto = prompt("Ingrese el nombre del producto");
        let precio = Number(prompt("Ingrese el precio del producto"));

        agregarProducto(categoria, producto, precio);

        let mensaje = "";
        productos.forEach((item) => {
            mensaje += `
            id: ${item.id}
            Categoria: ${item.categoria}
            Producto: ${item.producto}
            Precio: $${item.precio}
            `;
        });
        alert(mensaje)

        opciones = Number(prompt("Ingrese el numero de la opción que desea realizar\n1- Agregar un producto.\n2-Borrar un producto.\n3- Salir."))

    } else if (opciones === 2) {

        let eliminar = Number(prompt("Ingrese el id correspondiente del producto que desea borrar"));
        borrarProducto(eliminar);

        let cantElementos = productos.length;
        if (cantElementos <= 0) {
            alert("Ya no hay productos en stock")
            opciones = Number(prompt("Ingrese el numero de la opción que desea realizar\n1- Agregar un producto.\n3- Salir."))
        
        } else {

            let mensaje = "";
            productos.forEach((item) => {
                mensaje += `
            id: ${item.id}
            Categoria: ${item.categoria}
            Producto: ${item.producto}
            Precio: $${item.precio}
            `;
            });
            alert(mensaje)

            opciones = Number(prompt("Ingrese el numero de la opción que desea realizar\n1- Agregar un producto.\n2-Borrar un producto.\n3- Salir."))
        }

    } else {
        alert("Por favor ingrese una opcion válida")
        opciones = Number(prompt("Ingrese el numero de la opción que desea realizar\n1- Agregar un producto.\n2-Borrar un producto.\n3- Salir."))
    }
}