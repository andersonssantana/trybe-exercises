// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] >= maiorNumero) {
        maiorNumero = numbers[contador];
    }
}
console.log(maiorNumero);

/* 
1. Adicionar o array;
2. Declarar a variável que vai armazenar o maior número e dar a ela o valor 0;
3. Percorrer o array;
4. Comparar o valor da posição percorrida com a variável que armazena o maior número;
    4a. Se o número na posição for maior que o da variável, a variável o receberá.
    4b. Caso contrário, a variável permanece inalterada e o seu valor continua sendo considerado o maior.
5. Imprimir o valor da variável de maior número.
*/