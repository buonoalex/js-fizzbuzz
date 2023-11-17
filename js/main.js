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

    let arrayNumeriFizzBuzz = [];
    let i = parseInt(numeroOccorrenzeFizzBuzzRangeMin);
    
    while(i<=parseInt(numeroOccorrenzeFizzBuzzRangeMax)){
        if(i % 3 == 0 && i % 5 == 0){
            let stringtot = "Fizz Buzz";
            conteggioFizzBuzz = conteggioFizzBuzz + 1;
            arrayNumeriFizzBuzz.push(stringtot);
        }else if(i % 3 == 0){
            let string = "Fizz";
            arrayNumeriFizzBuzz.push(string);
        }else if(i % 5 == 0){
            let string2 = "Buzz";
            arrayNumeriFizzBuzz.push(string2);
        }else{
            arrayNumeriFizzBuzz.push(i);
        }
        i++;
    }
    console.log("non sono entrato");

    let listaNumeri = arrayNumeriFizzBuzz.join(" - ");

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
    document.getElementById("outputArray").innerHTML = listaNumeri;


}

function rigiocaCollezioneFizzBuzz(){
    document.getElementById("risultatoCollezioneFizzBuzz").classList.add("d-none");
    document.getElementById("collezioneFizzBuzz").classList.remove("d-none");
    document.getElementById("MostraArray").classList.add("d-none");
}

function tornaAlMenuDaCollezioneFizzBuzz(){
    document.getElementById("risultatoCollezioneFizzBuzz").classList.add("d-none");
    document.getElementById("collezioneFizzBuzz").classList.add("d-none");
    document.getElementById("paginaMenu").classList.remove("d-none");
    document.getElementById("MostraArray").classList.add("d-none");
}

function generatoreNumeroCasuale(){
    document.getElementById("paginaMenu").classList.add("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.remove("d-none");
}

function tornaAlMenu3(){
    document.getElementById("paginaMenu").classList.remove("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.add("d-none");
}

function bottoneInizioGiocoGeneratoreCasuale(){
    document.getElementById("generatoreNumeroCasuale").classList.add("d-none");
    document.getElementById("risultatoGeneratoreNumeroCasuale").classList.remove("d-none");
    let sceltaLivello = document.getElementById("sceltaLivello").value;
    console.log(sceltaLivello);

    let numeroRandom;
    

    switch(sceltaLivello){

        case "1":
            
            numeroRandom = Math.floor(Math.random()*100)+1;
            document.getElementById("contenitoreNumeroCasuale").innerHTML = numeroRandom;

            let array1 = creoArrayFizzBuzz(1,100);

            let presente1 = array1.includes(numeroRandom);
            console.log(presente1);

            if(presente1){
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI VINTO!!";
            }else{
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI PERSO!!";
            }
            
            
        break;

        case "2":

            numeroRandom = Math.floor(Math.random()*200)+1
            document.getElementById("contenitoreNumeroCasuale").innerHTML = numeroRandom;
            let array2 = creoArrayFizzBuzz(2,200);

            let presente2 = array2.includes(numeroRandom);
            console.log(presente2);

            if(presente2){
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI VINTO!!";
            }else{
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI PERSO!!";
            }
            
        break;

        case "3":
            numeroRandom = Math.floor(Math.random()*300)+1
            document.getElementById("contenitoreNumeroCasuale").innerHTML = numeroRandom;
            let array3 = creoArrayFizzBuzz(2,200);

            let presente3 = array3.includes(numeroRandom);
            console.log(presente3);

            if(presente3){
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI VINTO!!";
            }else{
                document.getElementById("contenitoreRisultatoVincentePerdente").innerHTML = "HAI PERSO!!";
            }

        break;

    }
}

function creoArrayFizzBuzz(min,max){
    const arrayRisultato = [];
    for(let i=min; i<=max; i++){
        if(i%3 == 0 && i%5 == 0){
            arrayRisultato.push(i);
        }
    }
    return arrayRisultato;
}

function rigiocaGeneratoreNumeroCasuale(){
    document.getElementById("risultatoGeneratoreNumeroCasuale").classList.add("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.remove("d-none");
}

function rigiocaGeneratoreNumeroCasuale(){
    document.getElementById("risultatoGeneratoreNumeroCasuale").classList.add("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.remove("d-none");
}

function tornaAlMenuDaGeneratoreNumeroCasuale(){
    document.getElementById("risultatoGeneratoreNumeroCasuale").classList.add("d-none");
    document.getElementById("generatoreNumeroCasuale").classList.add("d-none");
    document.getElementById("paginaMenu").classList.remove("d-none");
}

function bottoneFizzOBuzz(){
    document.getElementById("paginaMenu").classList.add("d-none");
    document.getElementById("trovaFizzOBuzz").classList.remove("d-none");
}

let numberRangeMin = 1;
let numberRangeMax = 0;

function generaRangeCasuale(){
    document.getElementById("stampaRangeCasuale").classList.remove("d-none");
    document.getElementById("sceltaFizzBuzz").classList.remove("d-none");

    while(numberRangeMax<numberRangeMin){
        numberRangeMin = Math.floor(Math.random()*1000)+1
        numberRangeMax = Math.floor(Math.random()*1000)+1
        console.log(numberRangeMin);
        console.log(numberRangeMax);
    }

    document.getElementById("contenitoreRangeMinTrovaFizzOBuzz").innerHTML = numberRangeMin;
    document.getElementById("contenitoreRangeMaxTrovaFizzOBuzz").innerHTML = numberRangeMax;
    
}

function confermaSceltaFizzBuzz(){
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
    return sceltaFizzBuzz;

}

function tornaIndietroDaFizzBuzz(){
    document.getElementById("trovaFizzOBuzz").classList.add("d-none");
    document.getElementById("stampaRangeCasuale").classList.add("d-none");
    document.getElementById("sceltaFizzBuzz").classList.add("d-none");
    document.getElementById("inserisciNumeroSceltaFizzBuzz").classList.add("d-none");
    document.getElementById("paginaMenu").classList.remove("d-none");
}

function inizioGiocoTrovaFizzOBuzz(){
    document.getElementById("trovaFizzOBuzz").classList.add("d-none");
    document.getElementById("risultatoTrovaFizzOBuzz").classList.remove("d-none");

    let numeroSceltaFizzOBuzz = confermaSceltaFizzBuzz();
   
    console.log(numberRangeMin);
    console.log(numberRangeMax);


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

    //Calcolo Occorrenze Fizz o Buzz(Non funziona)

    let numeroOccorrenzeFizz = 0;
    let numeroOccorrenzeBuzz = 0;

    for(let i=numberRangeMin; i<numberRangeMax; i++){
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
}

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