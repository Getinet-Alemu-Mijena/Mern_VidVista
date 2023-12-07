document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('upload-form');
  const fileInput = document.getElementById('my-file');
  const thumbnailInput = document.getElementById('thumbnail');
  const errorSpan = form.querySelector('#video-file-error');
 
  fileInput.addEventListener("change", function () {
    clearErrorMessages();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrorMessages();
    let isValid = validateForm();


    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');

    if (nameInput.value.length == 0) {
      isValid = false;
      displayError(nameError, "This field is required.");
    }

    else if (nameInput.value.length < 5) {
      isValid = false;
      displayError(nameError, "Name must be at least 5 characters long.");
    }
    else if (nameInput.value.length > 50) {
      isValid = false;
      displayError(nameError, "Name must be at most 50 characters long.");
    }

    else if (!isValidName(nameInput.value)) {
      isValid = false;
      displayError(nameError, "Name shouldn't contain numbers or special character like @,@,$ etc.");
    }


    const keywordsInput = document.getElementById('Keywords');
    const keywordsError = document.getElementById('Keywords-error');

    if (keywordsInput.value.length == 0) {
      isValid = false;
      displayError(keywordsError, "This field is required.");
    }

    else if (keywordsInput.value.length < 5) {
      isValid = false;
      displayError(keywordsError, "Keywords must be at least 5 characters long.");
    }
    else if (keywordsInput.value.length > 50) {
      isValid = false;
      displayError(keywordsError, "Keywords must be at most 50 characters long.");
    }

    else if (!isValidKeywords(keywordsInput.value)) {
      isValid = false;
      displayError(keywordsError, "Keywords shouldn't contain numbers or special character like @,@,$ etc.");
    }


    const thumbnailError = document.getElementById('thumbnail-error');
    if (!thumbnailInput.files.length) {
      isValid = false;
      displayError(thumbnailError, "Please choose a thumbnail image file.");
    } else {
      // Validate thumbnail file extension using a case-insensitive regular expression
      const allowedThumbnailExtensions = /\.(jpg|jpeg|png)$/i;
      const thumbnailFileName = thumbnailInput.files[0].name;
      // Validate thumbnail MIME type
      const allowedThumbnailMimeTypes = ['image/jpeg', 'image/png'];
      const thumbnailMimeType = thumbnailInput.files[0].type;

      if (!allowedThumbnailExtensions.test(thumbnailFileName) || !allowedThumbnailMimeTypes.includes(thumbnailMimeType)) {
        isValid = false;
        displayError(thumbnailError, "Please choose a valid JPG or PNG image file for the thumbnail.");
      }
    }

    const descriptionInput = document.getElementById('description');
    const descriptionError = document.getElementById('description-error');

    if (descriptionInput.value.length == 0) {
      isValid = false;
      displayError(descriptionError, "This field is required.");
    }

    else if (descriptionInput.value.length < 50) {
      isValid = false;
      displayError(descriptionError, "Description must be at least 50 characters long.");
    }
    else if (descriptionInput.value.length > 1000) {
      isValid = false;
      displayError(descriptionError, "Description must be at most 1000 characters long.");
    }

    else if (!isValidDescription(descriptionInput.value)) {
      isValid = false;
      displayError(descriptionError, "Description shouldn't contain numbers or special character like @,@,$ etc.");
    }
    
    const categoryInput = document.getElementById('category');
    const categoryError = document.getElementById('category-error');

    if (categoryInput.value.length === ' ') {
      isValid = false;
      displayError(categoryError, "This field is required.");
    }

    
    const privacyInput = document.getElementById('privacy');
    const privacyError = document.getElementById('privacy-error');

    if (privacyInput.value.length === ' ') {
      isValid = false;
      displayError(privacyError, "This field is required.");
    }

    if (isValid) {
      form.submit();
    }
  });

  // Function to validate the form
  function validateForm() {
    let isValid = true;

    // Check if a file is selected
    if (!fileInput.files.length) {
      displayError(errorSpan, "Please choose a video file.");
      isValid = false;
    } else {
      // Validate file extension using a case-insensitive regular expression
      const allowedExtensions = /\.(mp4)$/i;
      const fileName = fileInput.files[0].name;

      // Validate MIME type
      const allowedMimeTypes = ['video/mp4'];
      const fileMimeType = fileInput.files[0].type;

      if (!allowedExtensions.test(fileName) || !allowedMimeTypes.includes(fileMimeType)) {
        displayError(errorSpan, "Please choose a valid .mp4 video file.");
        isValid = false;
      }
    }

    return isValid;
  }

  function isValidName(name) {
    const firstNameRegex = /^[A-Za-z\s]+$/;
    return firstNameRegex.test(name);
}

function isValidKeywords(Keywords) {
  const firstNameRegex = /^[A-Za-z\s]+$/;
  return firstNameRegex.test(Keywords);
}

function isValidDescription(description) {
  const firstNameRegex = /^[A-Za-z\s]+$/;
  return firstNameRegex.test(description);
}


  // Function to display error
  function displayError(element, message) {
    element.textContent = message;
    element.style.display = "block";
  }

  // Function to clear error messages
  function clearErrorMessages() {
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach((errorMessage) => {
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    });
  }
});
