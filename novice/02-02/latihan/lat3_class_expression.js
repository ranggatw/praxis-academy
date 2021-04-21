// Class expression

let User = class {
  sayHi() {
    console.log("Hello");
  }
};

// Class expression with name, its visible inside the class only
let Admin = class MyClass {
  sayHello() {
    console.log(MyClass);
  }
};

new Admin().sayHello(); // works,shows MyClass defination

// =========================

// Create Class a dynamicall 'on-demmand'
function makeClass(phrase) {
  // declare a class and retutn it
  return class {
    sayBoo() {
      console.log(phrase);
    }
  };
}

// Create new class
let SuperUser = makeClass("Hello my Boo");
new SuperUser().sayBoo();
