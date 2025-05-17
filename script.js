const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailMessage = document.getElementById("email_message");
const passwordMessage = document.getElementById("password_message");
const confirmationMessage = document.getElementById("confirmation_message");
const submitBtn = document.getElementById("submitBtn");

// Email validation
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (email.length <= 3 || !email.includes("@") || !email.includes(".")) {
    emailMessage.textContent = "Make sure email is more than 3 characters and has @ and a .";
  } else {
    emailMessage.textContent = "";
  }
  updateConfirmationMessage();
});

// Password validation
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  if (password.length <= 8) {
    passwordMessage.textContent = "Make sure password is more than 8 characters.";
  } else {
    passwordMessage.textContent = "";
  }
  updateConfirmationMessage();
});

// Update confirmation message if all fields are valid
function updateConfirmationMessage() {
  if (
    emailMessage.textContent === "" &&
    passwordMessage.textContent === "" &&
    emailInput.value !== "" &&
    passwordInput.value !== ""
  ) {
    confirmationMessage.textContent = "All good to go!";
    confirmationMessage.style.color = "green";
  } else {
    confirmationMessage.textContent = "";
  }
}

// Submit logic
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailValid = emailInput.value.length > 3 && emailInput.value.includes("@") && emailInput.value.includes(".");
  const passwordValid = passwordInput.value.length > 8;

  if (!emailValid || !passwordValid) {
    passwordMessage.textContent = "Make sure password is more than 8 characters."; 
    emailMessage.textContent = "Make sure email is more than 3 characters and has @ and a .";
    return;
  }

  const confirmed = confirm("Are you sure you want to submit?");
  if (confirmed) {
    alert("Successful signup!");
    
  } else {
    // Clear form
    emailInput.value = "";
    passwordInput.value = "";
    emailMessage.textContent = "";
    passwordMessage.textContent = "";
    confirmationMessage.textContent = "";
  }
});
