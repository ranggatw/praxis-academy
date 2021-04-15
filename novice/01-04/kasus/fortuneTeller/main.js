function tellFortune() {
  let jobTitle = document.getElementById("jobTitle").value;
  let location = document.getElementById("location").value;
  let partner = document.getElementById("partner").value;
  let numKids = document.getElementById("numKids").value;
  alert(
    "You will be a " +
      jobTitle +
      " in " +
      location +
      " and maried to " +
      partner +
      " " +
      " with " +
      numKids +
      " kids."
  );
}

function resetForm() {
  document.getElementById("form").reset();
}
