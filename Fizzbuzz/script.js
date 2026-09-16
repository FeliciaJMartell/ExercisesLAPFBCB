// Jag använder let för att kunna skapa en variabel, en behållare för ett värde som jag kan ändra, i detta fallet number. 
// Jag använder while för att säga till att så länge koden är under 101 tal fortsätt, när den är på väg mot 101 tal, stanna.
// Console log så att den skriver ut det i webbläsarens konsol
// number = number + 1 skriver jag så att koden förstår att den ska lägga till + 1 i nästa tal.

// Jag använder number % 3 för att säga till datorn så länge resten blir 0 när det delas på 3 så ska det stå fizz och 
// likadant på number % 5 fast då ska datorn skriva ut buzz. === säger likamed
// Jag säger även till datorn att om talet kan delas på både 3 och 5 så ska den skriva ut Fizzbuzz, så på tex 15, 30 osv. && betyder 
// att båda villkoren måste vara sanna. 
// Jag lägger även dom i ordningen under så att datorn kollar om det är delbart på både 3 och 5, innan den går vidare. 
// hade jag inte lagt det så, så hade det blivit fel då datorn kollar villkoren uppifrån och ner. 

let number = 1;
while (number <= 100) {

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }

    number = number + 1;
}


