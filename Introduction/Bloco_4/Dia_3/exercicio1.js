/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.  */

let n = 10;

if (n > 2) {
    for (let contador = 0; contador < n; contador += 1) {
        console.log('*'.repeat(n))
    }
    
}

/* 
1. Declarar variável n 
2. Se o valor de n for maior que 2, percorrer N vezes;
3. Para cada vez percorrida, escrever o asterisco n vezes repetido.
 */

