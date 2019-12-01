//What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// O(n) Constant time
// The algorithm multiplies a random number between 0-1 by the length of the input array
// And returns the rounded number. It doesn't matter how big the input array is, it will
// always have the same runtime.