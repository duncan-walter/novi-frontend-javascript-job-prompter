// Opdracht 1a: Log het aantal medewerkers van de sales-afdeling in de console, in het volgende format: "De afdeling Sales heeft [x] medewerkers"
console.log(`De afdeling Sales heeft ${departments.sales.numberOfEmployees} medewerkers.`);

// Opdracht 1b: Log de afdeling-beschrijving van de marketingafdeling in de console, in het volgende format: " Marketing is een leuke afdeling om te werken. [beschrijving]."
console.log(`Marketing is een leuke afdeling om te werken. ${departments.marketing.description}.`);

// Opdracht 1c: Log het aantal medewerkers van de customer-service-afdeling in de console, in het volgende format: "De afdeling Customer Service heeft [aantal] medewerkers" Let op: er is iets raars aan de hand met deze property!
console.log(`De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers.`);

// Opdracht 1d: Log de beschrijving van de functie "Verkoopmanager" in de console, in het volgende format: "Sales is een uitdagende afdeling om te werken als Verkoopmanager. [beschrijving functie Verkoopmanager]"
console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${departments.sales.jobs[1].description}.`);


// Opdracht 2a: Gebruik bovenstaand voorbeeld en pas het zo aan dat de browser jou de volgende vraag stelt: Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]. Het antwoord dat jij invoert, log je uiteraard in de console. Tip: geef jouw input-prompt altijd in kleine letters ("marketing" in plaats van "Marketing" of "MARKETING"), dit voorkomt problemen in het script.
const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]").toLowerCase();
console.log(userInput);

// Opdracht 2b: tijd voor het echte werk! Op basis van wat de gebruiker invoert ("marketing", "sales" of "customer service") willen wij een beschrijving van die afdeling in de console loggen. Hiervoor typ je natuurlijk niet handmatig de beschrijvingen over! Je spreekt ze aan via het departments-object: hiervoor zul je dus een beslissingsstructuur moeten bouwen. Ongeacht de gekozen afdeling, log je de uitkomst in het volgende format: "Je koos [ingevoerde keuze]. [beschrijving afdeling]"
// Opdracht 2c: test of alles werkt door alle mogelijke afdelingen een keertje te voeren en te checken of je de gewenste output krijgt. Maak jouw beslisboom nu extra gebruiksvriendelijk door de melding "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen." in de console te laten zien wanneer de gebruiker een spelfout maakt of iets verkeerds invoert. Tip: je kunt hiervoor console.error() gebruiken in plaats van console.log().
switch (userInput) {
    case "marketing":
    case "sales":
    case "customer-service":
        console.log(`Je koos ${userInput}. ${departments[userInput].description}`);
        break;
    default:
        console.error("Ongeldige keuze.");
        break;
}