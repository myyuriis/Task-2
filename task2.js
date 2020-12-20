// Talent Factory - Backend
// Task 2: Buat algoritma bebas dengan menggunakan JavaScript
// Name: Muhammad Yusril Yuriis
//
// Sieve of Eratosthenes's Algorithm
// This algorithm is used for finding prime numbers up to a given n value
// Reference: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
//
// This program consists of 3 functions:
// 1. Function createPrimeArray is used for creating an array with size n and initialize it with the value true.
// ("true" means: the array's index number is a prime number)
// 2. Function checkPrime is used for checking each index numbers whether it's prime (true) or not (false).
// 3. Function extractPrimeNumbers is used for extracting the prime index numbers (true) into another array so that it can be printed into console.

// Finding prime numbers up to n
// Change the input here:
let n = 500;

if (Number.isInteger(n)) {
    if (n < 2) {
        console.log("Invalid input: n must be greater than 1");
    } else {
        let primeNumbers = extractPrimeNumbers(checkPrime(createPrimeArray(n)));
        console.log(`The prime numbers up to ${n} are: `);
        console.log(primeNumbers.join(', '));
    }
} else {
    console.log("Invalid input: n is not an integer")
}

function createPrimeArray(upto) {
    // Creating an array and fill it with initial value true. True means the array's index number is prime.
    return new Array(upto).fill(true);
}

function checkPrime(primeArr) {
    let lengthSquareRoot = Math.sqrt(primeArr.length);

    for (let i = 0; i < lengthSquareRoot; i++) {
        if (i === 0) {
            // 0 is not prime by definition
            primeArr[i] = false;
        }
        else if (i === 1) {
            // 1 is not prime by definition
            primeArr[i] = false;
        }
        else if (primeArr[i] === true) {
            // Checking all other index numbers
            let iSquare = i*i
            for (let j = iSquare; j < primeArr.length; j = j + i ) {
                primeArr[j] = false;
            }
        }
    }

    return primeArr
}

function extractPrimeNumbers(primeArr) {
    let primeNum = []

    for (let i = 0; i < primeArr.length; i++) {
        if (primeArr[i] === true) {
            primeNum.push(i);
        }
    }

    return primeNum
}


