function fibonacci(limit) {
    let sequence = [0, 1];
    let i = 2;
    while (true) {
        let next = sequence[i - 1] + sequence[i - 2];
        if (next <= limit) {
            sequence.push(next);
            i++;
        } else {
            break;
        }
    }
    return sequence;
}

function isFibonacci(number) {
    let sequence = fibonacci(number);
    return sequence.includes(number);
}


const numero = 50;
if (isFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
