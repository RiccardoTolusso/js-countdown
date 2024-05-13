
// definisco 1 variabile
// un contatore che parte da 10
let count = 10

// definisco una costante che contiene l'h1 che utilizzerò come output
const domOutput = document.getElementById("display")

// definisco un intervallo di 1 secondo che chiami la funzione  e lo salvo in una costante
const intervallo = setInterval(function(){
    if (count > 0){
        domOutput.innerText = count;
        count--;
    }
    else{
        buonAnno();
    }
}, 1_000)
// definisco la funzione buon anno che interrompe l'intervallo
function buonAnno(){
    // interrompo l'intervallo
    clearInterval(intervallo);
    // evito che il pulsante venga cliccato nuovamente o successivamente lo scadere del timer
    stopButton.disabled = true;
    // stampo buon anno
    domOutput.innerText = "Buon Anno"
}

// definisco una costante contenente il bottone di stop
const stopButton = document.getElementById("stop");
// se la persona preme il pulsante lancio il buon anno in anticipo
stopButton.addEventListener("click", buonAnno);


