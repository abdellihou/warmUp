<<<<<<< HEAD
 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24

 function mult(n) {
    var result=1;
    for(var i=1 ; i<n ; i++) {
    result=result*(i+1);
    }
    return result;
=======
// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
//starting from 0, e.g.:
mult(3); // => 6
mult(4); // => 24
function mult(n) {
    var multp = 1;

    while (n >= 1) {
        multp = multp * n;
        n = n - 1;
    }
    return multp;
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
}
//this function uses a counter i to iterate through 1 to n and stock the result (multiplication i by i+1) into the variable result

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

<<<<<<< HEAD
function string (n) {
    var str="";
    var i=1;
    while (i<=n) {
        str=str+i+i
        i++
    }
    return str
}

//this function iterate from 1 to n and stock  the counter twice in a new string
=======
function stringNumbers(n) {
    var str = "1";
    var x = 2;
    while (x <= n) {
        str = str + " " + x + " " + x;
        x = x + 1;
    }
    return str
}
>>>>>>> 2b098376bbe5f40b97b1dad225ca4eb6a867d63d
