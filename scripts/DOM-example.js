/*
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:
    * a <p> with red text that says “Hey I’m red!”
    * an <h3> with blue text that says “I’m a blue h3!”
    * a <div> with a black border and pink background color with the following elements inside of it: 
        * another <h1> that says “I’m in a div”
        * a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

const container = document.querySelector("#container");

/*
// Example from TOP
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";
container.appendChild(content);
*/

// Actual coding for the exercise
const paragraphRedText = document.createElement("p");
const h3BlueText = document.createElement("h3");
const divBlackBorder = document.createElement("div");
const h1Div = document.createElement("h1");
const paragraphMeToo = document.createElement("p");

paragraphRedText.textContent = "Hey, I'm red!";
paragraphRedText.style.color = "red";

h3BlueText.textContent = "I'm a blue h3!";
h3BlueText.style.color = "Blue";

h1Div.textContent = "I'm a h1 inside a div"
paragraphMeToo.textContent = "ME TOO!";

divBlackBorder.style.border = "2px solid Black";
divBlackBorder.style.backgroundColor = "pink";

// Appending h1 and pMeToo to divBlackBorder
divBlackBorder.appendChild(h1Div);
divBlackBorder.appendChild(paragraphMeToo);

// Appending within the div #container
container.appendChild(h3BlueText);
container.appendChild(paragraphRedText); 
container.appendChild(divBlackBorder);