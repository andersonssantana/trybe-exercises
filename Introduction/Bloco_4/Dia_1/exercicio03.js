/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */

let a = 15;
let b = 50;
let c = 80;

if (a >= b && a >= c ) {
    console.log(a);
} else if (b >= a && b >= c) {
    console.log(b);
} else {
    console.log(c);
}