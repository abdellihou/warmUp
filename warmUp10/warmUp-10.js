// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

<<<<<<< HEAD
<<<<<<< HEAD
function reverseStr(str) {
    var newStr = ""
    var i = 0;
    while (i < str.length) {
        newStr[i] = str[str.length - (i + 1)]
        i++
    }
    return newStr;
}

=======
function reverseStr(string) {
    var str = "";
    var i = 1;

    while (i <= string.length + 1) {
        str = str + string.slice(string.length - 1) + i;
        string = string.slice(0, string.length - 1);
        i++;
    }
    return str;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

<<<<<<< HEAD

function sameLength(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + 1) {
        for (var j = array.length; j >= 0; j = j - 1) {
            if (array[i] === array[j]) {
                newArray.push(array[i])
            }
        }
    }
    return newArray
=======
function sameLength(arrayOfStrings) {
    var arraySameLength = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length === arrayOfStrings[i + 1].length) {
            arraySameLength.push(arrayOfStrings[i], arrayOfStrings[i + 1]);
        }
    }
    return arraySameLength;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
=======

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
