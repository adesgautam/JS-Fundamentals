
// Template literals 
// ` or back-tick is used as for wrapping template literals
// ${expression} is used for using expression in template literals

var a = 5;
var b = 10;
var sum = a+b;
// Using normal strings
console.log('Sum of ' + a + ' and ' + b + ' is '+ sum);

//Using template literals
console.log(`Sum of ${a} and ${b} is ${a+b}`); //Clean

// Or doing multi line printing
console.log('First Line\nSecond Line'); // Using normal strings
console.log(`First Line
Second Line`);  // Using Template literals

// Tagged template literals

function apple(strings, ...values){
    console.log(strings[0], values[0]);
    console.log(strings[1], values[1]);
    console.log(strings[2], values[2]);
}
// strings contains "Apple" and values contain the tagged expressions
apple`Apple ${1} Apple ${2} Apple ${3}`;