function solution(number) {
    let arr = [];
    let multiple = [];

    // mengubah number ke array
    for (let i = 0; i < number; i++) {
        arr.push(i);
    }

    // Case : memasukkan number kedalam array, dengan syarat kelipatan 3 atau 5    
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiple.push(i);
        }
    }

    // Jumlah total multiple array
    const sumTotal = multiple.reduce((sum, num) => sum + num, 0);

    return sumTotal;
}

// Soal:
console.log(solution(10));
console.log(solution(20));