document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const image = document.getElementById("image").files[0]; // grabs the uploaded file
  const response = document.getElementById("responseMessage");

  // Simple form validation
  if (!name || !email || !subject || !message || !image) {
    response.textContent = "⚠️ Please fill in all fields.";
    response.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    respogetElementById("contactForm").reset();
});nse.textContent = ⚠️ Please enter a valid email address.";
    response.style.color = "red";
    return;
  }

  // If all is valid
  response.textContent = "✅ Message sent successfully! Thank you for contacting TechNova Solutions.";
  response.style.color = "green";

  // Clear form after submission
  document.
