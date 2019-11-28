/*AddEventListener qui va créer un « gestionnaire d’écoute » 
sur l’objet ciblé, c’est-à-dire créer connecter cet objet à l’évènement concerné.*/ 




Document.forms["contacter"].addEventListener("submit", function(e) {

var erreur;

var inputs = this;

for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i]);
 if (!inputs[i].value) {
     erreur = "Renseignez tous les champs" ;
     break;
 }
}


if (erreur) {
    e.preventDefault();
    document.getElementByName("erreur").innerHTML = erreur;
    return false;
} else { 
    alert("Formulaire envoyé");
}
});
