// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numDeImpares = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] % 2 != 0) {
        numDeImpares = numDeImpares + 1;
    }
}
console.log(numDeImpares)

/* 
1. Adicionar o array
2. Declarar a variável que vai armazenar o número de números ímpares encontrados;
3. Percorrer o array;
4. Para cada posição, verificar se o número possui resto ao dividir por 2;
    4a. Se o número na posição deixar resto ao dividir por 2, adicione +1 ao contador de ímpares.
    4b. Caso contrário, a variável contadora permanece inalterada.
5. Imprimir o número de ímpares.
*/