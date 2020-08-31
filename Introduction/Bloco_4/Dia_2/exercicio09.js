// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let resultado = [];

for (let contador = 1; contador <= 25; contador += 1) {
    resultado.push(contador);
}

for (let contador = 0; contador < resultado.length; contador += 1) {
    console.log(resultado[contador] / 2)
}

/* 
1. Adicionar o array vazio;
2. Percorrer de 1 a 25;
3. Adicionar o valor de cada posição ao array;
4. Percorrer todas as posições do array;
5. Imprimir a posição do array dividido por 2.
*/