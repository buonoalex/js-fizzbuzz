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
    
    for(let i=numeroOccorrenzeFizzBuzzRangeMin; i<numeroOccorrenzeFizzBuzzRangeMax; i++){
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
    }

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