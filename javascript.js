let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

let age = 11;
console.log(age); // simple outputs 11

age = 54;
console.log(age); // what will be output now?

// Testing const variable now...
// const pi = 3.14;
// pi = 10;

// console.log(pi);

console.log((3+2)-76*(1+1))

// Exercises from TOP
// https://www.theodinproject.com/lessons/foundations-variables-and-operators
console.log("Here comes the Exercises");

// Number 1 - add 23 + 97
console.log("Exercise 1")
console.log(23 + 97)

// Number 2 - Add six numbers (?)
console.log("Exercise 2")
console.log(42 + 2 + 1 + 100 + 250 + 5)

// Number 3 - (4 + 6 + 9) / 77
console.log("Exercise 3")
console.log((4 + 6 + 9) / 77)

// Number 4 - a small sequence of tasks
console.log("Exercise 4")
let a = 10;
console.log(a);

a = 11;
console.log("Now a has:")
console.log(a);

let b = 7 * a;
console.log(b);

// Number 5 - another small sequence of tasks
console.log("Exercise 5")
const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

// Javascript.info/operators
// Additional exercises
// String concatennation
let s = "my" + "string";
console.log(s);

// Type casting
// Addition and multiplication exist within the string class, therefore the number are converted to string
console.log(1 + '2');
console.log('1' + 2);
console.log(3 + 2 + '1');
console.log(3 + '2' + 1);

// By the other hand, there aren't subtractor or division. In this case, the string is forced back to numbers.
console.log(3 - '1');
console.log(8 / '2');

// Numeric conversion, putting an + sign in from of the variable
let oranges = '2';
let apples = '3';
let x = 1;
let y = -2;

// Do not affect numbers
console.log(x)
console.log(y)
console.log(oranges);
console.log(+oranges);
console.log(+apples);
console.log(+true);
console.log(+"");

// Alternative ways
console.log("Alternative means to convert:")
console.log(+apples + +oranges);
console.log(+apples + oranges);
console.log(Number(apples) + Number(oranges));

// The assignment operator has consequences
// It stores the value on the variable and return the value!
// Example
let c = 1;
let d = 2;
console.log("let f = 3 - (c = d + 1);")
let f = 3 - (c = d + 1);
console.log(c);
console.log(f);

let a1, a2, a3;

a1 = a2 = a3 = 2 + 2;
console.log("a1 = a2 = a3 = 2 + 2;");
console.log(a1);
console.log(a2);
console.log(a3);

// Modify in place
let n = 2;
n = n + 5;
n = n ** 2;
console.log(n);
console.log("Alternativamente:")
n = 2;
n += 5;
n **= 2;
console.log(n);

// About counters, interesting behavior
let counter = 0;
counter++;
++counter;
console.log("counter")
console.log( counter ); // 2, the lines above did the same
console.log("++counter, increases and return")
console.log(++counter);
console.log("counter++, increase but return the old value")
console.log(counter++);
console.log("counter, the increase value from previous counter++")
console.log(counter)