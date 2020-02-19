//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false



function isSubset(array1,sub)  {
    var newArray =[];
    for (var i=0 ; i<array1.length ; i++ ) {
        if (array1[i]===sub[i]) {
            newArray.push(array1[i])
        }
    }
   if( newArray.length>0) {
       return true
   }
   else {
       return false
   }
    
}