// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const findLongestWord = string => {
    let longestWord = "";
    let separateString = string.split(" ");
    for (let index = 0; index < separateString.length; index += 1) {
        if (separateString[index].length > longestWord.length) {
            longestWord = separateString[index];
        }
    }
    return longestWord;
}

console.log(findLongestWord("Este é apenas um teste"));

