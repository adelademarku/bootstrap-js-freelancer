/*A questo punto una volta terminato il vostro layout, include un vostro file javascript e fate in modo che quando l’utente fa click sul bottone “send” del form, 
il sito vi calcoli l’ammontare del vostro lavoro per le ore di lavoro richieste dall’utente.
Il prezzo orario per una commissione varia in questo modo:
Se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50 € l’ora
Se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30 € l’ora
Se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60 € l'ora
Se poi l’utente inserisce un codice promozionale tra i seguenti YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24, fate in modo che l’utente abbia diritto ad uno sconto del 25% sul prezzo finale.
Se il codice inserito non è valido, informate l’utente che il codice è sbagliato e calcolate il prezzo finale senza applicare sconti.
Mostrare il risultato del calcolo del prezzo finale in una “forma umana” in un apposito tag HTML appena sotto il bottone send.
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi 
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit). */

let arrayCodiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];





function submitFormBottone(event) {
    event.preventDefault();



    let price = 0;


    let lavoro = document.getElementById("inputTypeofwork").value;
    let hours = document.getElementById("inputHours").value;


    if (lavoro == "frontend") {
        price = 20.5 * hours;
    } else if (lavoro == "backend") {
        price = 15.3 * hours;

    } else if (lavoro == "analisi") {
        lavoro = 15.3 * hours;
    }

    console.log("Il prezzo è di " + price);


    let x = document.forms["myForm"]["fname"].value;

    for (let i = 0; i < arrayCodiciSconto.length; i++) {
        console.log(arrayCodiciSconto[i])

        if (x == arrayCodiciSconto[i]) {
            console.log("il prezzo finale è: " + calculateDiscount(price, 25));
            document.getElementById("prezzoFinale").innerHTML = "il prezzo è di :" + calculateDiscount(price, 25);

            break;

        } else if (x == "" || x == null) {
            console.log("il codice non è stato inserito ");
            document.getElementById("prezzoFinale").innerHTML = "il prezzo è di :" + price;
        } else if (x != arrayCodiciSconto[i]) {
            console.log("condice errato");
            document.getElementById("prezzoFinale").innerHTML = "il prezzo è di :" + price;
        }
    }

}











//-------------------------funzioni-------------------------------------------

const calculateDiscount = (total, percentage) => {

    let discountValue = (total / 100) * percentage;
    let finalPrice = total - discountValue;

    return finalPrice.toFixed(2);
}


function changecolor(colour) {
    document.bgcolor = colour;
}

/*



function ricercaInArray(array, elementoDaTrovare){
    
    for(let i=0; i < array.length; i++){
        if(array[i] == elementoDaTrovare){ 
            return true; 
        }
    }

    return false;




}

function validate (){
    let codicescontoinserito = document.getElementById("inputDiscountCode").value;
    if (codicescontoinserito.value== "")
     {return false;}
    else if (codicescontoinserito.value == arrayCodiciSconto.length) 
    {return true;}
    else if (codicescontoinserito.value != arrayCodiciSconto.length) {return false;}
}


*/


/*
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;

    for(let i = 0; i< arrayCodiciSconto.length; i++){
        /*console.log(arrayCodiciSconto[i])*/
/*
  if (x == "" || x == null) {
  console.log("il codice non è stato inserito ");
    
} else if (x != arrayCodiciSconto[i]) {console.log ("condice errato");
} else if (x == arrayCodiciSconto[i]) 
{ console.log("il prezzo scontato è :" + price) ;}
return true;
}

}  */