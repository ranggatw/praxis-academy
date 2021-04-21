// Buat map terlebih dahulu
let kamus = new Map();

// Masukkan value dari kata terjemahan
kamus.set("book", "buku");
kamus.set("table", "meja");
kamus.set("chair", "kursi");
kamus.set("board", "papan");

// Cek ada belum kata yang di cari
if (kamus.has("book")) {
  console.log("ada");
}

//

/*
let cek = (us, id) => {
  if (kamus.set(us)) {
    console.log("ada kata " + us + "dengan arti " + id);
  } else {
    console.log("kata yang di cari tidak ditemukan");
  }
};

function translate(us, id) {
  let tambahkata = kamus.set(us, id);
  cek;
}

translate("book", "buku");



*/
