$(document).ready(function(){
  $("#formOne").submit(function(event){
    var preferredTitleInput = $('input#preferredTitle').val();
    var firstNameInput = $('input#firstName').val();
    var lastNameInput = $('input#lastName').val();
    var eventNameInput = $('input#eventName').val();
    var donationAmountInput = $('input#donationAmount').val();
    var donationUseInput = $('input#donationUse').val();
    var person2Input = $('input#person2').val();

    $(".preferredTitle").append(preferredTitleInput);
    $(".firstName").append(firstNameInput);
    $(".lastName").append(lastNameInput);
    $(".eventName").append(eventNameInput);
    $(".donationAmount").append(donationAmountInput);
    $(".donationUse").append(donationUseInput);
    $(".person2").append(person2Input);

    $("#story").show();

    event.preventDefault();
  });
});
