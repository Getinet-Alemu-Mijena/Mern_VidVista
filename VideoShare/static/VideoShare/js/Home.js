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
    var voiceSearch = document.getElementById('voice-search-btn');
    const audioToText = document.getElementById('audio-to-text');
    const statusElement = document.getElementById('status');
    const recordButton = document.getElementById('recordButton');
    const mainContainer = document.querySelector('.main-container');
    const faBell = document.querySelector('.fa-bell');

    let isRecording = false;
    let recognition;

    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;

        recognition.onstart = function () {
            isRecording = true;
            statusElement.textContent = 'Recording...';
            recordButton.textContent = 'Stop Recording';
        };

        recognition.onerror = function (event) {
            console.error(event.error);
            isRecording = false;
            statusElement.textContent = 'Error occurred. Please try again.';
            recordButton.textContent = 'Start Recording';
        };

        recognition.onend = function () {
            isRecording = false;
            statusElement.textContent = 'Click the microphone icon to start recording...';
            recordButton.textContent = 'Start Recording';
        };

        recognition.onresult = function (event) {
            const result = event.results[event.results.length - 1][0].transcript;
            statusElement.textContent = 'Result: ' + result;

            // You can use the 'result' variable to perform a search or any other action.
            // For now, let's log it to the console.
            console.log('Speech-to-text result:', result);
        };
    } else {
        statusElement.textContent = 'Speech recognition not supported in your browser.';
        recordButton.style.display = 'none';
    }

    recordButton.addEventListener('click', function () {
        if (isRecording) {
            recognition.stop();
        } else {
            recognition.start();
        }
    });
    recognition.onresult = function (event) {
        const result = event.results[event.results.length - 1][0].transcript;
        statusElement.textContent = 'Result: ' + result;

        // Update the search input value with the recorded text
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = result;
        }

        // You can remove or modify the following line based on your requirements
        console.log('Speech-to-text result:', result);
    };
    clickableImage.addEventListener('click', function () {
        absoluteRightDiv.style.display = (absoluteRightDiv.style.display === 'block') ? '' : 'block';
        createVideo.style.display = 'none';
        mainContainer.style.display = 'none';
        audioToText.style.display = 'none';
    });

    faBell.addEventListener('click', function () {
        mainContainer.style.display = (mainContainer.style.display === 'block') ? '' : 'block';
        createVideo.style.display = 'none';
        absoluteRightDiv.style.display = 'none';
    });

    voiceSearch.addEventListener('click', function () {
        audioToText.style.display = (audioToText.style.display === 'block') ? '' : 'block';
        createVideo.style.display = 'none';
        absoluteRightDiv.style.display = 'none';
        mainContainer.style.display = 'none';
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
         absoluteRightDiv.style.display = 'none';
        mainContainer.style.display = 'none';
        audioToText.style.display = 'none';
    });

    // When the document is clicked
    myContainer.addEventListener('click', function () {
        // Hide the absolute-right div
        absoluteRightDiv.style.display = 'none';
        createVideo.style.display = 'none';
        mainContainer.style.display = 'none';
    });
});
