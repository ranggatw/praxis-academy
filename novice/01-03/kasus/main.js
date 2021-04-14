// Block JavaScript Soal

// If Statement
console.log("-- > IF Statement");
let a = 10;
if (a < 10) {
  console.log("Kurang dari 10");
} else if (a > 10 && a <= 100) {
  console.log("Bilangan melebihi dari 10");
} else {
  console.log("Bilangan besar sekali lebih dari 100");
}

// Switch Statement
console.log("-- > Switch Statement");
let fruit = "Banana";
switch (fruit) {
  case "Orange":
    console.log("Adalah Buah Jeruk");
    break;
  case "Apple":
    console.log("Adalah Buah Apples");
    break;
  case "Banana":
    console.log("Adalah Buah Pisang");
    break;
  default:
    console.log("buah tidak di jual");
}

// Loops and Iteration

// For
console.log("--> For Loop");
let jalan = 0;
for (jalan = 1; jalan < 6; jalan++) {
  console.log("Kamu akan berjalan " + jalan + " langkah");
}

// Do While
console.log("--> Do While ");
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

// While
console.log("--> While");
let n = 0;
let x = 0;
while (n < 4) {
  n++;
  x += n;
  console.log(x);
}

// Break Statement
console.log("--> Break ");
let d;
for (d = 0; d < 10; d++) {
  if (d === 3) {
    break;
  }
  console.log("The number is " + d);
}

// Continue Statement
console.log("-- > Continue");
let p = 0;
let q = 0;
while (p < 5) {
  p++;
  if (p === 3) {
    // continue;
  }
  q += p;
  console.log(q);
}

// Block VUE JS Initiate

console.log("-- > Vue Js");
var app = new Vue({
  el: "#app",
  data: {
    message: "hello vue",
    bootcamp: [
      { kelas: "Fronted End" },
      { kelas: "Backend" },
      { kelas: "Python" },
      { kelas: "Fullstack" },
    ],
  },
  condition: "60",
});
