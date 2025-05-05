console.log("Conditionals");
console.log("Exercise 1");
console.log( null || 2 || undefined);
// OR (||) seeks the first truthy value

console.log("Exercise 2")
console.log(alert(1) || 2 || alert(3));
// alert(1) returns undefined
// 2 is a true value, therefore the value does not reach alert(3)

console.log("Exercise 3");
console.log(1 && null && 2);
// AND (&&) seeks the first false value

console.log("Exercise 4");
console.log( alert(1) && alert(2));
// Call to alert returns undefined, therefore alert(1) gives false and the evaluatio stops then.

console.log("Exercise 5");
console.log(null || 2 && 3 || 4);
// The precedence of execution is given to the AND (&&)
// 2 && 3 is solved as 3;
// null || 3 || 4 is solved as 3. As is the first truthy value.

console.log("Exercise 6");
console.log("Write an if statemente that checks if a given age is within the range of 14 up to 99, inclusively");
let age = 30

if (age >= 14 && age <= 99) {
    console.log("The age is " + age + ". And this, within the range.")
}
else {
    console.log("Sorry. The age of " + age + " is outside of the bounds.")
}

console.log("Exercise 7")
if (-1 || 0) console.log("First");
if (-1 && 0) console.log("Second");
if (null || -1 && 1) console.log("Third");

/*
The result of -1 || 0 is -1. Thus, truth!
The result of -1 AND 0 is 0, Thus, false, if does not run.
The result of null || -1 && 1
    null || 1
    1
    Thus, trute, then the if runs.
*/

// A code calling for a password... Amazing. Let's try it!
let userName = prompt("Who's there?", '');

if (userName === "Admin") {
    let pass = prompt("Password?", '');

    if (pass === "TheMaster") {
        const welcome = "Welcome Master!";
        alert(welcome);
        console.log(welcome);
    } else if (pass === '' || pass === null) {
        const cancel = "canceled!";
        alert(cancel);
        console.log(cancel);
    } else {
        const wrong = "Wrong!"
        alert(wrong);
        console.log(wrong);
    }
} else if (userName === '' || userName === null){
    alert("Nevermind");
    console.log("Nevermind");
} else {
    alert("Sorry, but I do not know you. Bye");
    console.log("Sorry, but I do not know you.");
}