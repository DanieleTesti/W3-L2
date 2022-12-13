const sumWithCallback = function (n1, n2, callback) {
  console.log(n1 + n2);
  callback(); //sayHi
};

const sayHi = function (num) {
  console.log(num + " HI!");
};
const sayBye = function (num) {
  console.log(num + " BYE!");
};

sumWithCallback(2, 3, sayHi);
sumWithCallback(2, 7, sayBye);
