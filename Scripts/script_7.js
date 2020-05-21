

function bot(expr){
	if(isAllUpStr(expr) && expr != "") {
	console.log('Pwa, calme-toi...');
	}
	else if( expr.toUpperCase().includes("FORTNITE")){
		 console.log("on s' fait une partie soum-soum ?");
	}
	else if( expr[expr.length-1]==='?'){
		console.log("Ouais Ouais..." );
	}
	else if( expr===""){
		console.log("t'es en PLS ?" );
	}
	else console.log("balek.");
}

function isAllUpStr(str){
	for (var i = 0; i < str.length; i++) {
		if( str.charAt(i) != str.charAt(i).toUpperCase() ){
			return false ; 
			break;
		}
	}
	return true ;
}

input = prompt();
bot(input)