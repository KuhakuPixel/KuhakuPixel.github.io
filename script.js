var learnmore = document.getElementById("btn-learnmore")
var email = document.getElementById("email").value
var submit = document.getElementById("btn-submit")
var emailSubmitForm = document.getElementById("email-form");
var onEmailSubmitModal = document.getElementById("emailSubmitModal");
learnmore.addEventListener("click", () => {
  alert("Learn more isn't paired yet!")
})
emailSubmitForm.addEventListener("submit", () => {
  //alert("Test");
  var modalDocument = document.getElementById("emailSubmitModal");
  var emailSubmitModal = new bootstrap.Modal(modalDocument, {});
  //alert("Test");
  emailSubmitModal.show();
})
//catch the submit event of the email form to prevent reloading
//https://stackoverflow.com/questions/23507608/form-submission-without-page-refresh
$(document).ready(function () {
  $('#email-form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      url: $(this).attr('action') || window.location.pathname,
      type: "GET",
      data: $(this).serialize(),
      success: function (data) {
        // $("#form_output").html(data);
      },
      error: function (jXHR, textStatus, errorThrown) {
        alert(errorThrown);
      }
    });
  });
});

/*
// handle form submission before submmiting
// to prevent reloading on submit 
//https://stackoverflow.com/questions/1263852/prevent-form-redirect-or-refresh-on-submit
emailSubmitForm.submit(function () {
  var modalDocument = document.getElementById("emailSubmitModal");
  var emailSubmitModal = new bootstrap.Modal(modalDocument, {});
  //alert("Test");
  emailSubmitModal.show();
  return false;
});
*/
document.createElement("form").submit.call()
function EmailFormBeforeSubmit() {
  var modalDocument = document.getElementById("emailSubmitModal");
  var emailSubmitModal = new bootstrap.Modal(modalDocument, {});
  //alert("Test");
  emailSubmitModal.show();

}