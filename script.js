var learnmore = document.getElementById("btn-learnmore")
var email = document.getElementById("email").value
var submitBtn = document.getElementById("btn-submit")
$('#myModal').modal({ show: false });

//trigger when form is submitted
$("#email-submit-form").submit(function (e) {
  console.log("Submitted");
  $('#myModal').modal('show');

  return false;
});
learnmore.addEventListener("click", () => {
  alert("Learn more isn't paired yet!")
})

submitBtn.addEventListener("click", () => {
  //$('#myModal').modal('show');

})