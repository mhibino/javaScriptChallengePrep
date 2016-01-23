
//1. Generate nth prime number
function primeGenerator(n) {
	var result = [];
	var counter = 2;
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

	while (result.length < n) {
		if (testPrime(counter)) {
			result.push(counter);
		}
		counter++;
	}
	return result;
}


// 2. Generate prime numbers up to n





