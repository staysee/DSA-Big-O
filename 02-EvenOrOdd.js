//What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}

// O(1) Constant time
// No matter what the input is, it is performaing a
// basic arithmetic operation to check if the input is
// an even or odd number