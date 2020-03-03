// Write a function called repeatString which repeats the given String src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let returnValue = ''
    for(let i=0; i<n; i++){
      returnValue += s
    }
    return returnValue;
}