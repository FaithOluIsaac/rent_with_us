document.getElementById("rentalForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let form = e.target;
  let requiredFields = [
    "fullName",
    "dob",
    "phone",
    "email",
    "propertyAddress",
    "moveInDate",
    "signature",
    "signatureDate"
  ];
  let valid = true;

  // Validate required fields
  requiredFields.forEach((id) => {
    let el = document.getElementById(id);
    if (!el.value.trim()) {
      el.classList.add("error");
      valid = false;
    } else {
      el.classList.remove("error");
    }
  });

  if (!valid) {
    alert("⚠️ Please fill in all required fields.");
    return;
  }

  // Collect all form data
  const formData = {};
  [...form.elements].forEach((el) => {
    if (el.id) formData[el.id] = el.value;
  });

  console.log("Form Submitted:", formData);

  // Show confirmation
  document.getElementById("successMessage").innerText =
    "✅ Your rental application has been submitted successfully!";

  // Reset form
  form.reset();
});
