// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 31;

if ((n > 2) && (n % 2 != 0)) {
    let asteriscos = 1;
    let espacos = n-4;
    for (let contador = 3; contador <= n; contador += 1) {
        console.log((' '.repeat(espacos))+('*'.repeat(asteriscos)));
        if (espacos <= 0) {
            break;
        }
    
        asteriscos += 2;
        espacos -= 1;
    }
    
}