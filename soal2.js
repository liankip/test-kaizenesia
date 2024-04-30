const prompt = require("prompt-sync")();

const val = parseInt(prompt('Input: ')); // input angka

function progressive(val) {
    let result = 0

    switch (true) {
        case val >= 0 && val <= 5000:
            result += val * 0.05 // jika case range 0 - 5000 maka value dikalikan 0.05 = 5%
            break
        case val >= 5001 && val <= 10000:
            result += 5000 * 0.05 // dikenakan 0.05 = 5%
            result += (val - 5000) * 0.1 // jika case range 5001 - 10000 maka value dikalikan 0.1 = 10%
            break
        case val >= 10000 && val <= 100000:
            result += 5000 * 0.05 // dikenakan 0.05 = 5%
            result += 10000 * 0.1 // dikenakan 0.1 = 10%
            result += (val - 10000) * 0.15 // jika case range 10000 - 100000 maka value dikalikan 0.15 = 15%
            break
        case val >= 100000:
            result += 5000 * 0.05; // dikenakan 0.05 = 5%
            result += 10000 * 0.1; // dikenakan 0.1 = 10%
            result += 100000 * 0.15; // dikenakan 0.15 = 15%
            result += (val - 100000) * 0.2; // jika case range 100000 lebih maka value dikalikan 0.2 = 20%
            break
    }

    return result
}

console.log(progressive(val))