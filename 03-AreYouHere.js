// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// O(n^k) Polynomial Time
// The algorithm searches through two input arrays to see if
// there are matching elements from one array in the other.
// There are two levels of looping to loop through the elements
// in one array to another, so the runtime will get bigger with input size.