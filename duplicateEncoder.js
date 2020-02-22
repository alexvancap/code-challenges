function duplicateEncode(word){
    const letterArray = word.toLowerCase().split('')
    const destructiveLetterArray = letterArray
    let duplicates = []
    let output = ''
    while(destructiveLetterArray){
        console.log(destructiveLetterArray[0])
        const handelingLetter = destructiveLetterArray[0]
        destructiveLetterArray.shift()
        if(destructiveLetterArray.includes(handelingLetter)){
            duplicates.push(handelingLetter)
        }
    }
    letterArray.forEach(letter => {
        if (duplicates.includes(letter)) 
            return output = output + ')'
        return output = output + '('
    })
    return output
}


console.log(duplicateEncode("din"),"(((")
console.log(duplicateEncode("recede"),"()()()")
console.log(duplicateEncode("Success"),")())())","should ignore case")
console.log(duplicateEncode("(( @"),"))((")