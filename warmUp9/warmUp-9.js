// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

<<<<<<< HEAD
<<<<<<< HEAD

var arrayFemales = ["Siwar", "Nouha"];
var arrayMales = ["Omar", "Taha", "Houssem", "Me"];
var arrayInstructors = ["Hadhemy", "Walid", "Cassels", "Seif", "Matt"];


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.


function middleArray(array) {
    var x = array.length;

    if (x % 2 !== 0) {
        return array[Math.floor((x / 2))];
    }
    else {
        return "the array must have an odd number of elements"
    }
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function changeEvenIndexes(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + 1) {
        if (i % 2 === 0) {
            newArray.push(array[i] * 2);
        }
    }
    return newArray;
}
=======
var arrayFemales = ['Siwar', 'Nouha'];
var arrayMales = ['Houss1', 'Houss2', 'Omar', 'Taha', '..........'];
var arrayInstructors = ['Matt', 'Cassels', 'Walid'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middleArray(array) {
    if (array.length % 2 !== 0) {
        return array[(Math.floor(array.length / 2))];
    }
    else {
        return "Enter an array with an odd length."
    }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function doubledEvenIndexes(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            arr.push(array[i] * 2);
        }
    }
    return arr;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
