
// Check string starts with same vowel 
let re = /^([aeiou]).*\1$/;
var str = 'aewxyzae';

console.log(re.test(str));


// Match string starting with Mr. Mrs. Ms. Dr. Er. followed with a-z or A-Z
let re1 = /^(Mr|Mrs|Ms|Dr|Er)\.\w+$/;
var str = 'Dr.#Abuerbuebe veA';

console.log(re1.test(str));

// Match digits
let re = /\d+/g;
var str = '102, 1948948 and 1.3 and 4.5';

const res = str.match(re);
for (const e of res) {
    console.log(e);
}
