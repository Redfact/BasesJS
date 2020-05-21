

function pyramide(etage){
	//Creer un array de taille etage , et init chaque elements avec fill
	let tmp=new Array(etage).fill(" ");
	for(let i=1; i<=etage ; i++){
		tmp[etage-i]='#'
		console.log(tmp.join(""));
	}
}

etage= prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
pyramide(parseInt(etage))

