// Masukkan nilai array awal:
const nilai = [16, 17, 4, 3, 5, 2];

function productArray(arr) {
    return arr.map(item => {
        return arr.reduce((result, num) => {
            if (num !== item) {
                result = result * num;
            }
            return result;
        }, 1)
    });
}

console.log(productArray(nilai));