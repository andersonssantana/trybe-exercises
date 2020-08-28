// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let resultado = [];

for (let contador = 1; contador <= 25; contador += 1) {
    resultado.push(contador);
}

for (let contador = 0; contador < resultado.length; contador += 1) {
    console.log(resultado[contador] / 2)
}