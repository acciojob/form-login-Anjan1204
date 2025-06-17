function getFormvalue(e) {
  e.preventDefault(); // Prevent page refresh

  const fname = document.querySelector('[name="fname"]').value.trim();
  const lname = document.querySelector('[name="lname"]').value.trim();

  if (!fname && !lname) {
    alert("Please enter your name.");
    return;
  }

  alert(fname + " " + lname);
}
