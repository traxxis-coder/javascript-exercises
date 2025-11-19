const fibonacci = function(index) {
    const sequence = [0, 1, 1];
    if (index >= 0) {
        for (let i = 2; i < index; i++) {
            sequence.push(sequence[i] + sequence[i - 1]);
        }
        return sequence[index];
    } else {
        return "OOPS"
    }
};



// Do not edit below this line
module.exports = fibonacci;
