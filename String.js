function countLetterA(str) {
  let count = 0;

  // Percorre cada caractere da string
  for (let i = 0; i < str.length; i++) {
    // Verifica se o caractere é 'a' ou 'A'
    if (str[i] === "a" || str[i] === "A") {
      count++;
    }
  }

  if (count > 0) {
    return `A letra 'a' aparece ${count} vezes na string.`;
  } else {
    return `A letra 'a' não aparece na string.`;
  }
}

// Exemplo de uso:
let testString = "JavaScript é uma linguagem poderosa!";
console.log(countLetterA(testString));
