// The class syntax
/*
  class MyClass {
    // class methods
    constructor() {....}
    method1() {....}
    method2() {....}
    method3() {....}
    method4() {....}
  .....
  }
*/

// Class if a FUNCTION

// Class Syntax
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

let user = new User("Rangga");
user.sayHi();
