// Write function avg which calculates average of numbers in given list.

function find_average(array) {
    return array.reduce((avg, int) => avg += int) / array.length
}