const palindromes = function (str) {
    const noPunctuation = str
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll("!", "")
        .replaceAll(" ", "")
        .toLowerCase()
        .split("");
    const noPunctuationReverse = noPunctuation.toReversed();
    return noPunctuation.toString() == noPunctuationReverse.toString();
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
