//In this example, we return to the problem of searching using 
//a more sophisticated approach than in naive search, above.
//Assume that the input array is always sorted. What is the 
//Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// O(log(n)) Logarithmic Time
// The algorithm searches the input array for the input item and returns 
// the index at which that item is found. If the item is not found within the array,
// a -1 will be returned. The algorithm searches for the item by using the array's
// max and min which helps to cut the problem in half.