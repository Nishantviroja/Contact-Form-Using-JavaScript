// for password and re-password 

var password = document.getElementById("password")
  , re_password = document.getElementById("re_password");

function validatePassword() {
  if (password.value != re_password.value) {
    re_password.setCustomValidity("Passwords Don't Match");
  } else {
    re_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
re_password.onkeyup = validatePassword;

// For showing Form Data.....After submit  ;)

function takevalue()
        {
            var fname=document.getElementById("fname").value;
            var lname=document.getElementById("lname").value;
            var email=document.getElementById("email").value;
            document.write("Your Info  is succesfully Recevied : <BR><BR>"+"Name : "+fname+" "+lname+"<br>");
            
            document.write("  Email   : "+email+"<br>");
        }
