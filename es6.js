// //INTERPOLAZIONE DI STRINGA

// const person = "Davide";

// const isAdmitted = person == "Davide" ? true : false;
// console.log(isAdmitted);

// const mul = function (n1, n2 = 1) {
//   return n1 * n2;
// };
// console.log(mul(2, 5));

// const withRestParam = function (param1, param2, param3, ...rest) {
//   console.log(param1);
//   console.log(param2);
//   console.log(param3);
//   //   console.log(rest);

//   for (i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// };
// withRestParam(23, 50, 0, 89, 64, 5);

const person = {
  name: "Antonio",
  lastname: "Vallerga",
  location: { country: "Italy", region: "Liguria", city: "Genova" },
};

// //DESTRUTAZIONE OGGETTI
// const { name, lastname, location } = person;
// const { city } = person.location;

// console.log(name);
// console.log(lastname);
// console.log(location);
// console.log(city);

//DESTRUTAZIONE ARRAY

const charArr = ["a", "b", "c", "d", "e", "f"];

// const [first, , , , fifth] = charArr;
// console.log(first);
// console.log(fifth);

//SPREAD OPERATOR

const str = "Epicode";
console.log(...str);
const charArr2 = ["j", "i", "l"];

const charArr3 = [...charArr, ...charArr2];
console.log(charArr3);

const person2 = {
  ...person,
  location: { ...person.location },
  name: "Stefano", //Cambio nome e cognome person2
  lastname: "Miceli",
};
person2.location.city = "Roma"; //camio region e city di person2
person2.location.region = "Lazio";
console.log(person);
console.log(person2);
