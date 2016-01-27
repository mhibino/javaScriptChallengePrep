
// CHALLENGE A: PRIME NUMBER FUNCTIONS:

// PRIME 1: Prime Number Tester (and Helper Function)
function testPrime(num) {
	if (num === 1) {
		return false;
	}
	for (var i = 2; i < num/2; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

// PRIME 2: Prime Number Generator: Generate n number of prime number outputs
function primeGenerator(n) {
	var result = [];
	var counter = 2;
	
	while (result.length < n) {
		if (testPrime(counter)) {
			result.push(counter);
		}
		counter++;
	}
	return result;
}

// PRIME 3: Generate prime numbers up to number n (inclusive)
function primesToN(n) {
	var result = [];
	for (var i = 2; i <= n; i++) {
		if (testPrime(i)) {
			result.push(i);
		}
	}
	return result;
}


/*
________________________________________________________________
________________________________________________________________
*/


// CHALLENGE B: FIBONACCI SEQUENCE: [0, 1, 1, 2, 3, 5, 8...]

// Fibonacci Challenge 1: 
// Create function fibGen(n) that takes input n, and outputs fibonacci sequence that is n integers long
function fibGen(n) {
    var fibSeq = [];
    var a = 0;
    var b = 1;
    var c = 1;
    for (var i = 1; i <= n; i++) {
        fibSeq.push(a);
        a = b;
        b = c;
        c = a + b;
    }
    return fibSeq;
}
// Test Cases for fibGen()
console.log(fibGen(-1)); // Returns []
console.log(fibGen(0)); // Returns []
console.log(fibGen(1)); // Returns [ 0 ]
console.log(fibGen(2)); // Returns [ 0, 1 ]
console.log(fibGen(5)); // Returns [ 0, 1, 1, 2, 3 ]
console.log(fibGen(10)); // Returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(fibGen(15)); // Returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ]

// Fibonacci Challenge 2: 
// Create function fibonacciToN(n) that generates fibonacci sequence up to number n (inclusive)
function fibToN(n) {
    var fibSeq = [];
    var a = 0;
    var b = 1;
    var c = 1;
    while (a <= n) {
        fibSeq.push(a);
        a = b;
        b = c;
        c = a + b;
    }
    return fibSeq;
}
// Test Cases for fibToN()
console.log(fibToN(-1)); // Returns []
console.log(fibToN(0)); // Returns [ 0 ]
console.log(fibToN(1)); // Returns [ 0, 1, 1 ]
console.log(fibToN(2)); // Returns [ 0, 1, 1, 2 ]
console.log(fibToN(5)); // Returns [ 0, 1, 1, 2, 3, 5 ]
console.log(fibToN(10)); // Returns [ 0, 1, 1, 2, 3, 5, 8 ]
console.log(fibToN(100)); // Returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]


// LINK TO Fibonacci Code (which includes earlier attempt alongside Refactored Code): https://repl.it/BgZS/4




