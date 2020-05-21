
function get70s(tab){
    tab.forEach( user=>{
        if( user.year >= 1970 && user.year < 1980){
          console.log(`${user.first} ${user.last}`)
        }
    }
    );
}

function getArrayName(tab){
    let tmptab = new Array();
    tab.forEach( user=>{
      tmptab.push(`${user.first} ${user.last}`);
    }
    );
  return tmptab;
}

function getAges(tab){
    tab.forEach( user=>{
          console.log(`${user.first} ${user.last} => ${2020-user.year}`);
        
    }
    );
}

function compare(userA,userB) {

    const lastA = userA.last.toUpperCase();
    const lastB = userB.last.toUpperCase();


    let result = 0 ;
    if( lastA > lastB){result = 1;}

    else if( lastA < lastB){result = -1 ;}

    return result;
}

function printTableHash(tab){
    tab.forEach( user=>{
        console.log(user)
    }
    );
}

function SortByLast(tab){
    return tab.sort(compare);
}


const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("############################ Nés dans les années 70 ############################")
get70s(entrepreneurs)
console.log("############################ Array des noms ############################")
console.log(getArrayName(entrepreneurs))
console.log("############################ Age des personnes ############################")
getAges(entrepreneurs)
console.log("############################ Trie par nom de famille ############################")
printTableHash( SortByLast(entrepreneurs))
