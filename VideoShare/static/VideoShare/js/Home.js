document.addEventListener('DOMContentLoaded', function () {
    // Get the clickable image and the absolute-right div
    var clickableImage = document.getElementById('clickableImage');
    var absoluteRightDiv = document.querySelector('.absolute-right');
    var myContainer = document.querySelector('.container')

    clickableImage.addEventListener('click', function () {
        absoluteRightDiv.style.display = 'block';
    });

    // When the container div is clicked
    absoluteRightDiv.addEventListener('click', function (event) {
        // Prevent the event from bubbling up to the document
        event.stopPropagation();
    });

    // When the document is clicked
    myContainer.addEventListener('click', function () {
        // Hide the absolute-right div
        absoluteRightDiv.style.display = 'none';
    });
});
