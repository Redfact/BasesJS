function factorielle( valeur ){
	if( valeur === 1){
		return 1 ; 
	}
	else return factorielle (valeur -1)*valeur ;
}

valeur = prompt("De quel nombre veux-tu calculer la factorielle ?");
valeur = parseInt(valeur);
console.log(`Le resultat est ${factorielle(valeur)}`);
