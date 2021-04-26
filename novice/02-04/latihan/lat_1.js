//  Contoh alur Asynchronus pada javascript

console.log("Baris ekseskusi 1");
console.log("Baris ekseskusi 2");
console.log("Baris ekseskusi 3");
console.log("Baris ekseskusi 4");
console.log("Baris ekseskusi 5");

// Baris akan akan di ekseskusi sesuai dengan urutan baris dari atas ke bawah. (synchronus)
// Namun ada kala kita harus menggunakannya secara tidak berurutan atau (asynchronus)
console.log("=====================");

console.log("Baris ekseskusi 1");
setTimeout(() => {
  console.log("Baris ekseskusi 2");
}, 1000);
console.log("Baris ekseskusi 3");
console.log("Baris ekseskusi 4");
console.log("Baris ekseskusi 5");

// dengan memberikan timeout pada console baris ke 2 selama 1 detik maka kode yang lain akan di eksekusi terlebih dahulu dan baris kedua akan di eksekusi setelah waktu mencapai 1 detik
