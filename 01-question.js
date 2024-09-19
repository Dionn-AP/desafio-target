function fibonacci(n) {
    let fibSeq = [0, 1];
    let nextNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];

    while (nextNum <= n) {
        fibSeq.push(nextNum);
        nextNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    }

    return fibSeq;
}

function pertenceFibonacci(n) {
    const fibSeq = fibonacci(n);
    if (fibSeq.includes(n)) {
        console.log(`O número ${n} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${n} NÃO pertence à sequência de Fibonacci.`);
    }
}

const numero = 10;
pertenceFibonacci(numero);


//RESPOSTA:  91