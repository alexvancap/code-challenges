//Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    const wordArray = s.split(' ')
    let shortestLength = wordArray[0].length

    wordArray.forEach(word => {

        if(word.length < shortestLength)
        shortestLength = word.length
    })
        
    return shortestLength
}