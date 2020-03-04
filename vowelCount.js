// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return [...str].reduce((vowelCount, letter) => {
    if(vowels.find(vowel => vowel == letter))
        vowelCount += 1
    return vowelCount
    }, 0)
}