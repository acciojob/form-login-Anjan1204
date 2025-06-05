function getFormvalue(event) {
  event.preventDefault(); // prevent form from refreshing page

  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  const fullName = `${firstName} ${lastName}`.trim();

  if (!firstName && !lastName) {
    alert("Please enter your first and last name.");
  } else {
    alert(fullName);
  }
}
