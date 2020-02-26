// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

String.prototype.camelCase=function(){
    const wordArray = this.split(' ')
    for (let i = 0; i < wordArray.length; i++){
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
    }
    return wordArray.join('')
}