// Questo è il file che contiene tutto il codice JS della pagina web

//Selezione Fizz Buss for + if
/*for(let i = 1; i<101; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}*/
//---------------------------INIZIO---------------------------------

function bottonePrimaPagina(){
    let nomeGiocatore = document.getElementById("nomeGiocatore").value;
    document.getElementById("contenitoreNomeGiocatore").innerHTML = nomeGiocatore;

    document.getElementById("paginaMenu").classList.remove("d-none");
    document.getElementById("schermataPrincipaleMain").classList.add("d-none");
}

function tornaSchermataPrincipale(){
    document.getElementById("paginaMenu").classList.add("d-none");
    document.getElementById("schermataPrincipaleMain").classList.remove("d-none");
}

//--------------------GIOCO COLLEZIONE FIZZ BUZZ----------------
function collezioneFizzBuzz(){
    document.getElementById("paginaMenu").classList.add("d-none");
    document.getElementById("collezioneFizzBuzz").classList.remove("d-none");
}

function tornaAlMenu(){
    document.getElementById("paginaMenu").classList.remove("d-none");
    document.getElementById("collezioneFizzBuzz").classList.add("d-none");
}

function bottoneInzioGiocoCollezioneFizzBuzz(){

    document.getElementById("collezioneFizzBuzz").classList.add("d-none");
    document.getElementById("risultatoCollezioneFizzBuzz").classList.remove("d-none");

    let numeroOccorrenzeGiocatore = document.getElementById("numeroOccorrenzeFizzBuzz").value;
    let numeroOccorrenzeFizzBuzzRangeMin = document.getElementById("numeroOccorrenzeFizzBuzzRangeMin").value;
    let numeroOccorrenzeFizzBuzzRangeMax = document.getElementById("numeroOccorrenzeFizzBuzzRangeMax").value;

    console.log("Dati presi");
    console.log(numeroOccorrenzeGiocatore);
    console.log(numeroOccorrenzeFizzBuzzRangeMin);
    console.log(numeroOccorrenzeFizzBuzzRangeMax);

    let conteggioFizzBuzz = 0;

    //COPIO GRAFICA BOOTSTRAP 
    for (let i = parseInt(numeroOccorrenzeFizzBuzzRangeMin); i<=parseInt(numeroOccorrenzeFizzBuzzRangeMax); i++){

        let squareContent;
        let bgClass;
        
        //individuare numeri multipli sia di 3 che di 5
        if ((i%3==0) && (i%5==0)){
            console.log("FizzBuzz");
            conteggioFizzBuzz = conteggioFizzBuzz + 1;
            squareContent ="FizzBuzz";
            bgClass = "bg-danger";
        }
    
        //individure numeri multipli di 5 con il mudulo
        else if(i%5==0){
            console.log("Buzz");
            squareContent ="Buzz";
            bgClass = "bg-warning";
        }
    
        // individuare numeri multipli di 3
        else if (i%3==0){
            console.log("Fizz");
            squareContent ="Fizz";
            bgClass = "bg-success";
        }
    
        else{ 
            console.log(i);
            squareContent = i;
            bgClass = "bg-primary";
        }
    
       
       
        document.getElementById("container_squares").innerHTML += `
                <div class="square ${bgClass}" >
                    <p>${squareContent}</p>
                </div>
        `;
    
    }

    document.getElementById("numeroRangeMinGioco").innerHTML = numeroOccorrenzeFizzBuzzRangeMin;
    document.getElementById("numeroRangeMaxGioco").innerHTML = numeroOccorrenzeFizzBuzzRangeMax;
    document.getElementById("risultatoOccorrenzeGioco").innerHTML = conteggioFizzBuzz;
    document.getElementById("contenitoreNumeroOccorrenzeGiocatore").innerHTML = numeroOccorrenzeGiocatore;

    if(numeroOccorrenzeGiocatore == conteggioFizzBuzz){
        document.getElementById("risultatoVittoriaSconfitta").innerHTML = "HAI VINTO!";
    }else{
        document.getElementById("risultatoVittoriaSconfitta").innerHTML = "HAI PERSO!";
    }

    document.getElementById("MostraArray").classList.remove("d-none");

}

function rigiocaCollezioneFizzBuzz(){


    //RESET PARAMETERS
    document.getElementById("numeroOccorrenzeFizzBuzz").value = "";
    document.getElementById("numeroOccorrenzeFizzBuzzRangeMin").value = "";
    document.getElementById("numeroOccorrenzeFizzBuzzRangeMax").value = "";
    document.getElementById("container_squares").innerHTML = "";

    //VIEW SCREEN
    document.getElementById("risultatoCollezioneFizzBuzz").classList.add("d-none");
    document.getElementById("collezioneFizzBuzz").classList.remove("d-none");
    document.getElementById("MostraArray").classList.add("d-none");
}

function tornaAlMenuDaCollezioneFizzBuzz(){

    //RESET PARAMETERS
    document.getElementById("numeroOccorrenzeFizzBuzz").value = "";
    document.getElementById("numeroOccorrenzeFizzBuzzRangeMin").value = "";
    document.getElementById("numeroOccorrenzeFizzBuzzRangeMax").value = "";
    document.getElementById("container_squares").innerHTML = "";

    //VIEW SCREEN
    document.getElementById("risultatoCollezioneFizzBuzz").classList.add("d-none");
    document.getElementById("collezioneFizzBuzz").classList.add("d-none");
    document.getElementById("paginaMenu").classList.remove("d-none");
    document.getElementById("MostraArray").classList.add("d-none");
}
//---------------------------FINE---------------------------------

//---------------GIOCO GENERATORE NUMERO CASUALE------------------

//Funzione accesso alla schermata pre-gioco(Compilazione)
function generatoreNumeroCasuale(){
    document.getElementById("paginaMenu").classList.add("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.remove("d-none");
}

//Funzione torna al menu dalla schermata pre-gioco(Compilazione)
function tornaAlMenu3(){
    document.getElementById("paginaMenu").classList.remove("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.add("d-none");
}

//Funzione Inizio Gioco
function bottoneInizioGiocoGeneratoreCasuale(){

    //VIEW SCREEN
    document.getElementById("generatoreNumeroCasuale").classList.add("d-none");
    document.getElementById("risultatoGeneratoreNumeroCasuale").classList.remove("d-none");

    //Presa variabile scelta del livello da eseguire
    let sceltaLivello = document.getElementById("sceltaLivello").value;
    console.log(sceltaLivello);

    //Dichiaro il mio numero random per lo switch
    let numeroRandom;
    

    //Inizio dinamicità in base alla scelta dell'utente del livello 
    switch(sceltaLivello){

        case "1":

            //Creo il numero random è lo visualizzo in DOM
            numeroRandom = Math.floor(Math.random()*100)+1;
            document.getElementById("contenitoreNumeroCasuale").innerHTML = numeroRandom;

            //Creo l'array con la funzione apposita
            let arrayScelta1 = creoArrayFizzBuzz(1,100);

            //Cerco il mio numero random nell'array
            let presenteNumeroScelta1 = arrayScelta1.includes(numeroRandom);
            console.log(presenteNumeroScelta1);

            //Prendo il risultato è lo visulizzo in DOM
            if(presenteNumeroScelta1){
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI VINTO!!";
            }else{
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI PERSO!!";
            }
            
        break;

        case "2":
            
            //Creo il numero random è lo visualizzo in DOM
            numeroRandom = Math.floor(Math.random()*200)+1
            document.getElementById("contenitoreNumeroCasuale").innerHTML = numeroRandom;

            //Creo l'array con la funzione apposita
            let arrayScelta2 = creoArrayFizzBuzz(2,200);

            //Cerco il mio numero random nell'array
            let presenteNumeroScelta2 = arrayScelta2.includes(numeroRandom);
            console.log(presenteNumeroScelta2);

            //Prendo il risultato è lo visulizzo in DOM
            if(presenteNumeroScelta2){
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI VINTO!!";
            }else{
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI PERSO!!";
            }
            
        break;

        case "3":
            
            //Creo il numero random è lo visualizzo in DOM
            numeroRandom = Math.floor(Math.random()*300)+1
            document.getElementById("contenitoreNumeroCasuale").innerHTML = numeroRandom;

            //Creo l'array con la funzione apposita
            let arrayScelta3 = creoArrayFizzBuzz(3,300);

            //Cerco il mio numero random nell'array
            let presenteNumeroScelta3 = arrayScelta3.includes(numeroRandom);
            console.log(presenteNumeroScelta2);

            //Prendo il risultato è lo visulizzo in DOM
            if(presenteNumeroScelta2){
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI VINTO!!";
            }else{
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI PERSO!!";
            }

        break;

    }
}

//Funzione Creo array di tutti i Fizz Buzz
function creoArrayFizzBuzz(min,max){
    const arrayRisultato = [];
    for(let i=min; i<=max; i++){
        if(i%3 == 0 && i%5 == 0){
            arrayRisultato.push(i);
        }
    }
    return arrayRisultato;
}

//Funzione per rigiocare il gioco 
function rigiocaGeneratoreNumeroCasuale(){
    document.getElementById("risultatoGeneratoreNumeroCasuale").classList.add("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.remove("d-none");
}

//Funzione per tornare al menu dalla schermata Risultato Generatore Numero Casuale
function tornaAlMenuDaGeneratoreNumeroCasuale(){
    document.getElementById("risultatoGeneratoreNumeroCasuale").classList.add("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.add("d-none");
    document.getElementById("paginaMenu").classList.remove("d-none");
}
//---------------------------FINE---------------------------------

//-----------------GIOCO BOTTONE FIZZ O BUZZ----------------------

function bottoneMenuFizzOBuzz(){

    //View Screen
    document.getElementById("paginaMenu").classList.add("d-none");
    document.getElementById("trovaFizzOBuzz").classList.remove("d-none");
}

document.getElementById("generaRangeCasuale").addEventListener("click",function(event){

    document.getElementById("stampaRangeCasuale").classList.remove("d-none");
    document.getElementById("sceltaFizzBuzz").classList.remove("d-none");

    let numberRangeMin = 1;
    let numberRangeMax = 0;

    while(numberRangeMax<numberRangeMin){
        numberRangeMin = Math.floor(Math.random()*1000)+1
        numberRangeMax = Math.floor(Math.random()*1000)+1
        console.log(numberRangeMin);
        console.log(numberRangeMax);
    }

    document.getElementById("contenitoreRangeMinTrovaFizzOBuzz").innerHTML = numberRangeMin;
    document.getElementById("contenitoreRangeMaxTrovaFizzOBuzz").innerHTML = numberRangeMax;
});
   
let numeroMinPerRange = numberRangeMin;
let numeroMaxPerRange = numberRangeMax;

document.getElementById("sceltaFizzBuzz").addEventListener("submit",function(event){
    event.preventDefault();

    let sceltaFizzBuzz = document.getElementById("numeroSceltaFizzBuzz").value;
    console.log(sceltaFizzBuzz);

    switch(sceltaFizzBuzz){
        case "1":
            document.getElementById("inserisciNumeroSceltaFizzBuzz").classList.remove("d-none");
            document.getElementById("contenitoreNumeroBuzz").classList.add("d-none");
            document.getElementById("contenitoreNumeroFizz").classList.remove("d-none");
            
            console.log("caso 1");
        break;

        case "2":
            document.getElementById("inserisciNumeroSceltaFizzBuzz").classList.remove("d-none");
            document.getElementById("contenitoreNumeroFizz").classList.add("d-none");
            document.getElementById("contenitoreNumeroBuzz").classList.remove("d-none");
            console.log("caso 2");
        break;
    }

});

function tornaIndietroDaFizzBuzz(){
    document.getElementById("trovaFizzOBuzz").classList.add("d-none");
    document.getElementById("stampaRangeCasuale").classList.add("d-none");
    document.getElementById("sceltaFizzBuzz").classList.add("d-none");
    document.getElementById("inserisciNumeroSceltaFizzBuzz").classList.add("d-none");
    document.getElementById("paginaMenu").classList.remove("d-none");
}

document.getElementById("inserisciNumeroSceltaFizzBuzz").addEventListener("submit",function(event){
    event.preventDefault();

    document.getElementById("sceltaFizzBuzz").reset();
    document.getElementById("inserisciNumeroSceltaFizzBuzz").reset();

    document.getElementById("trovaFizzOBuzz").classList.add("d-none");
    document.getElementById("risultatoTrovaFizzOBuzz").classList.remove("d-none");

    let numeroSceltaFizzOBuzz = document.getElementById("numeroSceltaFizzBuzz").value;
    console.log(sceltaFizzBuzz);
   
    console.log(numeroMinPerRange);
    console.log(numeroMaxPerRange);


    if(numeroSceltaFizzOBuzz == 1){
        document.getElementById("tipoFizzOBuzz").innerHTML = "Fizz";
    }else{
        document.getElementById("tipoFizzOBuzz").innerHTML = "Buzz";
    }

    document.getElementById("numeroRangeMinGiocoFizzOBuzz").innerHTML = numberRangeMin;
    document.getElementById("numeroRangeMaxGiocoFizzOBuzz").innerHTML = numberRangeMax;

    
    let numeroGiocatoreFizz = 0;
    let numeroGiocatoreBuzz = 0;
    
    switch(numeroSceltaFizzOBuzz){
        case "1":
            numeroGiocatoreFizz = document.getElementById("numeroFizz").value;
            document.getElementById("contenitoreNumeroOccorrenzeGiocatoreFizzOBuzz").innerHTML = numeroGiocatoreFizz;
        break;

        case "2":
            numeroGiocatoreBuzz = document.getElementById("numeroBuzz").value;
            document.getElementById("contenitoreNumeroOccorrenzeGiocatoreFizzOBuzz").innerHTML = numeroGiocatoreBuzz;
        break;
    }

    //Calcolo Occorrenze Fizz o Buzz(Funziona)

    let numeroOccorrenzeFizz = 0;
    let numeroOccorrenzeBuzz = 0;

    for(let i=numeroMinPerRange; i<numeroMaxPerRange; i++){
        if(i%3 == 0){
            numeroOccorrenzeFizz = numeroOccorrenzeFizz + 1;
        }else if(i%5 == 0){
            numeroOccorrenzeBuzz = numeroOccorrenzeBuzz + 1;
        }
    }

    console.log(numeroOccorrenzeFizz);
    console.log(numeroOccorrenzeBuzz);

    //Controllo vittoria(Funziona)
    switch(numeroSceltaFizzOBuzz){
        case "1":

            document.getElementById("risultatoOccorrenzeGiocoFizzOBuzz").innerHTML = numeroOccorrenzeFizz;

            if(numeroGiocatoreFizz == numeroOccorrenzeFizz){
                document.getElementById("risultatoVittoriaSconfittaFizzOBuzz").innerHTML = "HAI VINTO!!"
            }else{
                document.getElementById("risultatoVittoriaSconfittaFizzOBuzz").innerHTML = "HAI PERSO!!"
            }
        break;  
        
        case "2":

            document.getElementById("risultatoOccorrenzeGiocoFizzOBuzz").innerHTML = numeroOccorrenzeBuzz;

            if(numeroGiocatoreBuzz == numeroOccorrenzeBuzz){
                document.getElementById("risultatoVittoriaSconfittaFizzOBuzz").innerHTML = "HAI VINTO!!"
            }else{
                document.getElementById("risultatoVittoriaSconfittaFizzOBuzz").innerHTML = "HAI PERSO!!"
            }
        break;   
    }

});


function rigiocaTrovaFizzOBuzz(){
   
    document.getElementById("risultatoTrovaFizzOBuzz").classList.add("d-none");
    document.getElementById("trovaFizzOBuzz").classList.remove("d-none");
    document.getElementById("stampaRangeCasuale").classList.add("d-none");
    document.getElementById("sceltaFizzBuzz").classList.add("d-none");
    document.getElementById("inserisciNumeroSceltaFizzBuzz").classList.add("d-none");
}

function tornaAlMenuDaTrovaFizzOBuzz(){

    document.getElementById("trovaFizzOBuzz").classList.add("d-none");
    document.getElementById("risultatoTrovaFizzOBuzz").classList.add("d-none");
    document.getElementById("paginaMenu").classList.remove("d-none");
    document.getElementById("stampaRangeCasuale").classList.add("d-none");
    document.getElementById("sceltaFizzBuzz").classList.add("d-none");
    document.getElementById("inserisciNumeroSceltaFizzBuzz").classList.add("d-none");
}
//---------------------------FINE---------------------------------