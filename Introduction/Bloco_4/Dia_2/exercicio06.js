// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numDeImpares = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] % 2 != 0) {
        numDeImpares = numDeImpares + 1;
    }
}
console.log(numDeImpares)