// Opdracht 1a: Log het aantal medewerkers van de sales-afdeling in de console, in het volgende format: "De afdeling Sales heeft [x] medewerkers"
console.log(`De afdeling Sales heeft ${departments.sales.numberOfEmployees} medewerkers.`);

// Opdracht 1b: Log de afdeling-beschrijving van de marketingafdeling in de console, in het volgende format: " Marketing is een leuke afdeling om te werken. [beschrijving]."
console.log(`Marketing is een leuke afdeling om te werken. ${departments.marketing.description}.`);

// Opdracht 1c: Log het aantal medewerkers van de customer-service-afdeling in de console, in het volgende format: "De afdeling Customer Service heeft [aantal] medewerkers" Let op: er is iets raars aan de hand met deze property!
console.log(`De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers.`);

// Opdracht 1d: Log de beschrijving van de functie "Verkoopmanager" in de console, in het volgende format: "Sales is een uitdagende afdeling om te werken als Verkoopmanager. [beschrijving functie Verkoopmanager]"
console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${departments.sales.jobs[1].description}.`);


// Opdracht 2a: Gebruik bovenstaand voorbeeld en pas het zo aan dat de browser jou de volgende vraag stelt: Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]. Het antwoord dat jij invoert, log je uiteraard in de console. Tip: geef jouw input-prompt altijd in kleine letters ("marketing" in plaats van "Marketing" of "MARKETING"), dit voorkomt problemen in het script.
const userDepartmentInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]").toLowerCase();
console.log(userDepartmentInput);

// Opdracht 2b: tijd voor het echte werk! Op basis van wat de gebruiker invoert ("marketing", "sales" of "customer service") willen wij een beschrijving van die afdeling in de console loggen. Hiervoor typ je natuurlijk niet handmatig de beschrijvingen over! Je spreekt ze aan via het departments-object: hiervoor zul je dus een beslissingsstructuur moeten bouwen. Ongeacht de gekozen afdeling, log je de uitkomst in het volgende format: "Je koos [ingevoerde keuze]. [beschrijving afdeling]"
// Opdracht 2c: test of alles werkt door alle mogelijke afdelingen een keertje te voeren en te checken of je de gewenste output krijgt. Maak jouw beslisboom nu extra gebruiksvriendelijk door de melding "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen." in de console te laten zien wanneer de gebruiker een spelfout maakt of iets verkeerds invoert. Tip: je kunt hiervoor console.error() gebruiken in plaats van console.log().
switch (userDepartmentInput) {
    case "marketing":
    case "sales":
    case "customer-service":
        console.log(`${userDepartmentInput} is een leuke afdeling om te werken. Er werken op dit moment ${departments[userDepartmentInput].numberOfEmployees} medewerkers.`);
        break;
    default:
        console.error("Ongeldige keuze.");
        break;
}

// Opdracht 3a: We gaan er voor nu even vanuit dat de gebruiker de afdeling 'marketing' heeft gekozen. Schrijf een nieuwe prompt die de gebruiker om het volgende vraagt:
//
// Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
// 0: [functietitel marketing 0],
// 1: [functietitel marketing 1],
// 2: [functietitel marketing 2],
// 3: [functietitel marketing 3]
//
// Hierbij typ je de functietitels van Marketing niet handmatig over, maar spreek je ze aan via de marketing-property in het departments-object.
const userJobInput = prompt(`Je koos ${userDepartmentInput}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.` +
    `\n0: ${departments[userDepartmentInput].jobs[0].title}` +
    `\n1: ${departments[userDepartmentInput].jobs[1].title}` +
    `\n2: ${departments[userDepartmentInput].jobs[2].title}` +
    `\n3: ${departments[userDepartmentInput].jobs[3].title}`)

// Opdracht 3b: Op basis van wat de gebruiker invoert (0, 1, 2, of 3) willen wij de beschrijving van de bijbehorende marketing-functie-titel en marketing-functie-beschrijving in de console loggen. Dit doe je in het volgende format:
//
// "Je koos [titel ingevoerde marketing functie]. Een uitdagende rol! [beschrijving ingevoerde marketing functie]"
//
// Hiervoor zul je dus een beslissingsstructuur moeten bouwen. Tip: houdt er rekening mee dat ondanks dat de gebruiker een getal invoert, dit vanuit een prompt altijd terugkomt als de string-versie van dat getal. 3 is namelijk iets anders dan "3"
// Opdracht 3c: test of alles werkt door alle mogelijke getallen een keertje te voeren in de prompt en te checken of je de gewenste output krijgt. Maak jouw beslisboom nu extra gebruiksvriendelijk door de melding "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen." in de console te laten zien wanneer de gebruiker iets anders invoert dan 0 - 3.
switch (userJobInput) {
    case "0":
    case "1":
    case "2":
    case "3":
        console.log(`Je koos ${departments[userDepartmentInput].jobs[userJobInput].title}.` +
            `Een uitdagende rol! ${departments[userDepartmentInput].jobs[userJobInput].description}.`);
        break;
    default:
        console.error("Ongeldige keuze.");
        break;
}

// De opdrachten die onder opdracht 4 vallen zijn hierboven verwerkt in opdracht 2 en 3.