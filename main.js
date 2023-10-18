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


// Pedimos la categoria a filtrar a traves de un prompt
let categoria = prompt("Ingrese la categoria");
categoria = categoria.toUpperCase();
//Filtramos por categoria
let prodFiltrados = productos.filter(
    (item) => item.categoria === categoria
);

//Mostramos por un alert cada uno de los productos filtrados
let mensaje = "";
prodFiltrados.forEach((item) => {
    mensaje += `
    Categoria: ${item.categoria}
    Producto: ${item.producto}
    Precio: $${item.precio}
    `;
});
alert(mensaje)





/* class Productos{
    constructor(categoria, nombre, precio){
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio
    }
}

const producto1 = new Productos ("Mtb", "Suspension", 4500);
const producto2 = new Productos ("Paseo", "Caja pedalera", 2200);
const producto3 = new Productos ("Mtb", )

console.log(producto1)

const listadoProductos = []
listadoProductos.push(producto1);
console.log(listadoProductos)
  */





















/* 

const productos = [];

function eliminarProducto(productoEliminado) {

    const indice = productos.indexOf(productoEliminado);

    if (indice === -1) {
        pedido = prompt(`El producto ingresado no se encuentra en la lista.\nPor favor ingrese el producto que desea eliminar de la lista\n-` + productos.join("\n-"));

    } else {
        productos.splice(indice, 1);
        if (productos.length===0){
            pedido = prompt(`El listado se encuentra vacio.\nSi desea agregar un producto a la lista de compras ingrese "A"\nSi desea salir ingrese "SALIR"`);
            pedido = pedido.toUpperCase();
        }else{
        alert("Listado de compras:\n" + productos.join("\n"))
        pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
        pedido = pedido.toUpperCase();
    }
    }
}


let pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
pedido = pedido.toUpperCase();

while (pedido != "SALIR") {

    if (pedido == "A") {
        const nuevoProducto = prompt("Ingrese el producto que desea agregar a la lista");
        productos.push(nuevoProducto)
        alert(`Listado de compras:\n-`+ productos.join("\n-"))
        pedido = prompt(`Si desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
        pedido = pedido.toUpperCase();
    } else if (pedido == "E") {
        if (productos.length <= 0) {

            pedido = prompt(`No hay productos agregados en la lista\nSi desea agregar un producto a la lista de compras ingrese "A"\nSi desea salir ingrese "SALIR"`)
            pedido = pedido.toUpperCase();

        } else {
            const productoEliminado = prompt("Ingrese el producto que desea eliminar")
            eliminarProducto(productoEliminado)
        }

    } else {
        pedido = prompt(`Por favor ingrese un valor existente.\nSi desea agregar un producto a la lista de compras ingrese "A"\nSi desea eliminar un producto ingrese "E"\nSi desea salir ingrese "SALIR"`);
        pedido = pedido.toUpperCase();
    }
}
 */
