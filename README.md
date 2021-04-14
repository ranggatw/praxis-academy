# Materi Pembelajaran "Enterprise Front End Developer"

# Minggu 01

## Hari 1: Ekosistem dan Pemrograman Dasar JavaScript

### Tujuan

1. Siswa bisa memahami keterkaitan antara bahasa pemrograman dengan _compiler/interpreter_.
2. Siswa memahami komponen dari peranti pengembangan (_development tools_) dan bisa mencari komponen-komponen untuk suatu bahasa pemrograman tertentu.
3. Siswa memahami keterkaitan antara ECMAScript, JavaScript, dan Node.js,
4. Siswa memahami keterkaitan antara Browser, HTML, CSS, JavaScript.
5. Siswa mampu menginstall Visual Studio Code serta plugin untuk peranti pengembangan JavaScript. Siswa juga dibebaskan menggunakan editor teks maupun IDE lainnya.
6. Siswa memahami, mampu membuat, serta menjalankan _source code_ JavaScript untuk sisi client (menggunakan _browser_).
7. Siswa memahami struktur dasar _source code_ dalam bahasa pemrograman JavaScript untuk sisi _client_ (_browser_).
8. Siswa memahami dan mampu menggunakan konstruksi dasar JavaScript untuk mengimplementasikan algoritma sederhana.

### Pembahasan

1. Development tools dan komponen-kompponennya.
2. Ekosisitem JavaScript: ES, JS, Browser, HTML, CSS.
3. Dasar-dasar JavaScript:
   - JavaScript untuk browser dan di luar browser
   - Konstruksi dasar bahasa pemrograman JavaScript: sintaksis dasar, komentar, variabel, tipe data, ekspresi, operator, pengenalan obyek, literal.

### Pembelajaran

```
Materi dan Penjelasan
```

1. Keterkaitan antara [bahasa pemrograman](https://en.wikipedia.org/wiki/Programming_language), [compiler](https://en.wikipedia.org/wiki/Compiler), dan [interpreter](<https://en.wikipedia.org/wiki/Interpreter_(computing)>).
2. [How Can We Define a Programming Language](https://cs.lmu.edu/~ray/notes/plspec/) menjelaskan keterkaitan antara spesifikasi bahasa pemrograman dengan _reference implementation_ dalam bentuk _compiler_ maupun _interpreter_. [Halaman Wikipedia untuk spesifikasi bahasa pemrograman](https://en.wikipedia.org/wiki/Programming_language_specification) menjelaskan tentang gambaran umum spesifikasi berbagai bahasa pemrograman.
3. Komponen dari [peranti pengembangan (_development tools_)](https://en.wikipedia.org/wiki/Programming_tool).
4. Spesifikasi [ECMASCript / JavaScript](https://www.ecma-international.org/publications/standards/Stnindex.htm) - lihat di ECMAScript. Lihat juga [penjelasan di Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#JavaScript_and_the_ECMAScript_Specification) tentang ECMAScript dan JavaScript
5. Keterkaitan antara HTML, CSS, dan JavaScript dijelaskan pada [blog ini](https://blog.codeanalogies.com/2018/05/09/the-relationship-between-html-css-and-javascript-explained/) dan [jawaban di StackOverflow ini](https://stackoverflow.com/questions/38834375/relationship-between-html-and-javascript-the-basics-of-frontend-development). Tambahan untuk pengetahuan: [How Browsers Work: Behind the scenes of modern web browsers](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/).
6. Instalasi [Visual Studio Code serta plugin untuk peranti pengembangan JavaScript](https://code.visualstudio.com/docs/languages/javascript).
7. [JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) memberikan gambaran singkat tentang konstruksi dasar dari JavaScript untuk sisi front end.
8. [Eloquent JavaScript](https://eloquentjavascript.net/) - Introduction, bab 1 (Values, Types, and Operators), dan bab 2 (Program Structure) memberikan penjelasan yang memadai tentang konstruksi dasar dari JavaScript.
9. [Materi di Mozilla Developer Network sebagai referensi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types).

```
Latihan
```

1. [Install Visual Studion Code dan konfigurasikan untuk JavaScript](https://code.visualstudio.com/Docs/languages/javascript).
2. Kerjakan no 7 dan 8.

```
Kasus
```

Kerjakan `Exercises` pada [buku Eloquent JavaScript](https://eloquentjavascript.net/) - bab 2 (Program Structures).

## Hari 2: Konstruksi Dasar JavaScript

### Tujuan

1. Siswa memahami dan mampu menggunakan berbagai statement untuk:
   - pengendali alur
   - iterasi dan looping

### Pembahasan

1. Pengandali alur:
   - if .. else
   - switch
2. Iterasi dan _looping_
   - for
   - while
   - do ... while
   - break/continue

### Pembelajaran

```
Materi dan Penjelasan
```

1. [Materi di MDN tentang pengendali alur](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).
2. [Materi di MDN tentang iterasi dan _looping_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

```
Latihan
```

Kerjakan contoh-contoh yang dibahas pada materi dan penjelasan di atas.

```
Kasus
```

Kerjakan [kasus yang ada di w3resource.com](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php).

## Hari 3: Function / Fungsi di JavaScript

### Tujuan

1. Siswa cara mendeklarasikan _function_ di JS serta cara menggunakannya
2. Siswa memahami dan mampu menggunakan berbagai jenis _function_ yang ada di JS.

### Pembahasan

1. Pengertian fungsi
2. Definisi dan pemanggilan fungsi
3. Ruang lingkup variabel
4. _Nested functions_ dan _closure_
5. Fungsi _arrow_
6. Fungsi _hoisted_

### Pembelajaran

```
Materi dan Penjelasan
```

1. [Materi sangat mendasar tentang fungsi](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99).
2. Materi tentang [Functions](https://eloquentjavascript.net/03_functions.html) di Eloquent JavaScript serta [materi tentang _function_ di MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) memberikan gambaran yang memadai tentang _function_ di JS.
3. Baca juga tentang [variable hoisitng](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types) serta _function hoisting_.
4. [Self executing function](https://www.tutorialspoint.com/Why-are-parenthesis-used-to-wrap-a-JavaScript-function-call).
5. [Nested functions dan closure di javascript.info](https://javascript.info/closure).
6. Pemahaman arrow function lebih dalam akan bisa diperoleh saat sudah mempelajari paradigma pemrograman dan struktur data, tetapi untuk saat ini silahkan dipelajari [artikel pengantar ini terlebih dahulu](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/) dan [artikel ini](https://www.geeksforgeeks.org/arrow-functions-in-javascript/).
7. Artikel tentang [function hoisting](https://bitsofco.de/variable-and-function-hoisting-in-es2015/).

```
Latihan
```

Kerjakan contoh-contoh yang ada pada materi dan penjelasan di atas, minimal satu kode sumber
untuk satu point materi dan penjelasan di atas dan harus yang menunjukkan pembahasan utama. Contoh,
saat membahas tentang closure di materi nomor 5, kerjakan minimal satu contoh yang menampilkan penuh tentang closure.

```
Kasus
```

Kerjakan kasus yang ada pada [latihan ini](https://www.teaching-materials.org/javascript/exercises/functions) minimal 2. Lengkapi sampai ke file HTML-nya sehingga untuk menjalankan cukup memanggil file HTML dari browser melalui protokol file:///lokasi/file/html

## Hari 4: String dan Regular Expression

### Tujuan

1. Siswa memahami dan mampu memanipulasi string menggunakan JavaScript
2. Siswa memahami pengertian _regular expression_ serta mampu menggunakannya pada kode sumber yang dibuat untuk mengenali pola dan melakukan sesuatu terkait pola yang ditemukan tersebut.

### Pembahasan

1. Obyek String di JavaScript
2. Gambaran umum RegExp
3. Pola dan RegExp
4. Karakter-karakter RegExp dan penggunaannya

### Pembelajaran

```
Materi dan Penjelasan
```

1. [Dokumentasi di MDN tentang pengolahan teks / string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting).
2. [Dokumentasi di MDN tentang RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

```
Latihan
```

Kerjakan contoh-contoh yang ada pada materi dan penjelasan

```
Kasus
```

1.  Buat input HTML yang meminta input berupa teks, setelah itu deteksi menggunakan _regular
    expression_ apakah teks tersebut adalah plat nomor kendaraan di Indonesia atau bukan. Gunakan alert
    untuk menampilkan hasilnya.
2.  Buat input HTML yang meminta input berupa alamat email, setelah itu deteksi menggunakan _regular
    expression_ apakah teks tersebut adalah email atau bukan. Jika, email, tampilkan pada alert:

        Halo, username anda adalah *username*, domain anda adalah *domain.tld*.

Contoh, jika e-mail adalah namaku@praxisacademy.id, maka alert yang akan muncul adalah:

    Halo, usernama anda adalah namaku, domain anda adalah praxisacademy.id

## Hari 5: Struktur Data di JavaScript

### Tujuan

1. Siswa memahami dan mampu menggunakan konstruksi Object di JS.
2. Siswa memahami dan mampu menggunakan Array di JS.
3. Siswa memahami dan mampu menggunakan Interables di JS.
4. Siswa memahami dan mampu menggunakan Map dan Set di JS.
5. Siswa memahami dan mampu menggunakan WeakMap dan WeakSet.
6. Siswa memahami dan mampu menggunakan data Date dan Time.

### Pembahasan

1. Obyek
2. Array
3. Iterables
4. Map dan Set
5. WeakMap dan WeakSet
6. Date dan Time

### Pembelajaran

```
Materi dan Penjelasan
```

1. [Objects and Arrays](https://eloquentjavascript.net/04_data.html), lihat juga [Object.keys. values, entries](http://javascript.info/keys-values-entries).
2. [Iterables](http://javascript.info/iterable)
3. [Map dan Set](http://javascript.info/map-set)
4. [WeakMap dan WeakSet](http://javascript.info/weakmap-weakset)
5. [Date dan Time](http://javascript.info/date).

```
Latihan
```

Selesaikan semua _tasks_ dari **javascript.info** untuk masing-masing pembahasan (no 1 - 5) di atas.

```
Kasus
```

1. Buat program untuk menjumlahkan 2 buah matriks
2. Buat program kamus Inggris-Indonesia menggunakan Map. Fasilitas program tersebut adalah:
   - mencari kata dan menampilkan artinya
   - menambahkan kata dan artinya
   - menghapus kata serta artinya.
