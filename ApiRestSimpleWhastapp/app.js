function enviarMensaje() {
    const pais = document.getElementById('pais').value;
    const numero = document.getElementById('numero').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (numero === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (!/^\d+$/.test(numero)) {
      alert('El número de teléfono debe contener solo números.');
      return;
    }

    const url = `https://wa.me/${pais}${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}