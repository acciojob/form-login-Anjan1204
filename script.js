function getFormvalue(event) {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById("nameForm");
  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();

  if (!fname && !lname) {
    alert("Please enter your first and last name.");
    return;
  }

  alert(`${fname} ${lname}`);
}

document.getElementById("nameForm").addEventListener("submit", getFormvalue);
