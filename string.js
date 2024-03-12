function inverterString(str) {
    let inverted = '';
    // Lup de repetição onde vai percorrer a string, com o tamanho dela
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    //retorna a variavel 
    return inverted;
}

// String a ser invertida
let minhaString = 'Olá, Mundo';

// Inverter a string
let stringInvertida = inverterString(minhaString);

// Exibir a string invertida
console.log("String invertida = " + stringInvertida); // Saída: '!dlrow ,olleH'
