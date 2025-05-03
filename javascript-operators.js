console.log("First Exercise");
let a = 1, b = 1;
let c = ++a; // c = 2
let d = b++; // d = 1

// Verifying
console.log(c);
console.log(d);

// let a = 2;
console.log("Second, 'a' and 'x' values?")
a = 2;
let x = 1 + (a *= 2);
// a = 4
// x = 5
console.log(a);
console.log(x);

console.log("Third exercise");
console.log("" + 1 + 0);        // "10"
console.log("" - 1 + 0);        // -1
console.log(true + false);      // 1
console.log(6 / "3");           // 2
console.log("2" * "3");         // 6
console.log(4 + 5 + "px");      // "45px"
console.log("$" + 4 + 5);       // $45
console.log("4" - 2);           // 2
console.log("4px" - 2);         // null (!)
console.log("  -9  " + 5);      // "  -9   5"
console.log("  -9  " - 5);      // -14
console.log(null + 1);          // 1
console.log(undefined + 1);     // null
console.log(" \t \n" - 2);      // -2