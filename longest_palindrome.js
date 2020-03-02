longestPalindrome=function(s){
    let word = ''
    let longestWord = 0
    s.split('').forEach(letter => {
        
      if(word.length){
        if(word + letter == letter + word.split('').reverse().join('')){
          word += letter
          longestWord = word.length
        }else{
          word = ''
        }
      }else{
        word = letter
        longestWord = 1
      }
    })
    
    return longestWord
  }





console.log(longestPalindrome("a"))
console.log(longestPalindrome("aa"))
console.log(longestPalindrome("baa"))
console.log(longestPalindrome("aab"))
console.log(longestPalindrome("zyabyz"))
console.log(longestPalindrome("baabcd"))
console.log(longestPalindrome("baablkj12345432133d"))