// Solicitar los números al usuario
let dato1 = prompt("Ingresa el número 1: ");
let dato2 = prompt("Ingresa el número 2: ");

// Convertir los valores ingresados a números
dato1 = parseFloat(dato1);
dato2 = parseFloat(dato2);

// Verificar si ambos valores son números válidos
if (isNaN(dato1) || isNaN(dato2)) {
    alert("Por favor, ingresa solo números válidos.");
} else {
    // Comparar los números
    if (dato1 > dato2) {
        alert("El número 1 es mayor y es: " + dato1);
    } else if (dato2 > dato1) {
        alert("El número 2 es mayor y es: " + dato2);
    } else {
        alert("Ambos números son iguales.");
    }
}
