/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
- Bonus: use somente um if. */

let numeroA = 2;
let numeroB = 4;
let numeroC = 6;

if (numeroA % 2 != 0 || numeroB % 2 != 0 || numeroC % 2 != 0) {
    console.log("true");
} else {
    console.log("false");
}