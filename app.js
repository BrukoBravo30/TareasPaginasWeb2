function append(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      const resultado = eval(display.value);
      display.value = resultado;
    } catch (e) {
      display.value = 'Error';
    }
  }
  