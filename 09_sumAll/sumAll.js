const sumAll = function(a, b) {
    let result = 0;
    if (a < 0 || b < 0 || a % 1 || b % 1 || Number(a) !== a || Number(b) !== b) {
        return "ERROR";
    }
    if (a < b) {
        for (let i = a; i <= b; i++) {
            result += i;
        }
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
            result += i;
        }
    } else {
        result = a;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
