
// definisco 1 variabile
// un contatore che parte da 10
let count = 10

// definisco un intervallo di 1 secondo che chiami la funzione  e lo salvo in una costante
const intervallo = setInterval(function(){
    if (count > 0){
        console.log(count)
        count--
    }
    else{
        buonAnno()
    }
}, 1_000)
// definisco la funzione buon anno che interrompe l'intervallo
function buonAnno(){
    clearInterval(intervallo)
    console.log("Buon Anno")
}


