// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let soma = 0;
    
    for (let contador = 0; contador < numbers.length; contador += 1) {
        soma = soma + numbers[contador];
    }
    if ((soma / numbers.length) > 20) {
        console.log("valor maior que 20")
    } else {
        console.log("valor menor ou igual a 20")
    }

/* 
1. Adicionar o array
2. Declarar a variável que vai conter a soma, com o valor 0;
3. Percorrer o array;
4. Verificar o valor em cada posição percorrida e somá-lo à variável de soma;
5. Se a soma for maior que 20, imprimir a mensagem "Valor maior que 20"
6. Se a soma for menor que 20, imprimir a mensagem "Valor menor que 20"
*/