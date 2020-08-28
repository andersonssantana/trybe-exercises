/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
- Bonus: use somente um if. */

let numeroA = 3;
let numeroB = 6;
let numeroC = 9;

if (numeroA % 2 == 0 || numeroB % 2 == 0 || numeroC % 2 == 0) {
    console.log("true");
} else {
    console.log("false");
}