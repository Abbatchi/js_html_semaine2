var nom = prompt("Entrez votre nom");
var prenom = prompt("Entrez votre prenom");
var city = prompt("Entrez votre ville");
alert("       Nom: "+ nom + "\n       Prenom: " + prenom + "\n       Ville: " + city);
var newChifre = prompt("Entrez les chifres pour multiplier");
newChifre = newChifre.split(",");
parseInt(newChifre);
var res = newChifre[0] *= newChifre[1];
alert("Votre chifre: " + res);
var age = prompt("Entrez votre age");
var sexe = prompt("Entrez votre sexe");
var nation = prompt("Entrez votre nationnalité");

var majeur = "Vous êtes majeur!";
var mineur = "Vous êtes mineur";

	if (age > 18){
		alert("Vous êtes " + sexe + " " + "majeur " + nation + "!");
	}

	else {
		alert("Vous êtes " + sexe + " " + "mineur " + nation + "!");
	}
