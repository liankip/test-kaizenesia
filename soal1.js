const prompt = require("prompt-sync")();

const val = parseInt(prompt('Input: ')); // input angka

function fibo(val) {
    var result = 0 // total fibonnaci set angka 0
    if (val === 1) {
        return [0, 1] // jika angka diinput 1 maka return [0, 1]
    } else { // Jika angka diinput melebihi 1 maka lanjut proses recursive
        result = fibo(val - 1) // mencari fibonaci sebelum nilai val dengan rekursif
        result.push(result[result.length - 1] + result[result.length - 2]); // nilai fibonaci yang didapat sebelumnya akan dihitung dan dimasukkan ke dalam array
        return result; // return nilai
    }
}

console.log(fibo(val))