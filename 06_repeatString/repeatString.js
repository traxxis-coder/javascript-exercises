const repeatString = function(str, reps) {
    if (reps < 0) {
        return "ERROR";
    }
    let result = "";
    for (let i = 0; i < reps; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
