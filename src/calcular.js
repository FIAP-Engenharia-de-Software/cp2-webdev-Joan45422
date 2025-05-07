// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {

  function Calcular(a, b, operacao) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "Erro: parâmetros inválidos";
    }

    if (operacao === '/' && b === 0) {
      return "Erro: divisão por zero";
    }

    switch (operacao) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return "Erro: operação inválida";
    }
  }
 
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };