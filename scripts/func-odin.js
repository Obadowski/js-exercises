//Everything will be on the console

function add7(num1) {
    return num1 + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize_first(str) {
    str = str.toLowerCase();
    return str.at(0).toUpperCase() + str.slice(1);
}

function lastLetter(str) {
    return str.at(-1);
}

str1 = "HELLO WORLD!";
str2 = "BoTh";
str3 = "abcdefghi";

console.log("Capitalize first: " + capitalize_first(str1));
console.log("Capitalize first: " + capitalize_first(str2));
console.log("Capitalize first: " + capitalize_first(str3));
console.log("Last Letter: " + lastLetter(str1));
console.log("Last Letter: " + lastLetter(str2));
console.log("Last Letter: " + lastLetter(str3));
console.log("2 + 7 = " + add7(2));
console.log("2 x 5 = " + multiply(2,5));
