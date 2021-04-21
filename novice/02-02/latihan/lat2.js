// Rewriting class User in pure functions

// 1.Create constructor function
function User(name) {
  this.name = name;
}

// a function prototypes has 'constructor' property by default,
// so we don't need create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  console.log(this.name);
};

// Usage :
let user = new User("Rangga");
user.sayHi();
