// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let rev1 = '', rev2 = ''
    for(let i=0; i < s.length; i++){
        if(i % 2 == 0){
        rev1 += s[i].toUpperCase()
        rev2 += s[i]
        }else{
        rev1 += s[i]
        rev2 += s[i].toUpperCase()
        }
    }
    return [rev1, rev2]
};