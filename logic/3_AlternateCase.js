function isUpperCase(c) {
    return c >= 65 && c <= 90;
}

// masukkan nilai string awal:
var string = "Hallo World";

// proses transformasi string/ alternate case:
var alternateCase = string.split("").map(c => isUpperCase(c.charCodeAt(0)) ? c.toLowerCase() : c.toUpperCase()).join("");

console.log("String awal : " + string);
console.log("Hasil Transformasi : " + alternateCase);