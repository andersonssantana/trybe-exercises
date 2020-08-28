// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] <= menorNumero) {
        menorNumero = numbers[contador];
    }
}
console.log(menorNumero);