// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    soma = soma + numbers[contador];
}
console.log(soma);

/* 
1. Adicionar o array
2. Declarar a variável que vai conter a soma, com o valor 0;
3. Percorrer o array;
4. Verificar o valor em cada posição percorrida e somá-lo à variável de soma;
5. Imprimir a variável de soma, com o valor total.
*/