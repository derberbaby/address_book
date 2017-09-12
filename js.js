
$(document).ready(function() {

  $('form').submit(function() {
    var fname = $('input[name="first_name"]').val()
    var lname = $('input[name="last_name"]').val()
    var email = $('input[name="email"]').val()
    var contact = $('input[name="contact"]').val()
    var  htmlString = "<tr><td>"+fname+"</td><td>"+lname+"</td><td>"+email+"</td><td>"+contact+"</td></tr>";
    $('#info').append(htmlString);
    return false;
  })

})
