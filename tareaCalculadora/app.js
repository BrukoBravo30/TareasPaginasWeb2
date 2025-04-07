function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

function multiplicacion(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

function division(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}

let opcion;

while (true) {
    opcion = parseInt(prompt(`
    Elige una operación:
    1 - Suma
    2 - Resta
    3 - Multiplicación
    4 - División
    Otro número para salir
    `));

    if (opcion < 1 || opcion > 4) {
        alert("¡Hasta luego!");
        break;
    }

    let numero1 = prompt("Número 1:");
    let numero2 = prompt("Número 2:");

    let resultado;

    switch (opcion) {
        case 1:
            resultado = suma(numero1, numero2);
            alert(`La suma es: ${resultado}`);
            console.log(`La suma es: ${resultado}`);
            break;
        case 2:
            resultado = resta(numero1, numero2);
            alert(`La resta es: ${resultado}`);
            console.log(`La resta es: ${resultado}`);
            break;
        case 3:
            resultado = multiplicacion(numero1, numero2);
            alert(`La multiplicación es: ${resultado}`);
            console.log(`La multiplicación es: ${resultado}`);
            break;
        case 4:
            if (parseInt(numero2) === 0) {
                alert("No se puede dividir entre 0");
                console.log("Error: división por cero");
            } else {
                resultado = division(numero1, numero2);
                alert(`La división es: ${resultado}`);
                console.log(`La división es: ${resultado}`);
            }
            break;
    }
}
