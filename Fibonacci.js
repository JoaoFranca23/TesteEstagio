function fibonacciSequence(limit) {
  let fibSeq = [0, 1];

  // Gera a sequência de Fibonacci até o limite
  while (fibSeq[fibSeq.length - 1] < limit) {
    let nextValue = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    fibSeq.push(nextValue);
  }

  return fibSeq;
}

function isFibonacciNumber(num) {
  let fibSeq = fibonacciSequence(num);

  // Verifica se o número está na sequência de Fibonacci
  if (fibSeq.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
  }
}

// Exemplo de uso:
let numToTest = 21;
console.log(isFibonacciNumber(numToTest));
