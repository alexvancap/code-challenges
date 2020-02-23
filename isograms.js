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