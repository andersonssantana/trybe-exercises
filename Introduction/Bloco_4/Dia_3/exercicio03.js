// 3- Agora inverta o lado do triângulo. Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 20;

if (n > 2) {
    for (let contador = 1; contador <= n; contador += 1) {
        console.log((' '.repeat(n-contador))+('*'.repeat(contador)))
    }
    
}

/* 
1. Declarar variável n 
2. Se o valor de n for maior que 2, percorrer N vezes;
3. Para cada vez percorrida, escrever n-contador espaço e contador asterisco.
 */
