// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let wordArray = str.split(' ')
    return wordArray.map(word => {
        if(word.match(/[a-z]/i)){
        word = word + word[0] + 'ay'
        return word.slice(1)
        }
        return word
    }).join(' ')
}