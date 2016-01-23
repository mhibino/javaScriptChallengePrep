
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

//1. Generate nth prime number
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


// 2. Generate prime numbers up to number n
function primesToN(n) {
	var result = [];
	for (var i = 2; i <= n; i++) {
		if (testPrime(i)) {
			result.push(i);
		}
	}
	return result;
}

// fibonacci [0, 1, 1, 2, 3, 5, 8...]
function fibonacciGenerator(n) {
	var result = [0, 1];
	var sum;
	var a = 0;
	var b = 1;
	var next = a + b;

	if (n <= 0) {
		return [];
	} else if (n === 1) {
		return [0];
	} else {
		for(var i = 1; i <= n-2; i++) {
			sum = a + b;
			result.push(sum);
			a = b;
			b = sum;
		}
		
	}
	return result;
}

fibonacciGenerator(4); // [0, 1, 1, 2]


// Generate fibonacci numbers up to number n
function fibonacciToN(n) {
	var result = [0, 1, 1];
	var a = 1;
	var b = 1;
	var sum = -1;
	if (n < 0) {
		return [];
	} else if (n === 0) {
		return [0];
	} else if (n === 1) {
		return [0, 1, 1];
	} else {
		while (sum <= n) {
			sum = a + b;
			if (sum <= n) {
				result.push(sum);
			}
			a = b;
			b = sum;
		}
	}
	return result;
}









