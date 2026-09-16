// Jag använder let för att kunna skapa en variabel, en behållare för ett värde som jag kan ändra, i detta fallet rad. 
// Jag använder while för att säga till att så länge koden är under 8 tecken fortsätt, när den är på väg mot 8 tecken, stanna.
// Console log så att den skriver ut det i webbläsarens konsol
// Rad = rad + # skriver jag så att koden förstår att den ska lägga till # i strängen inför nästa runda.

let rad = "#";
while (rad.length <= 7) {
  console.log(rad);
  rad = rad + "#";
}