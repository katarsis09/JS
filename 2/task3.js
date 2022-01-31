let n = 2;
let m = 5;

let range = Math.abs(m - n); 
let random = Math.round(Math.random() * range);
let min = Math.min(n, m);

let result = min + random; 

if (result % 2 !== 0) {
  console.log(result)
} else {
  console.log(result+1)
}