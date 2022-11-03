function fibonacciRecursion(amountNumbers = 4, sequence = [1, 3]) {
    if (amountNumbers > 0) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2] + sequence[sequence.length - 3]);
        return fibonacciRecursion(amountNumbers - 1, sequence);
    }
    return sequence
}

console.log(fibonacciRecursion(2, [15, 1, 3]))