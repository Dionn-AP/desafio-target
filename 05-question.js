function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Exemplo de uso
const minhaString = "Hello, world!";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);
