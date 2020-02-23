//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
    let numArray = num.toString().split('')

    for(i = 0; numArray.length != 1; i++){
        let result = 1
        numArray.forEach(num => result = result * num)
        numArray = result.toString().split('')
    }
    return i
}