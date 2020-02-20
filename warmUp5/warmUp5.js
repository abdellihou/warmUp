// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD

// when 5 is inferior than 7 we choose <



=======
// The correct comparison operator to display "true", when: 5 is less than 7 is: <:
<<<<<<< HEAD
5 < 7;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======

>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
<<<<<<< HEAD
//    helloWorld('') ==> 'Hello, World'      

function helloWorld(language) {
    if (language === "fr") {
        return "Bonjour tout le monde";
    }
    else if (language === "es") {
        return "Hola, Mundo";
    }
    else {
        return "hello world";
    }
}

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]


function reverse(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i = i - 1) {
        newArray.push(array[i])
    }
    return newArray;
}













=======
//    helloWorld('') ==> 'Hello, World'

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
<<<<<<< HEAD

function reverseArray(array) {
    var arr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    return arr;
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
=======
>>>>>>> b8a430e8ea2c4d0e1e78f81ef8a28a628ba965c6
