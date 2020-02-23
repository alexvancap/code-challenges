//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
    let letters = str.toLowerCase().split('')
    let output = true

    while(letters.length !== 0){
        const checkingLetter = letters[0]
        letters.shift()
        if(letters.includes(checkingLetter)) output = false
    }
    return output
}