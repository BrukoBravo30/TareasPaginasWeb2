let inventario = [];

function mostrarMenu() {
    return parseInt(prompt(
        "Opciones Disponibles: \n" +
        "1. Agregar Producto \n" +
        "2. Mostrar todos los productos \n" +
        "3. Buscar producto por nombre \n" +
        "4. Salir \n" +
        "Elige una opción: "
    ));
}

function agregarProducto() {
    let nombreProducto = prompt("Introduce el nombre del producto: ");
    // no debe estar vacia la cadena xd
    if (!nombreProducto.trim()) {
        alert("El nombre del producto no puede estar vacío.");
        return;
    }

    let cantidadProducto = parseInt(prompt("Introduce la cantidad del producto: "));
    //la cantidad debe ser mayor a 0 y debe ser un numero(isNAN)
    if (isNaN(cantidadProducto) || cantidadProducto <= 0) {
        alert("La cantidad debe ser un número positivo.");
        return;
    }

    let precioProducto = parseFloat(prompt("Introduce el precio del producto:"));
    // eel precio es mayor a 0 y debe ser un numero(isNAN)
    if (isNaN(precioProducto) || precioProducto <= 0) {
        alert("El precio debe ser un número positivo.");
        return;
    }

    let producto = {
        nombre: nombreProducto,
        cantidad: cantidadProducto,
        precio: precioProducto
    };

    inventario.push(producto);
    alert("Producto agregado");
}

function mostrarProducto() {
    if (inventario.length === 0) {
        alert("No tenemos productos en el inventario.");
    } else {
        let mensaje = "Productos en el inventario:\n";
        inventario.forEach((producto, index) => {
            mensaje += `Producto ID: ${index + 1}\n` +
                `Nombre: ${producto.nombre}\n` +
                `Cantidad: ${producto.cantidad}\n` +
                `Precio: $${producto.precio.toFixed(2)}\n` +
                "------------------------------------\n";
        });
        alert(mensaje);
    }
}

function buscarProducto() {
    //indicamos que la buqueda no puede ser vacia
    let nombreBusqueda = prompt("Introduce el nombre del producto a buscar: ");
    if (!nombreBusqueda.trim()) {
        alert("El nombre no puede estar vacío.");
        return;
    }
    //variable encontrado en false, hasta que encuentre todos los productos
    let encontrado = false;
    let mensaje = "Productos encontrados:\n";
    // este ciclo recorre el inventario, lo que hace es pasar a minuscula el inventario y la busqueda, los compara y si hay coincidencia lo agrega
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase().includes(nombreBusqueda.toLowerCase())) {
            mensaje += `Producto ID: ${i + 1}\n` +
                `Nombre: ${inventario[i].nombre}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
                `Precio: $${inventario[i].precio.toFixed(2)}\n` + // solo con 2 decimales
                "------------------------------------\n";
            encontrado = true;
        }
    }

    if (encontrado) {
        alert(mensaje);
    } else {
        alert("No se encontró ningún producto con ese nombre.");
    }
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
}

iniciarPrograma();
