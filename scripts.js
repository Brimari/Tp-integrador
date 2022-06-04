function calcularTotal(){
    var cantEntradas,
    total,
    categoria,
    entradaEstudiante,
    entradaTrainee,
    entradaJunior,
    general;

    cantEntradas = document.getElementById('entradaCantidad').value;
    categoria = document.getElementById('entradaCategoria').value;

    entradaEstudiante = 200 - (200 * 80) / 100;
    entradaTrainee = 200 - (200 * 50) / 100;
    entradaJr = 200 - (200 * 15) / 100;
    general = 200;

    console.log('cant entradas ' + cantEntradas + 'categoria ' + categoria);
    
    if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) {
      if (categoria == 'Estudiante') {
        total = entradaEstudiante * cantEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Trainee') {
        total = entradaTrainee * cantEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Junior') {
        total = entradaJunior * cantEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'General') {
        total = general * cantEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      }
    } else {
      window.alert('La cantidad de entradas debe ser un número entero');
    }
}
  function borrar() {
    document.getElementById('entradaNombre').value = ' ';
    document.getElementById('entradaApellido').value = ' ';
    document.getElementById('entradaEmail').value = ' ';
    document.getElementById('entradaCantidad').value = ' ';
    document.getElementById('entradaCategoria').value = 'Estudiante';
    document.getElementById('precioFinal').innerHTML = 'Total a Pagar: \u0024';
  }