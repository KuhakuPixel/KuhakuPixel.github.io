var learnmore = document.getElementById("btn-learnmore")
var email = document.getElementById("email").value
var submit = document.getElementById("btn-submit")
var emailSubmitForm = document.getElementById("email-form");
learnmore.addEventListener("click", () => {
  alert("Learn more isn't paired yet!")
})

submit.addEventListener("click", () => {
  //alert("Your email has been registered.")
})
emailSubmitForm.addEventListener("submit", () => {
  alert("Your  has been registered.");
});