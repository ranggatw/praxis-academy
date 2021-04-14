var x = 0;
var y = -1;
var z = 4;
// Cek jika x lebih besar dari y dan z
if (x > y && x > z) {
  // cek jika y lebih besar dari z
  if (y > z) {
    console.log(x + ", " + y + ", " + z); // 0 , -1, 4
  } else {
    console.log(x + ", " + z + ", " + y); // 0, 4, -1
  }
} else if (y > x && y > z) {
  // atau jika y lebih besar dari x dan z
  if (x > z) {
    console.log(y + ", " + x + ", " + z); // -1, 0, 4
  } else {
    console.log(y + ", " + z + ", " + x); // -1, 4, 0
  }
} else if (z > x && z > y) {
  // atau jika z lebih besar dari x dan y
  if (x > y) {
    console.log(z + ", " + x + ", " + y); // 4, 0, -1
  } else {
    console.log(z + ", " + y + ", " + x); // 4, -1, 0
  }
}
