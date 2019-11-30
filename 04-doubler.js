//What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// O(n) Linear Time
// The algorithm is taking each element and multiplying it by 2
// The running time is proportional to the size of the input array.
// An input array that is twice as large, will take twice as long to process.
