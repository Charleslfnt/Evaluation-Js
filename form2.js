var validation = document.getElementById("submit");
var prenom = document.getElementById(prenom);
var prenomM = document.getElementById(missPrenom)
var prenomV = /^[a-zA-ZéèîÉÈ][a-zéèêçî]+([-'\s][a-zA-ZéèîÉÈ][a-zéèêçî]+)?/; //types de caractères accepter 
validation.addEventListener("click", f_valid);

function f_valid(e) {
    if (prenom.validity.valueMissing){
        e.preventDefault();
        prenomM.textContent = "Veuillez entrez votre prénom"; 
    } else if (prenomV.test(prenom.value) == false) {
        event.preventDefault();
        prenomM.textContent = "format incorrect";
    }
} 
