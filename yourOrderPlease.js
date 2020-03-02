function order(words) {
    return words.split(' ').sort((wordA, wordB) => 
        wordA.match(/\d+/) > wordB.match(/\d+/)
    ).join(' ')
}