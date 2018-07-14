
// Check string starts with same vowel 
let re = /^([aeiou]).*\1$/;
var str = 'aewxyzae';

console.log(re.test(str));


// Match string starting with Mr. Mrs. Ms. Dr. Er. followed with a-z or A-Z
let re1 = /^(Mr|Mrs|Ms|Dr|Er)\.\w+$/;
var str = 'Dr.#Abuerbuebe veA';

console.log(re1.test(str));