
function CodonToAcide(codon){
	if(codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" || codon == "AGU" || codon == "AGC"){
		return "Sérine";
	}
	if(codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG"){
		return "Proline";
	}
	if(codon == "UUA" || codon == "UUG"){
		return "Leucine";
	}	

	if(codon == "UUU" || codon == "UUC"){
		return "Phénylalanine";
	}

	if(codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG"){
		return "Arginine";
	}

	if(codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG"){
		return "Arginine";
	}

	if(codon == "UAU" || codon == "UAC"){
		return "Tyrosine";
	}

	return "Unknow" ;
}


function ArnToProteine(Arn){
	let i=0, j=2 ;
	let res=" ";
	while ( j < Arn.length){
		res= res.concat('-',CodonToAcide( Arn.substring(i,j+1)))
		i+=3;
		j+=3;
	}
	return res ;
}

console.log("CCGUCGUUGCGCUACAGC");
console.log(ArnToProteine("CCGUCGUUGCGCUACAGC"));
console.log("CCUCGCCGGUACUUCUCG");
console.log(ArnToProteine("CCUCGCCGGUACUUCUCG"));
