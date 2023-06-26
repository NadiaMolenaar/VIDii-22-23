////////////////
// VARIABELEN //
////////////////

var titel = document.querySelector("h1");
var paragraaf = document.querySelector("p");
var videocontainer = document.querySelector("div:nth-of-type(1)");

// Function1 = button1 = nes | video
var button1 = document.querySelector("li:nth-of-type(1)");
button1.addEventListener("click", function1);

// Function2 = button2 = gameboy | video
var button2 = document.querySelector("li:nth-of-type(2)");
button2.addEventListener("click", function2);

// FunctionEasterEggTanooki = button3 = boeken | animatie
var button3 = document.querySelector("li:nth-of-type(3)");
button3.addEventListener("click", eastereggtanooki);

// Function3 = button4 = snes | video
var button4 = document.querySelector("li:nth-of-type(4)");
button4.addEventListener("click", function3);

// FunctionEasterEggStar = button5 = mappen | animatie
var button5 = document.querySelector("li:nth-of-type(5)");
button5.addEventListener("click", eastereggstar);

// Function4 = button6 = gamecube | video
var button6 = document.querySelector("li:nth-of-type(6)");
button6.addEventListener("click", function4);





//////////////
// FUNCTIES //
//////////////

// Function1 = button1 = nes | video
function function1 () {
    paragraaf.innerHTML = infotekst[0];
    videocontainer.dataset.video = "video1";

    console.log("Howdy!");
}

// Function2 = button2 = gameboy | video
function function2 () {
    paragraaf.innerHTML = infotekst[1];
    videocontainer.dataset.video = "video2";
}

// Function3 = button4 = snes | video
function function3 () {
    paragraaf.innerHTML = infotekst[2];
    videocontainer.dataset.video = "video3";
}

// Function4 = button6 = gamecube | video
function function4 () {
    paragraaf.innerHTML = infotekst[3];
    videocontainer.dataset.video = "video4";
}





///////////////////////
// CONSTANTE WAARDEN //
///////////////////////

const infotekst = [
    "Een van Nintendo's eerst gameconsoles is de NES, welke is ontworpen voor thuisgebruik. De NES werd oorspronkelijk op de markt gebracht als de Family Computer, of Famicom in Japan, maar werd in Noord-Amerika uitgebracht als NES. Games die erop werden afgespeeld waren onder andere Super Mario Bros, Ice Climber, Pinball en Duck Hunt.",
    "Een van de beste spelcomputers ooit is de Nintendo Game Boy. De Game Boy is in tegenstelling tot de NES draagbaar, maar bevat dezelfde functie om verwisselbare spelcassettes te gebruiken.",
    "Nintendo's tweede grote thuisconsole - de SNES - was ook een groot succes, het was de best verkopende spelconsole van het 16-bit tijdperk!",
    "Nintendo kwam later met het optische disc-formaat voor de GameCube, waarbij de spelvoortgang kon worden opgeslagen op geheugenkaarten, in groottes van 4MB tot 64MB. Opnieuw maakte Mario zijn opwachting op de GameCube, maar dat was een grote mislukking door de concurrerende playstation. Gelukkig heeft dat niet verhinderd dat de GameCube de geschiedenis is ingegaan als een iconische gameconsole!"
];





///////////////
// ANIMATIES //
///////////////

var tanooki = document.getElementById("eastereggtanooki");
var star = document.getElementById("eastereggstar")

// FunctionEasterEggTanooki = button3 = gamecube | video
function eastereggtanooki () {
    tanooki.classList.toggle("animatietanooki");
}
// FunctionEasterEggStar = button3 = gamecube | video
function eastereggstar () {
    star.classList.toggle("animatiestar");
}