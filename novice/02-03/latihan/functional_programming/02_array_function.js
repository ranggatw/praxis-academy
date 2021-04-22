// Array Functions

let meetups = [
  { name: "JS", isActive: true, members: 450 },
  { name: "Angular", isActive: true, members: 900 },
  { name: "Node", isActive: false, members: 900 },
];

// Imperative--focuses on describing how program operates
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++) {
  let m = meetups[i];
  if (m.isActive == false) {
    activeMeetups.push(m);
  }
}

console.log(activeMeetups);
// Output : array of 1 elements where isActive is false;

// Declarative--- Focuses on what the program should accomplish
let activeMeetupsFP = [];
activeMeetupsFP = meetups.filter((m) => {
  return m.isActive;
});

console.log(activeMeetupsFP);
// Output : 2 array of elements where isActive is true
