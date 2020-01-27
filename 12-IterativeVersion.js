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
function triangularNumber(num){
    let result = 0;
    
    for (let i=0; i<num; i++){
        result += (i+1)
        console.log(result)
    }
}
//triangularNumber(10)

// 5. String Splitter
function stringSplitter(str, separator){
    let results = []
    let temp = []

    for (let i=0; i<str.length; i++){
        if (str[i] !== separator){
            temp.push(str[i])
        } else {
            results.push(temp.join(''))
            temp = []
        }

        if (i === str.length-1){
            results.push(temp.join(''))
        }
    }
    console.log(results)
}
stringSplitter("02/20/2020", "/")

// 6. Fibonacci
function fibonacci(num){
    let a = 0;
    let b = 1;
    let temp = 1;

    for(let i=0; i<=num; i++){
        temp = a + b;
        a = b;
        b = temp;

        console.log(temp)
    }
}
//fibonacci(10)

// 7. Factorial
function factorial(num){
    let result = 1;
    for (let i=num; i>0; i--){
        result *= i
    }
    console.log(result)
}
//factorial(5)