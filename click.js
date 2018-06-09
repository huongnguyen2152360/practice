/* Variables */
const signupButton = document.getElementById("signup-button"),
      loginButton = document.getElementById("signin-button"),
      userForms = document.getElementById("user-options-form")

/* Add event listener to the sign-up button */
signupButton.addEventListener("click", function () {
  userForms.classList.remove("bounceRight")
  userForms.classList.add("bounceLeft")
}, false)

/* Add event listener to the login button */
loginButton.addEventListener("click", function () {
  userForms.classList.remove("bounceLeft")
  userForms.classList.add("bounceRight")
}, false)