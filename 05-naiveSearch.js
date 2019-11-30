// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n) Linear Time
// The algorithm is checking to see if the item matches any element
// in the input array.  The run time is proportional to the size
// of the array because it is checking each array element individually.