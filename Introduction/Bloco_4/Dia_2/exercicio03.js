/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let soma = 0;
    
    for (let contador = 0; contador < numbers.length; contador += 1) {
        soma = soma + numbers[contador];
    }
    console.log(soma / numbers.length);

/* 
1. Adicionar o array
2. Declarar a variável que vai conter a soma, com o valor 0;
3. Percorrer o array;
4. Verificar o valor em cada posição percorrida e somá-lo à variável de soma;
5. Imprimir a variável de soma, dividido pelo número total de posições do array.
*/