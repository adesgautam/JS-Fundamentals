
// arrow functions (one-line functions, don't require literals)

var arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

// adding all values in array using reduce()
var total = arr.reduce( x => x+x );
console.log(total);

// squaring using map()
var square = arr.map( x => x*x );
console.log(square);

var strs = ['One', 'two', 'three', 'four'];
console.log(strs);
// calculate lengths of all elements
var lengths = strs.map( x => x.length );
console.log(lengths);

// filtering elements smaller than 3 using filter()
var smaller = arr.filter( x => x<3);
console.log(smaller);

// Square even elements and cube odd elements
var arr_mod = arr.map( x => x%2==0 ? x*x : x*x*x );
console.log(arr_mod);