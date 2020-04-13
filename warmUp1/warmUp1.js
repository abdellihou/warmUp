// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.
// your code is here




//1
function fullName (firstName , lastName) {
	return firstName + " " + lastName
}
//2
function multipleOrNot (number) {
	if (x%3===0) {
		return x + " is a multiple of 3"
	}
	else return x + " is not a multiple of 3"
}
//3
function average (array) {
	var averageAge = 0;
	for (var i=0 ; i<array.length; i++) {
		averageAge= averageAge + array[i]/array.length
	}
	return averageAge
}
//4
function calculateAgeInSeconds (ageInYears) {
	return "your age in seconds is " + ageInYears*365.25*24*60*60
}



