const reverseWord = str => str.split(" ").map(word => word.split("").reverse().join('')).join(" ")

const sentence = "I am A Great human";

const output = {
    [sentence]: reverseWord(sentence)
}

console.log(output);