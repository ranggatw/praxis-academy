/*
  Belajar menggunkan console.log, variable, assigment variable, function, condition
*/

// Menampilkan nama
console.log('Rangga Tri Wibowo')
console.log('-----------------')
let nama;
nama = 'rangga';
console.log(nama)


// Menampilkan alamat
console.log('Bantul Yogyakarta')
console.log('-----------------')
let tinggal;
tinggal = 'bantul yogyakarta'
console.log(tinggal)

// Menampilkan kegiatan
console.log('Belajar coding')
console.log('-----------------')
let kegiatan;
kegiatan = 'belajar coding'
console.log(kegiatan)

// Menampilkan Umur
console.log(21)
console.log('-----------------')
let umur;
umur = 21;
console.log(umur);

console.log('Nama saya ' + nama + ', saya tinggal di ' + tinggal + ', umur saya ' + umur + ', kegiatan sehari-hari saya adalah ' + kegiatan);

function dataDiri() {
  let result = [nama + ' ' + tinggal + ' ' + kegiatan]
  for (res of result) {
    console.log('data diri saya : ' + result)
  }
}
dataDiri();

function salam() {
  let jam = 8
  if (jam < 12) {
    console.log('Selamat Pagi')
  } else if (jam >= 12 && jam < 15) {
    console.log('Selamat Siang')
  } else {
    console.log('Selamat Petang')
  }
}

salam();