function append(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function limpiar() {
    document.getElementById('display').value = '';
  }
  
  function calcular() {
    const display = document.getElementById('display');
    try {
      const resultado = eval(display.value);
      display.value = resultado;
    } catch (e) {
      display.value = 'Error';
    }
  }
  