let meetups = [
  { name: "JavaScript", isActive: true, members: 700 },
  { name: "Angular", isActive: true, members: 900 },
  { name: "Node", isActive: false, members: 600 },
  { name: "React", isActive: true, members: 500 },
];

let sumFPChain = meetups
  .filter((m) => {
    // fillter yang active
    return m.isActive; // mengembalikan 3 nilai true
  })
  .map((m) => {
    return m.members - 0.1 * m.members;
    // looping members dan (members*0.1) lalu di kurangi members yang ada
    // console.log(m.members);
  })
  .reduce((acc, m) => {
    // console.log(acc);
    // acc adalah akumulasi nilai dari map lalu di tambah dengan
    return acc + m;
  }, 0);

console.log(sumFPChain);
// Output will be 1890

// Tanyakan sama mas hendi
