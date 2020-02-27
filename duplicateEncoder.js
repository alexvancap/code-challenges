function duplicateEncode(word){
    return word.toLowerCase().split('')
        .reduce((string, char, i, arr) => {
        const symbol = arr.filter(letter => letter === char).length < 2 ? '(' : ')'
        return string + symbol
    }, '')
}