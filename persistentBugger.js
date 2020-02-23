function persistence(num) {
    let numArray = num.toString().split('')

    for(i = 0; numArray.length != 1; i++){
        let result = 1
        numArray.forEach(num => result = result * num)
        numArray = result.toString().split('')
    }
    return i
}