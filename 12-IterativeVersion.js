// 1. Counting Sheep
function countSheep(num){
    for (let i=num; i>0; i--){
        if (i >=1 ){
            console.log(`${i}: Another sheep jumped over the fence!`)
        }
    }
    console.log(`0; All the sheep have jumped over the fence`)
}
// 2. Power Calculator
function powerCalc(base, exponent){
    if (exponent < 0){
        return 'exponent should be greater than 0'
    }

    let result = 1;
    for (let i=0; i<exponent; i++){
        result *= base;
    }
    return result
}

// 3. Reverse String
function reverseString(str){
    let result = "";

    while (str !== ""){
        result = str[0] + result
        str = str.slice(1);
    }
    console.log(result);
}
// 4. nth Triangular Number
// 5. String Splitter
// 6. Fibonacci
// 7. Factorial