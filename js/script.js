// Script by Gianluca Chiaravalloti
// Data: 22.03.2024

// Verifico se il nio script è collegato correttamente al document html
// console.log("It's working...");

// Assegno alla variabile il puntatore della classe del document html del pulsante nascondi 
const nascondiOfferte = document.querySelector(".nascondi-offerte");
// Stampo su console la verifica del puntatore assegnato alla variabile
// console.log(nascondiOfferte);

// Assegno alla variabile il puntatore della classe del document html del pulsante nascondi 
const nascondiSummer = document.querySelector(".nascondi-summer");
// Stampo su console la verifica del puntatore assegnato alla variabile
// console.log(nascondiSummer);

// Assegno alle variabili il puntatore delle card viaggi e delle card testimonial
const totaleCard = document.querySelector(".totale-card");
const conteggioCard = document.querySelectorAll(".card");
const conteggioTestimonial = document.querySelectorAll(".card-testimonial");
//console.log(conteggioCard.length);
// console.log(conteggioTestimonial.length);
let conteggioTotale = conteggioCard.length - conteggioTestimonial.length;

// Assegno il valore della differenza tra le card viaggi e le card testimonial e visualizo il valore nel document html
totaleCard.textContent = `Conteggio Offerte: ${conteggioTotale}`; 



// Gestione del click del pulsante nascondi offerte presente nel document html
nascondiOfferte.addEventListener("click", function() {
    // Stampo su console la verifica del click sul pulsante nascondi
    console.log("hai cliccato su nascondi offerte...");
    const nascondiCard = document.getElementById("card-nascondi-offerte-settimana");
    if (nascondiCard.style.display != "none") {
        nascondiCard.style.display = "none";
        nascondiOfferte.textContent = "Visualizza";
    } else {
        nascondiCard.style.display = "block";
        nascondiOfferte.textContent = "Nascondi"; 
    }  
});

// Gestione del click del pulsante nascondi summer presente nel document html
nascondiSummer.addEventListener("click", function() {
    // Stampo su console la verifica del click sul pulsante nascondi
    // console.log("Hai cliccato su nascondi summer...");
    console.log("hai cliccato su nascondi offerte...");
    const nascondiCard = document.getElementById("card-nascondi-offerte-summer");
    if (nascondiCard.style.display != "none") {
        nascondiCard.style.display = "none";
        nascondiSummer.textContent = "Visualizza";
    } else {
        nascondiCard.style.display = "block";
        nascondiSummer.textContent = "Nascondi"; 
    }  
});

