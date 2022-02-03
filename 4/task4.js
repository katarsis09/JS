let week = [ "понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let day = "суббота";
let array = [];
let indexDay = week.indexOf(day); //index of day Saturday

//1-31
for (let i = 1; i <= 31; i++) {
  array.push(i);
}

for (let i = 0; i < week.length; i++) {
  if (week[i] === day) {
    indexDay = i;
  }
}
for (let e of array) {
  const y = (indexDay + e - 1) % 7;
  console.log(`${e} января, ${week[y]}`);
}
