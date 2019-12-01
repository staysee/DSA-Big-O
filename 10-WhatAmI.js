//What does the following algorithm do? 
//What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

// O(n) Linear Time
// This algorithm determines if an input number is a prime number.
// First it checks if the number is less than 2 or a decimal (these are not primes).
// Then it checks if the number can be divided by numbers between 2 to the input number.
// If the numbers evenly divide into the input number, it is not a prime number.
// If it can't divide evenly, then it is a prime.
// This has a linear time complexity because the larger the number, the more numbers it will
// need to check to see if it is a prime.