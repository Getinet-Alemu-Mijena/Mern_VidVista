document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        // Prevent the form from being submitted by default
        event.preventDefault();
        // Clear all previous error messages
        clearErrorMessages();

        let isValid = true;

        //Validation for firstnameField

        const firstnameField = document.getElementById("firstname");
        const firstnameError = document.getElementById("firstname-error");
        if (firstnameField.value.length == 0) {
            isValid = false;
            displayError(firstnameError, "This field is required.");
        }
        else if (firstnameField.value.length < 5) {
            isValid = false;
            displayError(firstnameError, "First name must be at least 5 characters long.");
        }
        else if (firstnameField.value.length > 15) {
            isValid = false;
            displayError(firstnameError, "First name must be at most 15 characters long.");
        }

        else if (!isValidFirstName(firstnameField.value)) {
            isValid = false;
            displayError(firstnameError, "First name shouldn't contain numbers or special character like @,@,$ etc.");
        }

        //Validation of last name field
        const lastnameField = document.getElementById("lastname");
        const lastnameError = document.getElementById("lastname-error");

        if (lastnameField.value.length == 0) {
            isValid = false;
            displayError(lastnameError, "This field is required.");
        }

       else if (lastnameField.value.length < 5) {
            isValid = false;
            displayError(lastnameError, "Last name must be at least 5 character long.");
        }

        else if (lastnameField.value.length > 15) {
            isValid = false;
            displayError(lastnameError, "Last name must be at most 15 character long.");
        }

        else if (!isValidLastName(lastnameField.value)) {
            isValid = false;
            displayError(lastnameError, "Last name shouldn't contain numbers or special character like @,@,$ etc.")
        }

        //Validation for emailField
        const emailField = document.getElementById("email");
        const emailError = document.getElementById("email-error");
        if (emailField.value.length == 0) {
            isValid = false;
            displayError(emailError, "This field is required.")
        }

        else if (!isValidEmail(emailField.value)) {
            isValid = false;
            displayError(emailError, "Invalid email.")
        }

        //Validation code for phone number
        const phoneNumberField = document.getElementById("phonenumber");
        const phoneNumberError = document.getElementById("phonenumber-error");
        if (phoneNumberField.value.length == 0) {
            isValid = false;
            displayError(phoneNumberError, "This field is required.");
        }
        else if (!isValidPhoneNumber(phoneNumberField.value)) {
            isValid = false;
            displayError(phoneNumberError, "Invalid phone number");
        }

        //Validation code for user name field
        const userNameField = document.getElementById("username");
        const userNameError = document.getElementById("username-error");
        if (userNameField.value.length == 0) {
            isValid = false;
            displayError(userNameError, "This field is required.");
        }
        else if (!isValidUserName(userNameField.value)) {
            isValid = false;
            displayError(userNameError, "User name shouldn't contain numbers or special character like @,@,$ etc.");
        }

        //Validation code for genderSelect
        const genderSelect = document.getElementById("gender");
        const genderError = document.getElementById("gender-error");
        if (genderSelect.value.length == 0) {
            isValid = false;
            displayError(genderError, "This field is required!");
        }

        //Validation code for ageSelect
        const ageSelect = document.getElementById("age");
        const ageError = document.getElementById("age-error");
        if (ageSelect.value.length == 0) {
            isValid = false;
            displayError(ageError, "This field is required");
        }

        //Validation code for passwordField
        const passwordField = document.getElementById("password");
        const passwordError = document.getElementById("password-error");
        if (passwordField.value.length == 0) {
            isValid = false;
            displayError(passwordError, "This field is required");
        }
        else if (passwordField.value.length < 8 || passwordField.value.length > 8) {
            isValid = false;
            displayError(passwordError, "Password must be at least 8 characters long.");
        }
        //Validation code for confirmPasswordField
        const confirmPasswordField = document.getElementById("confirmpassword");
        const confirmpasswordError = document.getElementById("confirmpassword-error");

        if (confirmPasswordField.value.length == 0) {
            isValid = false;
            displayError(confirmpasswordError, "This field is required");
        }
       else if (passwordField.value !== confirmPasswordField.value) {
            isValid = false;
            displayError(confirmpasswordError, "Password must be confirm.");
        }

        if (isValid) {
            // If all validations pass, you can submit the form here
            form.submit();
        }
    });

    //  firstname validation regex 
    function isValidFirstName(firstname) {
        const firstNameRegex = /^[A-Za-z\s]+$/;
        return firstNameRegex.test(firstname);
    }
    //  lastname validation regex
    function isValidLastName(lastname) {
        const lastNameRegex = /^[A-Za-z\s]+$/;
        return lastNameRegex.test(lastname);
    }

    //   email validation regex 
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    //   phonenumber validation regex 

    function isValidPhoneNumber(phonenumber) {
        const phoneNumberRegex = /^(09\d{8}|\+251\d{9})$/;
        return phoneNumberRegex.test(phonenumber);
    }
    //   username validation regex 
    function isValidUserName(username) {
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



