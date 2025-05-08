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


const btnEventListener = document.querySelector("#btnEventListener");
btnEventListener.addEventListener("click", function(e) {
    color = e.target.style.background;
    e.target.style.background = "blue";
    if (color === "blue") {
        e.target.style.background = "green";
    } else {
        e.target.style.background = "blue";
    }
    console.log(e.target);
})

// It is possible to add several alerts to a group of buttons, using the forEach function
const buttons = document.querySelectorAll("button");

// We use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', function(e) {
        e.target.style.color = "blue";
    });
})
/*
footer comment:
    - these buttons already had event. It is possible to add more over the other already in place.
    - Despite being possible is not something truly adequate to do that. Turns the code confused and a messy. Suppose that I have to find every
    instance of when I set an EventListener for same thing. That will become completely madness.
        - Thus, this was done just for the sake of practicing function and its declarion
        - Qui scribit, bis legit
*/