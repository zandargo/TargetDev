// Verificar se pertence à sequência de Fibonacci
function isFibonacci(num) {
    if (num < 0) return false;
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num || num === 0;
}

// Número a ser verificado
const numberToCheck = 34;

// Verificando se o número pertence à sequência de Fibonacci
if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
