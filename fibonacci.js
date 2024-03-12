function sequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let temp;
    // laço de repetição onde B vai Incrementar mas um número
    for (let i = 0; b <= numero; i++) {
        if (b === numero) {
            return true;
        }
        // A variável temp (abreviação de temporária) é utilizada neste contexto para armazenar
        temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}

// Número a ser verificado se pertence à sequência de Fibonacci
let numeroVerificar = 21;

if (sequenciaFibonacci(numeroVerificar)) {
    console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
}
