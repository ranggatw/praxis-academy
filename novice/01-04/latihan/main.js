// Belajar pengenalan function

// Function tanpa parameter
function getnName() {
  let name = "rangga";
  console.log(name);
}
getnName();

// Function dengan parameter
function getNama(nama) {
  console.log(nama);
}
getNama("rangga-tri-wibowo");

// Function with Scope
function multiples() {
  let a = "ini adalah variable a";
}
// console.log(a); // akan menyebabkan error

// Funtion dengan Return Value
let a = 20;

function nilaiA() {
  return a;
}
console.log(a);

let b = 30;
function valA() {
  if (b === 30) {
    return "tiga puluh";
  } else {
    return "nilai bukan a";
  }
}

console.log(valA());

// Memasukkan function menggunkan variable (Anonymous Function)
let funcA = function () {
  console.log("Nilai A");
};

funcA();

// Penggunaan arrow function
let funcB = () => {
  console.log("Nilai B");
};

funcB();

// Nested Function => fungsi merekam nilai / variable yang ada di dalam fungsi

// Closure Pada javascript
function valC() {
  let a = 12;
  function valD() {
    let n = 10;
    console.log("Nilai C", +n + a);
  }
  return valD();
}
valC();



// 
