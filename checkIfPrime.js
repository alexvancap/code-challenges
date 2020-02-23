// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(number){ 
    if (number <= 1)
        return false;

    if (number <= 3)
        return true;

    if (number%2 == 0 || number%3 == 0)
        return false;

    for (var i=5; i*i<=number; i=i+6)
    {
        if (number%i == 0 || number%(i+2) == 0)
            return false;
    }

    return true;
}

