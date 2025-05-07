/* 
Javascript and Listeners
    - The first button is directly written on the HTML (awful, IMHO);
    - The second one is the secondButton, using the selector btn
    - The third one is the thirdButton, using the selector btn2

    Yes, I know that the id are not verbose, but it is an example. And it fits the purpose, for now, of course.
*/
const secondButton = document.querySelector("#btn");
secondButton.onclick = () => alert("Hello World");


const thirdButton = document.querySelector("#btn2");
thirdButton.addEventListener("click", () => {
  alert("Hello World");
});

// Method 1
// Named function
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btnNamedFunctionMethod2 = document.querySelector("#btnNamedFunctionMethod2");
// Method 2
btnNamedFunctionMethod2.onclick = alertFunction;

/*
Method 3
    Personally I like this last one, because it is clearer than the other.
    - The first one is interesting for simple stuff. But can lead to serious mismanagement of files.
    - The second one is simpler. But simple I don't like it. I don't like to assign function as variables, I find it confusing to read.
    
    Disclaimer: I guess this is a bad habit that I have... 
*/
const btnNamedFunctionMethod3 = document.querySelector("#btnNamedFunctionMethod3");
btnNamedFunctionMethod3.addEventListener(
    "click",
    alertFunction
);

