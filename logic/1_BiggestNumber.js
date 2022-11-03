function sumFibs(num, total = [15, 1, 3]) {
    const n = total[total.length - 1] + total[total.length - 2] + total[total.length - 3];
    if (n > num) {
        return total;
    }

    total.push(n);

    return sumFibs(num, total);
}

console.log(sumFibs(21));