var learnmore = document.getElementById("btn-learnmore")
var email = document.getElementById("email").value
var submitBtn = document.getElementById("btn-submit")

// get all register buttons by class name

var registerNowButtons = document.getElementsByClassName("register-button");

//trigger when form is submitted
$("#email-submit-form").submit(function (e) {
  console.log("Submitted");
  $('#emailSubmittedModal').modal('show');

  return false;
});

//trigger when registring for workshop
$("#workshop-register-form").submit(function (e) {
  console.log("register");
  //$('#registerModal').modal('show');

  return false;
});
//register events for all registernow button
for (var i = 0; i < registerNowButtons.length; i++) {
  registerNowButtons[i].addEventListener("click", () => {
    alert("opening modal");
    $('#exampleModal').modal('show');
  });

}
learnmore.addEventListener("click", () => {
  alert("Learn more isn't paired yet!")
});
