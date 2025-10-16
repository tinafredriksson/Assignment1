# Assignment1
### **How the HTML, CSS, and JS files are connected**

HTML är grunden som utger webbsidan, i HTML filen kopplas både CSS och Javascript.

CSS som är själva stylingen för hemsidan kopplas i den övre delen av HTML som kallas för Head.
CSS länkas sedan från HTML till CSS filen på följande sätt: <link rel="stylesheet" href="css/style.css">
link rel= talar om: href= talar om filens namn.

JS som är funktionerna på en hemsida kopplas även den via filen HTML. Javascriptet måste
alltid ligga längst ner inom Body delen eftersom HTML läses in innan JS i webbläsaren.
Den länkas enligt en script tagg och sedan sök vägen till vad filen heter i detta fall app.js.
<script src="js/app.js"></script>


### **What happens when a user loads the page (code flow)**

När användaren hovrar över knappen Daysleft ändras texten till Let´s go med hjälp av funktionen i
javascript. När användaren sedan trycker på knappen kommer en pop-up ruta som visar hur många dagar det är
kvar till loppet börjar.
Nedanför knappen finns en länk som ändrar färg när man hovrar över den. När man trycker på länken kommer
man vidare till hyrox.com där man bland annat kan boka sitt lopp.
Längst ner i footern på hemsidan finns en Github länk som ändrar färg när man hovrar över den och man länkas
vidare till min Github profil.

### **What role each file plays in the platform**

HTML = Bygger grunden för hemsidan (Ex Rubriker, text, bild)

CSS= Utgör designen på hemsidan. Ex färg, form, vart de olika delarna ska placeras.

JS= Utgör funktionen på hemsidan. Ex att det händer något när vi trycker på en knapp.


### Explaining in comments or in the README file how the browser processes these changes when a user interacts with the page, both HTML and JavaScript (for example: explain the whole code flow from pressing the button to adding element)
Först laddas innehållet i HTML och det körs alltid uppifrån och ner.
Knappen Days left kommer först att köras och sedan ner till p taggen som innehåller id för knappen.
Vilket är kopplat till elementets id i Javascript. Till sist ner till javascript taggen
som visar för webbläsaren att JS koden ska köras och bygger Domen.

I JS hämtas elementet och sedan triggas klick eventet i webbläsaren.
I javascript skapas en prompt som är indelad i 4 olika värden.
Detta är skapat med if, och else satser för att olika alternativ ska vara möjliga
för användaren att välja/skriva in. Beroende på vad användaren skriver in i rutan kommer olika
meddelanden att visas. Om användaren inte skriver in något av alternativet kommer
else satsen att visas som indikerar på att användaren inte gjort rätt val.
om personen istället väljer att avbryta blir värdet (null) variabeln är deklarerad men satt till värdet null
för att på så sätt ge ett meddelande till användaren.

