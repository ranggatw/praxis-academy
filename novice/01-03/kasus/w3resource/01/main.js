let num1, num2;

// Masukkan nomor :
num1 = window.prompt("masukkan angka pertama : ", "10");
num2 = window.prompt("masukkan angka kedua : ", "10");

// if (parseInt(num1) > parseInt(num2)) {
//   // document.write("angka " + num1);
//   console.log("asdsadsaddasdsadsad");
// }

if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log(
    "Angka yang lebih besar dari " +
      num1 +
      " dan " +
      num2 +
      " adalah " +
      num1 +
      "."
  );
} else if (parseInt(num2, 10) > parseInt(num1, 10)) {
  console.log(
    "Angka yang lebih besar dari " +
      num1 +
      " dan " +
      num2 +
      " adalah " +
      num2 +
      "."
  );
} else {
  console.log("Nilai " + num1 + " dan " + num2 + "adalah sama-sama.");
}
