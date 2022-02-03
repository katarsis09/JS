let a = [];
let n = -3;
let m = -10;
let count = 50;

let min = Math.min(n, m);
let max = Math.max(n, m);

for (let i = n; i < count; ++i) {
  a.push(Math.round(Math.random() * (max - min) + min));
}

console.log(a);
