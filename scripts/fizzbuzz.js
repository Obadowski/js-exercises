/* FizzBuzz Problem

Players generally sit in a circle. The player designated to go first says the number "one", and the players then count upwards in turn. However, any number divisible by three is replaced by the word fizz and any number divisible by five is replaced by the word buzz. Numbers divisible by both three and five (i.e. divisible by fifteen) become fizz buzz. A player who hesitates or makes a mistake is eliminated.
*/
function FizzBuzz(num1){

    let full_sequence = "";
    for (let i = 1; i <= num1 ; i++){
        // Start with a clean string
        answer = ""
        // Adds Fizz if a number is divisible by 3
        if ((i % 3) == 0) answer += "Fizz";
        // Adds Buzz if a number is divisible by 5  
        if ((i % 5) == 0) answer += "Buzz";
        // If not %3 nor %5, just write down the number
        if (answer === "") answer = i;
        // Update the sequence
        full_sequence += String(answer) + ", ";
    }
    
    return full_sequence;
}

let num1 = parseInt(prompt("Informe um número."),"");
console.log(FizzBuzz(num1));