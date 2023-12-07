document.addEventListener('DOMContentLoaded', function () {
    var clickableImage = document.getElementById('clickableImage');
    var absoluteRightDiv = document.querySelector('.absolute-right');
    var myContainer = document.querySelector('.container');
    var humburgerIcon = document.querySelector('.humburger');
    var leftSide = document.querySelector('.left-side');
    var rightSide = document.querySelector('.right-side');
    var videoContainer = document.querySelector('.video-container');
    var createVideo = document.querySelector('.create-video');
    var faFilm = document.querySelector('.fa-film');

    clickableImage.addEventListener('click', function () {
        absoluteRightDiv.style.display = (absoluteRightDiv.style.display === 'block') ? '' : 'block';
    });

    humburgerIcon.addEventListener('click', function () {
        leftSide.style.display = (leftSide.style.display === 'none') ? '' : 'none';
        rightSide.style.width = (leftSide.style.display === 'none') ? '100%' : 'calc(100% - leftSideWidth)';
        myContainer.style.display = (leftSide.style.display === 'none') ? 'block' : 'grid';
        // videoContainer.style.marginLeft = '50px';
    });

    // When the container div is clicked
    absoluteRightDiv.addEventListener('click', function (event) {
        // Prevent the event from bubbling up to the document
        event.stopPropagation();
    });

    createVideo.addEventListener('click',function(event){
        event.stopPropagation();
    });

    faFilm.addEventListener('click', function () {
        createVideo.style.display = (createVideo.style.display === 'block') ? '' : 'block';
    });

    // When the document is clicked
    myContainer.addEventListener('click', function () {
        // Hide the absolute-right div
        absoluteRightDiv.style.display = 'none';
        createVideo.style.display = 'none';
    });
});
