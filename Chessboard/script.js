// jag använde let size för att säga hur stort mitt schackbräde ska vara. Jag använder sedan let resultat för att samla allt innan
// jag skickar ut det. Så let resultat är som en låda där allt läggs tills let size är klart. I detta fall 8 rader.
// let rad betyder börja på 0 och gör rader uppifrån och ner tills du har let size, vilket är 8 rader.
// sedan kommer vi till om det ska vara mellanslag eller #.
// let kolumn säger gör kolumner från vänster till höger tills du nå let size, 8 kolumner.
// if säger när rad och kolumn inte får något över när du delat på 2 gör ett mellanslag 
// else säger, om if inte är korrekt gör ett #.
// kolumn = kolumn + 1 säger flytta ett steg till höger
// resultat = resultatet + "\n" säger gör ett nedhopp 
// rad = rad + 1; säger flytta ett steg nedåt
// console log skriver ut resultatet.


let size = 8;
let resultat = "";

let rad = 0;
while (rad < size) {



    let kolumn = 0;
    while (kolumn < size) {

        if ((rad + kolumn) % 2 === 0) {
            resultat = resultat + " ";
        } else {
            resultat = resultat + "#";
        }
        kolumn = kolumn + 1;
    }


    
    resultat = resultat + "\n";
    rad = rad + 1;
}

console.log(resultat);


