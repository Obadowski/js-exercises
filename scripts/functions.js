// If else required?
function checkAge1(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Did parents allow you?');
}

age1 = 15
// checkAge1(age1);
// checkAge2(age1);

// Rewrite the function for a more concise version
function checkAge3(age) {
    return (age > 18) ? true : confirm('Did you parents allow you?');
}

function checkAge4(age) {
    return (age > 18) || confirm('Did you parents allow you? Huh!?');
}

checkAge3(age1);
checkAge4(age1);
console.log(checkAge4(20));

function min(num1, num2) {
    return (num1 <= num2) ? num1 : num2
}

console.log("min(2, 5) == 2 is " + String(min(2, 5) == 2));
console.log("min(3, -1) == -1 is " + String(min(3, -1) == -1));
console.log("min(1, 1) == 1 is " + String(min(1, 1) == 1));

/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(base, exp) {
    return base ** exp;
}

console.log("pow(3, 2) = " + String(pow(3, 2)));
console.log("pow(3, 3) = " + String(pow(3, 3)));
console.log("pow(1, 100) = " + String(pow(1, 100)));

// Create a webpage that prompts the ~poor~ user about exponentiation
let base = prompt("Base, please?", '');
let exp = prompt("Now exponent, si vous plait.", '');

alert(
    (+exp > 1) ? pow(+base, +exp) : "Invalid exponent buddy."
);
