function getFormvalue(event) {
  event.preventDefault(); // Prevent page refresh

  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  if (!firstName && !lastName) {
    alert("Please enter both First Name and Last Name.");
    return;
  }

  const fullName = `${firstName} ${lastName}`.trim();
  alert(fullName);
}
