//ImPure Function

// let PI = 3.14;
// const calculateArea = (radius) => radius * radius * PI;

// console.log(calculateArea(10));
// 314.0

// Pure
let PI = 3.14;
const calculateAreaFix = (radius, pi) => radius * radius * pi;
console.log(calculateAreaFix(10, PI));
