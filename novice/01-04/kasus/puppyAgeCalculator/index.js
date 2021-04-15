function calculateDogAge() {
  let myAge = document.getElementById("years").value;
  let dogAge = myAge * 7;
  alert(dogAge + " years old in human years.");
  document.getElementById("form").reset();
}

