/* 
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
 */

let palavra = "arara";
let palindrome = true;

for (let maisContador = 0; maisContador <= (palavra.length); maisContador += 1) {
    let menosContador = palavra.length-1;
    if (palavra[maisContador] != palavra[menosContador]) {
        palindrome = false;
    }
    menosContador -= 1;
    //return palindrome;
}

console.log(palindrome);


// verificaPalindrome(palavra);
    