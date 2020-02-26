// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.


function alphabetPosition(text) {
    const filteredText =  [...text].filter(letter => letter.match(/[a-z]/i))
    return filteredText.map(letter => {
        if (letter.match(/[a-z]/i) && letter.trim())
        return letter.toLowerCase().charCodeAt(0) - 96
    }).join(' ')
}