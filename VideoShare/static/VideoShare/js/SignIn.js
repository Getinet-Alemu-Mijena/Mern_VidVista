document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("login-form");
    form.addEventListener("submit", function(event){
          // Prevent the form from being submitted by default
          event.preventDefault();
          // Clear all previous error messages
          clearErrorMessages();
  
          let isValid = true;

          //Code for user name validation

        const userNameField = document.getElementById("username");
        const userNameError = document.getElementById("username-error");
        if(userNameField.value.length == 0){
            isValid = false;
            displayError(userNameError, "This field is required");
        }

        else if(userNameField.value.length < 5){
            isValid = false;
            displayError(userNameError, "User name must be at least 5 character.");
        }

        else if(!isValidFirstName(userNameField.value)){
            isValid = false;
            displayError(userNameError, "First name shouldn't contain numbers or special character like @,@,$ etc.");
        }

        const passwordField = document.getElementById("password");
        const passwordError = document.getElementById("password-error");
        if(passwordField.value.length == 0){
            isValid = false;
            displayError(passwordError, "This field is required");
        }

        else if(passwordField.value.length < 8 || passwordField.value.length > 8){
            isValid = false;
            displayError(passwordError, "Password must be 8 character.");
        }


          if (isValid) {
            // If all validations pass, you can submit the form here
            form.submit();
        }
    });

    //   username validation regex 
     function isValidFirstName(username) {
        const userNameRegex = /^[A-Za-z\s]+$/;
        return userNameRegex.test(username);
    }



     //fuction to diplay error
     function displayError(element, message) {
        element.textContent = message;
        element.style.display = "block";
    }
    //fuction to diplay clearError
    function clearErrorMessages() {
        const errorMessages = document.getElementsByClassName("error");
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].textContent = "";
            errorMessages[i].style.display = "none";
        }
    }
});