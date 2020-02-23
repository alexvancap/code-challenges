// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    let output = true
    if ((n / x) % 1 !== 0 || (n / y) % 1 !== 0)
      output = false
    return output
  }