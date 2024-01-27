document.addEventListener("DOMContentLoaded", () => {
  const menubutton = document.querySelector("#menu-btn");
  const closebutton = document.querySelector("#close-btn");
  const sidebar = document.querySelector("aside");

  menubutton.addEventListener("click", () => {
    sidebar.style.display = "block";
  });

  closebutton.addEventListener("click", () => {
    sidebar.style.display="none";
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const menubutton = document.querySelector("#login");
  const closebutton = document.querySelector("#formclose-btn");
  const form = document.querySelector(".form-container");

  menubutton.addEventListener("click", (event) => {
     event.preventDefault();
    form.style.display = "block";
  });

  closebutton.addEventListener("click", (event) => {
     event.preventDefault();
    form.style.display = "none";
  });
});

function changeSelection(clickedElement,event)
{
  event.preventDefault();
 var navLinks=document.querySelectorAll('.link');
 navLinks.forEach(function(li) {
  li.classList.remove('active');
 })
 clickedElement.classList.add('active');
}
/*===============validate form========*/
function validateusername(){
      var username=document.getElementById("username").value;
      var error_username=document.getElementById("error_username");
      error_username.innerHTML="";

      var nameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      if(username === ""){
        error_username.innerHTML="*username is required";
      }
      else if(!nameRegex.test(username)){
        error_username.innerHTML="*enter valid username";
      }
}
var validateEmail = (emailid) => {
  return String(emailid)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateemail(){
       var email=document.getElementById("emailid").value;
       var error_email=document.getElementById("error_email");
       error_email.innerHTML="";

       if(email===""){
        error_email.innerHTML="*emailId is required";
       }
       else if(!validateEmail(email)){
         error_email.innerHTML="*please enter valid Email Id";
       }

}

function validatepassword(){
      var password=document.getElementById("password").value;
      var error_password=document.getElementById("error_password");
      error_password.innerHTML="";

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

       if (password === "") {
         success = false;
         error_password.innerHTML = " * Password is required";
       } else if (password.length < 8) {
         success = false;
         error_password.innerHTML =
           " * Password must be at least 8 characters long.";
       }
       // Check if the password contains at least one uppercase letter, one lowercase letter, and one digit
       else if (!passwordRegex.test(password)) {
         success = false;
         error_password.innerHTML =
           "* Password must contain at least one uppercase letter, one lowercase letter, and one digit";
       } 

}


function validateForm() {
  var success = true;

  // Validate username
  var username = document.getElementById("username").value;
  var errorUsername = document.getElementById("error_username");
  errorUsername.innerHTML = "";
  var nameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  if (username === "") {
    success = false;
    errorUsername.innerHTML = "* Username is required";
  } else if (!nameRegex.test(username)) {
    success = false;
    errorUsername.innerHTML = "* Enter a valid username";
  }

  // Validate email
  var email = document.getElementById("emailid").value;
  var errorEmail = document.getElementById("error_email");
  errorEmail.innerHTML = "";
  if (email === "") {
    success = false;
    errorEmail.innerHTML = "* Email is required";
  } else if (!validateEmail(email)) {
    success = false;
    errorEmail.innerHTML = "* Please enter a valid Email";
  }

  // Validate password
  var password = document.getElementById("password").value;
  var errorPassword = document.getElementById("error_password");
  errorPassword.innerHTML = "";
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (password === "") {
    success = false;
    errorPassword.innerHTML = " * Password is required";
  } else if (password.length < 8) {
    success = false;
    errorPassword.innerHTML = " * Password must be at least 8 characters long.";
  } else if (!passwordRegex.test(password)) {
    success = false;
    errorPassword.innerHTML =
      "* Password must contain at least one uppercase letter, one lowercase letter, and one digit";
  }

  // Validate user selection
  var userSelection = document.getElementById("User").value;
  var errorUserSelection = document.getElementById("error_selectOption");
  errorUserSelection.innerHTML = "";
  if (userSelection === "") {
    success = false;
    errorUserSelection.innerHTML = "* Please select a user type";
  }

  // If all validations pass, submit the form
  return success;
}

