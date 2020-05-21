function printTableHash(tab){
    tab.forEach( user=>{
        console.log(user)
    }
    );
}


function isAllRented(tab){
	let bool = true ;
	tab.forEach( book =>{
		if( book.rented < 1 ){
			console.log(book)
			bool = false;
		}
	}
	);
	return bool ;
}

function MostRendted(tab){
	let max = tab[0] ;
	tab.forEach( book=>{
		if(book.rented > max.rented){max = book}
	}
	);
	console.log(max);
	return max ;
}

function LeastRendted(tab){
	let min = tab[0] ;
	tab.forEach( book=>{
		if(book.rented < min.rented){min = book}
	}
	);
	console.log(min);
	return min ;
}

function FindBookById(tab,id){
	let tmp;
	tab.forEach( book=>{
		if(book.id === id){
			tmp = book;
		}
	}
	);
	console.log(tmp);
	return tmp ;
}

function DeleteBookById(tab,id){

	for(let i=0; i<tab.length;i++){
		if( tab[i].id === id){
			delete tab[i];
			break;
		}
	}
	return tab;
}

function compare(bookA,bookB) {

    const lastA = bookA.title.toUpperCase();
    const lastB = bookB.title.toUpperCase();


    let result = 0 ;
    if( lastA > lastB){result = 1;}

    else if( lastA < lastB){result = -1 ;}

    return result;
}

function SortByTitle(tab){
    return tab.sort(compare);
}



const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
console.log(isAllRented(books));
console.log("Quel est livre le plus emprunté ?")
MostRendted(books);
console.log("Quel est le livre le moins emprunté ?")
LeastRendted(books);
console.log("Trouve le livre avec l'ID: 873495")
FindBookById(books,873495);
console.log("Supprime le livre avec l'ID: 133712")
DeleteBookById(books,133712);
printTableHash(books);
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
printTableHash( SortByTitle(books))
