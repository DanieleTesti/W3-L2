const now = new Date();

const year = now.getFullYear();
console.log(year);
const month = now.getMonth();
console.log(month);

const lastDayOfThisMonthObj = new Date(year, month + 1, 0);

const lastDayOfThisMonth = lastDayOfThisMonthObj.getDate();
console.log(lastDayOfThisMonth);

for (i = 0; i < lastDayOfThisMonth; i++) {
  console.log("🏳️");
}

const daysOfWeek = [
  "domenica",
  "lunedi",
  "martedi",
  "mercoledi",
  "giovedi",
  "venerdi",
  "sabato",
];
const dayIndex = now.getDay();
console.log(daysOfWeek[dayIndex + 1]);
