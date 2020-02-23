// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    numbers = numbers.split(' ')
    return Math.max.apply( Math, numbers ) + ' ' + Math.min.apply( Math, numbers )
}