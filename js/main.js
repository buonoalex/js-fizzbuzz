// Questo è il file che contiene tutto il codice JS della pagina web

//Selezione Fizz Buss for + if
for(let i = 1; i<101; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("Fizz Buzz");
    }else if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

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
}