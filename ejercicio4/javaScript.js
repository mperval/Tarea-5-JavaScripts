// Definir la función que verifica si un número es par o impar
function verificarParImpar(numero) {
  if (numero % 2 === 0) {
    return "El número es par";
  } else {
    return "El número es impar";
  }
}

// Ejemplo de uso de la función con un número específico (por ejemplo, 7)
var numeroEvaluado = 7;
var resultado = verificarParImpar(numeroEvaluado);

// Mostrar por pantalla el resultado devuelto por la función
console.log(resultado);
