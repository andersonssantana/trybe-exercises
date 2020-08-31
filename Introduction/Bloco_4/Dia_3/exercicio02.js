// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;

if (n > 2) {
    for (let contador = 1; contador <= n; contador += 1) {
        console.log('*'.repeat(contador))
    }
    
}

/* 
1. Declarar variável n 
2. Se o valor de n for maior que 2, percorrer N vezes;
3. Para cada vez percorrida, escrever o asterisco o mesmo número de vezes que está no contador.
 */
