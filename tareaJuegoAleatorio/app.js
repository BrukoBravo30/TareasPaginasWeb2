let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroMaquina); // Esto está para fines de prueba, puedes quitarlo después.

let numeroUser = parseInt(prompt("Ingresa un número entre 1 y 10: "));
let vidas = 5;

// Verificar que el número ingresado esté dentro del rango
while (numeroUser < 1 || numeroUser > 10) {
    numeroUser = parseInt(prompt("¡El número ingresado no está entre 1 y 10! Por favor ingresa un número de 1 a 10: "));
}

while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    if (numeroUser < numeroMaquina) {
        numeroUser = parseInt(prompt("El número es demasiado bajo. Te quedan " + vidas + " vidas. Intenta nuevamente: "));
    } else {
        numeroUser = parseInt(prompt("El número es demasiado alto. Te quedan " + vidas + " vidas. Intenta nuevamente: "));
    }
}

if (numeroMaquina === numeroUser) {
    console.log("¡Ganaste! El número era " + numeroMaquina);
    alert("¡Ganaste! El número era " + numeroMaquina);
} else {
    console.log("Perdiste. El número era: " + numeroMaquina);
    alert("Perdiste. El número era: " + numeroMaquina);
}
