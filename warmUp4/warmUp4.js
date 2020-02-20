// 1-Define a function called myTrueFun that returns true whenever its called.
<<<<<<< HEAD
<<<<<<< HEAD

function myTrueFun(x) {

	return true

}

=======
function myTrueFun() {
	return true;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

function typeFunc(value) {
<<<<<<< HEAD
	var x = value
	if (typeof (x) === "string") {
		return true
	}
	else {
		return false
	}
}



// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.


function prime(number) {

	if (number === 1 || number === 2 || number === 3) {
		return "this " + number + " is prime"
	}
	else if (number % 2 !== 0 && number % 3 !== 0) {
		return "this " + number + " is prime"
	}
	else { return "this " + number + " is not prime" }
}



// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function sameValue(num1, num2) {
	if (num1 === num2) {
		return true
	}
	else {
		return false
=======
	if (typeof value === 'string') {
		return myTrueFun();
	}
	return false;

}
=======

// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
<<<<<<< HEAD
function sameValue(num1, num2) {
	if ((typeof num1 !== 'number') || (typeof num1 !== 'number')) {
		return "Please enter two numbers.";
	}
	else {
		if (num1 === num2) {
			return myTrueFun();
		}
		return !(myTrueFun());
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
	}
}
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
