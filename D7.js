/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log("\nEsercizio 1\n");

function stringa(str1, str2) {
  let firstDue = str1.substring(0, 2);
  let lastTre = str2.substring(str2.length - 3);
  let firstDueCaps = firstDue.toUpperCase();
  let lastTreCaps = lastTre.toUpperCase();

  console.log(firstDueCaps + " " + lastTreCaps);
}

// stringa("ciao", "epicoder");

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("\nEsercizio 2\n");
array = [];
function giveMeRandom() {
  for (i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 100);
  }
  console.log(array);
}

// giveMeRandom();

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

console.log("\nEsercizio 3\n");

const num1 = [17, 5, 2, 2, 14, 8];
function pari() {
  const pari2 = num1.filter((numeroSingolo) => {
    return numeroSingolo % 2 === 0;
  });
  console.log(pari2);
}

pari();
//no

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("\nEsercizio 4\n");
const num = [7, 5, 2, 2, 15, 8];
let somma = num.reduce((temp, singleNum) => {
  return temp + singleNum;
}, 0);
console.log(somma);

// // function sum() {
// //   for (let i = 0; i < num.length; i++) {
// //     if (num[i] % 2 == 0) {
// //       somma += num[i];
// //     } else somma += 0;
// //   }
// //   console.log(somma);
// // }

// sum();

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log("\nEsercizio 5\n");
addizione = 0;
function add() {
  for (let i = 0; i < num.length; i++) {
    let inserimento = num[i];
    addizione += inserimento;
  }

  console.log(addizione);
}
// add();

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const incrementaArray = (array, n) => {
  return array.map((el) => el + n);
};

console.log(incrementaArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 30));

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log("\nEsercizio 9\n");

nDispari = [];
function dispari() {
  for (let n = 0; n < 100; n++) {
    if (n % 2 != 0) {
      nDispari[n] = n;
    } else nDispari[n] = [""];
  }
  console.log(nDispari);
}

dispari();

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("\nEsercizio 10\n");
anno = 0;
let years = movies.map((movies) => parseInt(movies.Year)); //array di stringhe di anni
// console.log(years);

let foundYear = 2001;
let fooudIndex = 0;

for (let i = 0; i < years.length; i++) {
  const currYears = years[i];
  if (currYears < foundYear) {
    foundYear = currYears;
    foundIndex = i;
  }
}
console.log(
  "il film piu vecchio è : " + movies[fooudIndex].Title + " del " + foundYear
);

// years.sort();
// console.log(years[0]);

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("\nEsercizio 11\n");

const countMovies = (array) => {
  return array.length;
};

console.log(countMovies(movies));

// numeroFilm();

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */

console.log("\nEsercizio 12\n");
nomefilm = [];

function nomi() {
  for (let i = 0; i < movies.length; i++) {
    nomefilm[i] = movies[i].Title;
  }
  console.log(nomefilm);
}

// nomi();

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log("\nEsercizio 13\n");

filmDueMila = [];
data = 0;
prima2000 = 0;
function dueMila() {
  for (let i = 0; i < movies.length; i++) {
    data = parseInt(movies[i].Year);
    if (data >= 2000) filmDueMila.push(movies[i].Title);
    else prima2000++;
  }
  console.log(filmDueMila);
  console.log("Film prima del 2000: " + prima2000);
}

console.log(dueMila(movies));
// dueMila();

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let anni = 0;
let sommaAnni = 0;
function contaAnni() {
  for (let i = 0; i < movies.length; i++) {
    anni = parseInt(movies[i].Year);
    sommaAnni = sommaAnni + anni;
  }
  console.log(sommaAnni);
}
contaAnni();
