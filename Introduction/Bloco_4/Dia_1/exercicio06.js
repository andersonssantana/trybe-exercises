/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
- Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
- Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
- Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
- Exemplo: bishop -> diagonals */

let chessPiece = "RAINHA";
chessPiece = chessPiece.toLowerCase();

if (chessPiece == "peão") {
    console.log("O peão se movimenta para a frente.");
} else if (chessPiece == "cavalo") {
    console.log("O cavalo se movimenta em L.");
} else if (chessPiece == "bispo") {
    console.log("O bispo se movimenta na diagonal.");
} else if (chessPiece == "torre") {
    console.log("A torre se movimenta na horizontal ou vertical.");
} else if (chessPiece == "rei") {
    console.log("O rei se movimenta em qualquer direção, uma casa por vez.");
} else if (chessPiece == "rainha") {
    console.log("A rainha se movimenta em qualquer direção.");
} else  {
    console.log("Erro: não reconhecemos a sua peça :(");
} 

