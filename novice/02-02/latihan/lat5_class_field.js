// Class fields is a syntax that allows to add any properties

class User {
  name = "Rangga";

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

new User().sayHello(); // Hello, Rangga!

/* 
  Perbedaan penting dari class field adalah bahwa class field
  tersebut di tetapkan pada object individu, bukan User.prototype

*/

// Other Examples
class SuSer {
  // name = prompt("Name please?", "Ranggak");
  name = console.log("aktifkan comment di atas");
}

let suser = new User("rangga");
console.log(suser.name); // Rangga
