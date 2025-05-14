function increaseCounterObject(objectCounter) {
  objectCounter.counter += 1;
}

function increaseCounterPrimitive(primitiveCounter) {
  primitiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);

mainContainer = document.querySelector(".main-content");
sampleParagraph = document.createElement("p");

sampleParagraph.textContent = 
    `Counter for:\n` +
    `Object: ${object.counter}\n` +
    `Primitive: ${primitive}\n`;

// This way the \n will work as line break. Alternative solution is to use innerHTML (too risky)
sampleParagraph.style.whiteSpace = "pre";

mainContainer.appendChild(sampleParagraph);

// Now some very interesting uses of map
// This function triples the number that are even within the array, then it returns the total sum of them
function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

// Let's simplify it, by using map

// One function that triples the number
function tripleNum(num) {
    return num * 3;
}

// Another one that select even number
function oddNums(num) {
    return num % 2 !== 0;
}

function sumUp(total, currentItem) {
    return total + currentItem;
}

function not(fn) {
    return function(...args) {
        return !fn(...args);
    }
}

const isEven = not(oddNums);

// Example, and map giver us back a new array!
const arr = [1, 2, 3, 4, 5];
console.log("Tripling them: " + arr.map(tripleNum));
console.log("Selecting the odd ones: " + arr.filter(oddNums));
console.log("Summing all of them: " + arr.reduce(sumUp, 0));

// The result with our big function
console.log("Function call: " + sumOfTripledEvens(arr));
const result = arr
    .filter(isEven)   // Select the even numbers
    .map(tripleNum)         // triple them
    .reduce(sumUp, 0);      // sum them

console.log("Compressed inline call: " + result);