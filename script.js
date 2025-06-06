function getFormvalue(event) {
  event.preventDefault(); // Prevent page reload

  const firstName = document.querySelector('[name="fname"]').value.trim();
  const lastName = document.querySelector('[name="lname"]').value.trim();

  const fullName = `${firstName} ${lastName}`;
  alert(fullName);
}
