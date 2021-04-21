// Example for user.name implementing using get/set

class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Nama terlalu pendek.");
      return;
    }
    this._name = value;
  }
}

let user = new User("Rangga");
console.log(user.name); // Rangga

user = new User(""); // name to short
