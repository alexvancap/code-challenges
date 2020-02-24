//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    if(!Array.isArray(iterable))
        iterable = iterable.split('')
    return iterable.filter((item, index, iterable) => item != iterable[index -1])
}