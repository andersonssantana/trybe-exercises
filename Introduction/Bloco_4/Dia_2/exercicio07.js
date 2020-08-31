// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] <= menorNumero) {
        menorNumero = numbers[contador];
    }
}
console.log(menorNumero);

/* 
1. Adicionar o array;
2. Declarar a variável que vai armazenar o menor número e dar a ela o valor da primeira posição do array;
3. Percorrer o array;
4. Comparar o valor da posição percorrida com a variável que armazena o maior número;
    4a. Se o número na posição for menor ou igual que o da variável, a variável o receberá.
    4b. Caso contrário, a variável permanece inalterada e o seu valor continua sendo considerado o menor.
5. Imprimir o valor da variável de menor número.
*/