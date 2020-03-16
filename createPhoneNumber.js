function createPhoneNumber(numbers){
    return numbers.reduce((returnValue, num, index) => {
        if(index < 3 || (index > 3 && index < 6 ) || (index > 6 && index < 10))
        return returnValue += num
        else if(index == 3)
        return returnValue += ') ' + num
        else if(index == 6)
        return returnValue += '-' + num
    }, '(')
}